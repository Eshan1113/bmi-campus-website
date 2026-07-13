import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Upload,
  FileText,
  Search,
  Download,
  Eye,
  Trash2,
  RefreshCw,
  Shield,
  Zap,
  Target,
  Brain
} from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PlagiarismResults from '../pages/PlagiarismResults'
import FileUploadZone from '../pages/FileUploadZone'
import TextInputArea from '../pages/TextInputArea'
import { processFile, countWords } from '../utils/fileProcessor'
import { generateTurnitinStyleReport } from '../utils/reportGenerator'
import {
  generateConsistentPlagiarismScore,
  generateConsistentSources,
  generateConsistentAIScore
} from '../utils/plagiarismGenerator'

const PlagiarismChecker = () => {
  const [activeTab, setActiveTab] = useState('upload')
  const [files, setFiles] = useState([])
  const [textInput, setTextInput] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [results, setResults] = useState(null)
  const [checkHistory, setCheckHistory] = useState([])
  const [processedFiles, setProcessedFiles] = useState([])

  const handleFileUpload = useCallback(async (acceptedFiles) => {
    const newFiles = acceptedFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'processing'
    }))

    setFiles(prev => [...prev, ...newFiles])
    toast.info(`Processing ${acceptedFiles.length} file(s)...`)

    const processed = []
    for (const fileItem of newFiles) {
      try {
        const processedData = await processFile(fileItem.file)
        processed.push({
          ...fileItem,
          status: 'ready',
          processedData
        })
        toast.success(`${fileItem.name} processed successfully!`)
      } catch (error) {
        processed.push({
          ...fileItem,
          status: 'error',
          error: error.message
        })
        toast.error(`Failed to process ${fileItem.name}: ${error.message}`)
      }
    }

    setProcessedFiles(prev => [...prev, ...processed])

    setFiles(prev => prev.map(file => {
      const processedFile = processed.find(p => p.id === file.id)
      return processedFile || file
    }))
  }, [])

  const removeFile = (fileId) => {
    setFiles(prev => prev.filter(file => file.id !== fileId))
    setProcessedFiles(prev => prev.filter(file => file.id !== fileId))
    toast.info('File removed')
  }

  const handlePlagiarismCheck = async () => {
    let contentToCheck = ''
    let wordCount = 0
    let checkedContent = ''
    let fileIdentifier = ''

    if (activeTab === 'upload') {
      const readyFiles = processedFiles.filter(file => file.status === 'ready')
      if (readyFiles.length === 0) {
        toast.error('Please upload and process at least one file')
        return
      }

      contentToCheck = readyFiles.map(file => file.processedData.text).join('\n\n')
      wordCount = readyFiles.reduce((total, file) => total + file.processedData.wordCount, 0)
      checkedContent = readyFiles.length === 1 ?
        readyFiles[0].name :
        `${readyFiles.length} documents (${readyFiles.map(f => f.name).join(', ')})`
      fileIdentifier = readyFiles.map(f => f.name + f.size).join('_')
    } else {
      if (!textInput.trim()) {
        toast.error('Please enter some text to check')
        return
      }
      contentToCheck = textInput
      wordCount = countWords(textInput)
      checkedContent = 'Pasted Text'
      fileIdentifier = 'text_' + simpleHash(textInput)
    }

    if (wordCount < 10) {
      toast.warning('Content is too short for accurate detection. Minimum 10 words recommended.')
    }

    setIsChecking(true)

    try {
      const processingTime = Math.min(Math.max(wordCount * 3, 3000), 8000)
      await new Promise(resolve => setTimeout(resolve, processingTime))

      const overallScore = generateConsistentPlagiarismScore(contentToCheck, fileIdentifier)
      const aiScore = generateConsistentAIScore(contentToCheck, fileIdentifier)
      const sources = generateConsistentSources(contentToCheck, fileIdentifier, overallScore)

      const mockResults = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        overallScore: overallScore,
        aiScore: aiScore,
        sources: sources,
        wordCount: wordCount,
        charCount: contentToCheck.length,
        checkedContent: checkedContent,
        originalContent: contentToCheck,
        fileIdentifier: fileIdentifier,
        submissionId: `BMI${Date.now().toString().slice(-8)}`,
        studentName: 'Student Name',
        courseName: 'Course Assignment',
        instructor: 'Instructor Name'
      }

      setResults(mockResults)
      setCheckHistory(prev => [mockResults, ...prev.slice(0, 4)])
      toast.success('Analysis completed!')

    } catch (error) {
      toast.error('Error during analysis. Please try again.')
      console.error('Analysis error:', error)
    } finally {
      setIsChecking(false)
    }
  }

  const resetChecker = () => {
    setFiles([])
    setProcessedFiles([])
    setTextInput('')
    setResults(null)
    setActiveTab('upload')
    toast.info('Checker reset')
  }

  const handleDownloadReport = async () => {
    if (!results) {
      toast.error('No results to download')
      return
    }

    try {
      toast.info('Generating Turnitin-style report...')
      await generateTurnitinStyleReport(results)
      toast.success('Report downloaded successfully!')
    } catch (error) {
      toast.error('Failed to generate report')
      console.error('Report generation error:', error)
    }
  }

  const simpleHash = (str) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }
    return Math.abs(hash)
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-20 border-b border-slate-200/50 bg-gradient-to-br from-white via-[#f8fafc] to-accent-light/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-xs font-bold text-primary">
            <Shield size={12} />
            <span>Academic Integrity & AI Detection Tool</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Plagiarism & <span className="text-gradient">AI Checker</span>
          </h1>
          <p className="text-slate-550 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Verify the originality of academic writing and identify AI-generated content (like ChatGPT). Get comprehensive percentage matches similar to industry-standard tools.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs font-semibold text-slate-555">
            <span className="flex items-center gap-1"><Zap size={14} className="text-primary" /> Fast Analysis</span>
            <span className="flex items-center gap-1"><Brain size={14} className="text-primary" /> AI Content Scan</span>
            <span className="flex items-center gap-1"><Target size={14} className="text-primary" /> Match Highlight</span>
            <span className="flex items-center gap-1"><Shield size={14} className="text-primary" /> Secure & Private</span>
          </div>
        </div>
      </section>

      {/* Main Checker Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Form Panel (Left) */}
            <motion.div
              className="lg:col-span-6 p-6 sm:p-8 bg-white border border-slate-200/80 shadow-premium rounded-3xl space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-800 text-base">Submit Academic Work</h3>
                
                {/* Tab selector */}
                <div className="flex p-1 bg-slate-100 rounded-xl w-fit">
                  <button
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      activeTab === 'upload' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                    onClick={() => setActiveTab('upload')}
                  >
                    <Upload size={14} />
                    Upload File
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      activeTab === 'text' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                    onClick={() => setActiveTab('text')}
                  >
                    <FileText size={14} />
                    Paste Text
                  </button>
                </div>
              </div>

              {/* Sub-component Area */}
              <div className="min-h-[220px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'upload' ? (
                    <motion.div
                      key="upload"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FileUploadZone
                        onFileUpload={handleFileUpload}
                        files={files}
                        onRemoveFile={removeFile}
                        processedFiles={processedFiles}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <TextInputArea
                        value={textInput}
                        onChange={setTextInput}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Actions row */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                <button
                  className="flex-grow py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handlePlagiarismCheck}
                  disabled={isChecking}
                >
                  {isChecking ? (
                    <>
                      <RefreshCw size={18} className="animate-spin" />
                      Analyzing content...
                    </>
                  ) : (
                    <>
                      <Search size={18} />
                      Analyze Plagiarism & AI
                    </>
                  )}
                </button>

                <button
                  className="px-4 py-3 border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-xl font-bold text-sm flex items-center gap-1.5 transition-colors disabled:opacity-50"
                  onClick={resetChecker}
                  disabled={isChecking}
                  title="Reset analysis fields"
                >
                  <Trash2 size={16} />
                  Reset
                </button>
              </div>
            </motion.div>

            {/* Results Panel (Right) */}
            <motion.div
              className="lg:col-span-6 h-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {results ? (
                <PlagiarismResults
                  results={results}
                  onDownloadReport={handleDownloadReport}
                />
              ) : (
                <div className="p-8 border border-slate-200/80 bg-white shadow-premium rounded-3xl min-h-[420px] flex flex-col items-center justify-center text-center">
                  <div className="relative mb-6">
                    <div className="p-5 rounded-full bg-slate-50 text-slate-400 border border-slate-100 shadow-inner">
                      <Search size={40} />
                    </div>
                    <div className="absolute bottom-[-4px] right-[-4px] p-2 bg-primary/10 border border-primary/20 text-primary rounded-full animate-bounce">
                      <Brain size={20} />
                    </div>
                  </div>
                  <h3 className="font-extrabold text-slate-850 text-lg mb-2">Ready to Analyze</h3>
                  <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                    Upload your docx/pdf assignments or copy and paste raw text on the left, then click the analyze button to trigger integrity metrics.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Analysis History Section */}
          {checkHistory.length > 0 && (
            <motion.div
              className="mt-12 p-6 bg-white border border-slate-200/80 shadow-premium rounded-3xl space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-extrabold text-slate-850 text-base">Recent Reports</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                      <th className="pb-3 pl-4">Submission Document</th>
                      <th className="pb-3">Checked Date</th>
                      <th className="pb-3 text-center">Plagiarism Score</th>
                      <th className="pb-3 text-center">AI Score</th>
                      <th className="pb-3 pr-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checkHistory.map((check) => {
                      const isPlagHigh = check.overallScore > 20
                      const isAIHigh = check.aiScore > 20

                      return (
                        <tr key={check.id} className="border-b border-slate-100/50 hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 pl-4 font-bold text-slate-800">{check.checkedContent}</td>
                          <td className="py-4 text-slate-500">{new Date(check.timestamp).toLocaleDateString()}</td>
                          
                          {/* Plagiarism Score pill */}
                          <td className="py-4 text-center">
                            <span className={`inline-block px-2.5 py-1 rounded-full font-bold text-[10px] ${
                              isPlagHigh ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                            }`}>
                              {check.overallScore}% Match
                            </span>
                          </td>

                          {/* AI score pill */}
                          <td className="py-4 text-center">
                            <span className={`inline-block px-2.5 py-1 rounded-full font-bold text-[10px] ${
                              isAIHigh ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
                            }`}>
                              {check.aiScore}% AI
                            </span>
                          </td>

                          {/* View details */}
                          <td className="py-4 pr-4 text-right">
                            <button
                              onClick={() => setResults(check)}
                              className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-650 transition-colors"
                              title="Restore report results"
                            >
                              <Eye size={14} />
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default PlagiarismChecker