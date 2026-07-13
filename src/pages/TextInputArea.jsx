import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Type, Copy, Trash2 } from 'lucide-react'
import { toast } from 'react-toastify'

const TextInputArea = ({ value, onChange }) => {
    const [wordCount, setWordCount] = useState(0)
    const [charCount, setCharCount] = useState(0)

    useEffect(() => {
        const words = value.trim() ? value.trim().split(/\s+/).length : 0
        setWordCount(words)
        setCharCount(value.length)
    }, [value])

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText()
            onChange(value + text)
            toast.success('Text pasted successfully!')
        } catch (err) {
            toast.error('Failed to paste text from clipboard')
        }
    }

    const handleClear = () => {
        onChange('')
        toast.info('Text cleared')
    }

    return (
        <div className="flex flex-col">
            {/* Header Toolbar */}
            <div className="flex justify-between items-center bg-slate-50 border border-slate-200 border-b-0 px-4 py-2.5 rounded-t-2xl">
                <div className="flex items-center gap-2 text-slate-650 font-bold text-xs">
                    <Type size={16} />
                    <span>Essay / Text Input</span>
                </div>
                <div className="flex gap-2">
                    <button
                        type="button"
                        className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-200/60 text-slate-500 hover:text-slate-800 transition-colors bg-white focus:outline-none"
                        onClick={handlePaste}
                        title="Paste from clipboard"
                    >
                        <Copy size={14} />
                    </button>
                    <button
                        type="button"
                        className="p-1.5 rounded-lg border border-slate-200 hover:bg-rose-50 hover:border-rose-200 text-slate-450 hover:text-rose-600 transition-colors bg-white focus:outline-none disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-slate-200"
                        onClick={handleClear}
                        title="Clear text"
                        disabled={!value}
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            </div>

            {/* Textarea Container */}
            <motion.div
                className="relative border border-slate-200 rounded-b-2xl overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all bg-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Paste your assignment text here (minimum 10 words)..."
                    className="w-full p-4 text-xs sm:text-sm text-slate-850 placeholder-slate-400 focus:outline-none bg-white resize-none"
                    rows={10}
                />

                {/* Inline Suggestions helper when empty */}
                {!value && (
                    <div className="absolute inset-x-4 bottom-4 pointer-events-none opacity-50 bg-slate-50 border border-slate-100 rounded-xl p-3 text-[10px] text-slate-500 space-y-1">
                        <p className="font-bold uppercase tracking-wider text-slate-450">Writing Check Tips:</p>
                        <ul className="list-disc pl-4 space-y-0.5 font-semibold">
                            <li>You can copy and paste contents directly from MS Word or Google Docs.</li>
                            <li>Make sure to enter a block of at least 50 words for optimal integrity scanning.</li>
                            <li>Both AI generated syntax patterns and copied paragraphs will be flagged.</li>
                        </ul>
                    </div>
                )}
            </motion.div>

            {/* Footer Stats bar */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center mt-3 gap-2 px-1">
                <div className="flex gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <span>Words: <strong className="text-slate-700">{wordCount.toLocaleString()}</strong></span>
                    <span>Characters: <strong className="text-slate-700">{charCount.toLocaleString()}</strong></span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider">
                    {wordCount < 10 ? (
                        <span className="text-rose-500">Too short to analyze</span>
                    ) : wordCount < 50 ? (
                        <span className="text-amber-500">Short text (accuracy may vary)</span>
                    ) : (
                        <span className="text-emerald-500">Ready for scan</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TextInputArea