import React from 'react'
import { useDropzone } from 'react-dropzone'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Upload,
    FileText,
    File,
    X,
    CheckCircle,
    AlertCircle,
    RefreshCw
} from 'lucide-react'

const FileUploadZone = ({ onFileUpload, files, onRemoveFile, processedFiles }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: onFileUpload,
        accept: {
            'text/plain': ['.txt'],
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        },
        maxSize: 10 * 1024 * 1024, // 10MB
        multiple: true
    })

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    const getFileIcon = (type) => {
        if (type.includes('pdf')) return <File size={18} />
        if (type.includes('word') || type.includes('document')) return <FileText size={18} />
        return <FileText size={18} />
    }

    const getFileStatus = (fileId) => {
        const processedFile = processedFiles.find(pf => pf.id === fileId)
        return processedFile || files.find(f => f.id === fileId)
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case 'ready':
                return <CheckCircle size={14} className="text-emerald-500 shrink-0" />
            case 'processing':
                return <RefreshCw size={14} className="text-primary animate-spin shrink-0" />
            case 'error':
                return <AlertCircle size={14} className="text-rose-500 shrink-0" />
            default:
                return <CheckCircle size={14} className="text-emerald-500 shrink-0" />
        }
    }

    const getWordCount = (fileId) => {
        const processedFile = processedFiles.find(pf => pf.id === fileId)
        return processedFile?.processedData?.wordCount || 0
    }

    return (
        <div className="space-y-6">
            <motion.div
                {...getRootProps()}
                className={`p-8 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 ${
                    isDragActive 
                        ? 'border-primary bg-primary/5' 
                        : 'border-slate-300 bg-slate-50 hover:bg-slate-100/50 hover:border-slate-400'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center space-y-3">
                    <motion.div
                        className="p-4 bg-white border border-slate-200 rounded-full text-slate-400 shadow-sm"
                        animate={{
                            y: isDragActive ? [-5, 5, -5] : [0]
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: isDragActive ? Infinity : 0,
                            ease: "easeInOut"
                        }}
                    >
                        <Upload size={32} />
                    </motion.div>

                    <div className="space-y-1">
                        <h4 className="font-bold text-slate-800 text-sm">
                            {isDragActive ? 'Drop files here' : 'Drag & drop assignment files here'}
                        </h4>
                        <p className="text-xs text-slate-500">or click to browse local files</p>
                    </div>

                    <div className="text-[10px] text-slate-400 font-semibold flex flex-col sm:flex-row sm:gap-3 items-center pt-2">
                        <span>Formats: PDF, DOC, DOCX, TXT</span>
                        <span className="hidden sm:inline">•</span>
                        <span>Max file size: 10MB</span>
                    </div>
                </div>
            </motion.div>

            {/* List of uploaded files */}
            <AnimatePresence>
                {files.length > 0 && (
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h4 className="font-bold text-slate-700 text-xs uppercase tracking-wider">Uploaded Documents ({files.length})</h4>
                        <div className="space-y-2">
                            {files.map((fileItem) => {
                                const fileStatus = getFileStatus(fileItem.id)
                                const wordCount = getWordCount(fileItem.id)
                                const isReady = fileStatus.status === 'ready'
                                const isError = fileStatus.status === 'error'

                                return (
                                    <motion.div
                                        key={fileItem.id}
                                        className={`flex items-center justify-between p-3.5 border rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors ${
                                            isError ? 'border-rose-200' : 'border-slate-200/80'
                                        }`}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        layout
                                    >
                                        <div className="flex items-center gap-3 min-w-0 flex-grow">
                                            <div className={`p-2 rounded-lg border text-slate-500 shrink-0 ${
                                                isError ? 'bg-rose-50 border-rose-100 text-rose-500' : 'bg-white border-slate-200'
                                            }`}>
                                                {getFileIcon(fileItem.type)}
                                            </div>
                                            <div className="min-w-0 space-y-0.5">
                                                <span className="text-xs font-bold text-slate-800 block truncate leading-tight">{fileItem.name}</span>
                                                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold">
                                                    <span>{formatFileSize(fileItem.size)}</span>
                                                    {wordCount > 0 && (
                                                        <>
                                                            <span>•</span>
                                                            <span className="text-slate-500">{wordCount.toLocaleString()} words</span>
                                                        </>
                                                    )}
                                                </div>
                                                {isError && (
                                                    <span className="text-[10px] text-rose-600 block pt-0.5 leading-tight">{fileStatus.error}</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 shrink-0 ml-4">
                                            {getStatusIcon(fileStatus.status)}
                                            <button
                                                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors disabled:opacity-30"
                                                onClick={() => onRemoveFile(fileItem.id)}
                                                disabled={fileStatus.status === 'processing'}
                                                title="Remove file"
                                            >
                                                <X size={14} />
                                            </button>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Summary Block */}
                        <div className="p-4 rounded-xl bg-slate-100/60 border border-slate-200/50 grid grid-cols-3 gap-4 text-center">
                            <div>
                                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">Total Files</span>
                                <span className="text-xs font-extrabold text-slate-800">{files.length}</span>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">Checked Words</span>
                                <span className="text-xs font-extrabold text-slate-800">
                                    {processedFiles
                                        .filter(f => f.status === 'ready')
                                        .reduce((total, f) => total + (f.processedData?.wordCount || 0), 0)
                                        .toLocaleString()}
                                </span>
                            </div>
                            <div>
                                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">Status Ready</span>
                                <span className="text-xs font-extrabold text-slate-800">
                                    {processedFiles.filter(f => f.status === 'ready').length} / {files.length}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default FileUploadZone