import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  ExternalLink, 
  Download, 
  Eye,
  ChevronDown,
  ChevronUp,
  Copy,
  Share2,
  Brain,
  Shield
} from 'lucide-react'
import { toast } from 'react-toastify'

const PlagiarismResults = ({ results, onDownloadReport }) => {
  const [expandedSource, setExpandedSource] = useState(null)
  const [showAllSources, setShowAllSources] = useState(false)

  const getScoreColor = (score, type = 'plagiarism') => {
    if (type === 'ai') {
      if (score <= 1) return 'green'
      if (score <= 3) return 'amber'
      return 'rose'
    } else {
      if (score <= 5) return 'green'
      if (score <= 12) return 'amber'
      return 'rose'
    }
  }

  const getScoreIcon = (score, type = 'plagiarism') => {
    const colorClass = getScoreColor(score, type)
    if (colorClass === 'green') return <CheckCircle size={20} className="text-emerald-500" />
    if (colorClass === 'amber') return <AlertTriangle size={20} className="text-amber-500" />
    return <XCircle size={20} className="text-rose-500" />
  }

  const getScoreMessage = (score, type = 'plagiarism') => {
    if (type === 'ai') {
      if (score <= 1) return 'Low AI detection - Content appears to be human-written'
      if (score <= 3) return 'Moderate AI detection - Some AI-generated patterns detected'
      return 'High AI detection - Content may be AI-generated'
    } else {
      if (score <= 5) return 'Low plagiarism detected - Content appears to be mostly original'
      if (score <= 12) return 'Moderate plagiarism detected - Review and cite sources properly'
      return 'High plagiarism detected - Significant revision required'
    }
  }

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text)
    toast.success('Text copied to clipboard!')
  }

  const handleShareResults = () => {
    const shareData = {
      title: 'BMI Campus Academic Integrity Report',
      text: `Plagiarism: ${results.overallScore}% | AI Detection: ${results.aiScore}% - ${getScoreMessage(results.overallScore)}`,
      url: window.location.href
    }

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => toast.success('Results shared successfully!'))
        .catch(() => toast.error('Failed to share results'))
    } else {
      const shareText = `${shareData.title}\n${shareData.text}\n${shareData.url}`
      navigator.clipboard.writeText(shareText)
        .then(() => toast.success('Share link copied to clipboard!'))
        .catch(() => toast.error('Failed to copy share link'))
    }
  }

  const displayedSources = showAllSources ? results.sources : results.sources.slice(0, 3)

  return (
    <motion.div 
      className="bg-white border border-slate-200 shadow-premium rounded-3xl overflow-hidden space-y-6 pb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="plagiarism-results-container"
    >
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center bg-slate-900 text-white p-4 sm:px-6 border-b border-slate-800 gap-4">
        <div className="flex items-center gap-2">
          <Shield size={20} className="text-accent" />
          <span className="font-extrabold text-xs tracking-wider uppercase">BMI Originality Report</span>
        </div>
        <div className="flex gap-2">
          <button 
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors focus:outline-none" 
            onClick={onDownloadReport}
          >
            <Download size={14} />
            Download PDF
          </button>
          <button 
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors focus:outline-none" 
            onClick={handleShareResults}
          >
            <Share2 size={14} />
            Share
          </button>
        </div>
      </div>

      {/* Submission details */}
      <div className="px-6">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
          <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Submission Details</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Submission ID:</span>
              <strong className="text-slate-800">{results.submissionId}</strong>
            </div>
            <div className="truncate">
              <span className="text-slate-400 block mb-0.5">Document:</span>
              <strong className="text-slate-800 truncate block" title={results.checkedContent}>{results.checkedContent}</strong>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Checked Date:</span>
              <strong className="text-slate-800">{new Date(results.timestamp).toLocaleDateString()}</strong>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Word Count:</span>
              <strong className="text-slate-800">{results.wordCount.toLocaleString()} words</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Similarity & AI percentage meters */}
      <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Similarity Score Card */}
        {(() => {
          const color = getScoreColor(results.overallScore)
          const colorClasses = {
            green: 'border-emerald-250 bg-emerald-50/10 text-emerald-800',
            amber: 'border-amber-250 bg-amber-50/10 text-amber-800',
            rose: 'border-rose-250 bg-rose-50/10 text-rose-800'
          }[color]
          
          return (
            <motion.div 
              className={`p-5 rounded-2xl border ${colorClasses} space-y-4`}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Shield size={16} />
                  Similarity Index
                </span>
                {getScoreIcon(results.overallScore)}
              </div>
              <div className="text-4xl font-extrabold tracking-tight flex items-baseline gap-1">
                {results.overallScore}
                <span className="text-base font-semibold">%</span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full rounded-full ${
                    color === 'green' ? 'bg-emerald-500' : color === 'amber' ? 'bg-amber-500' : 'bg-rose-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(results.overallScore * 2, 100)}%` }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </div>
              <p className="text-[11px] font-semibold text-slate-500">{getScoreMessage(results.overallScore)}</p>
            </motion.div>
          )
        })()}

        {/* AI detection card */}
        {(() => {
          const color = getScoreColor(results.aiScore, 'ai')
          const colorClasses = {
            green: 'border-emerald-250 bg-emerald-50/10 text-emerald-800',
            amber: 'border-amber-250 bg-amber-50/10 text-amber-800',
            rose: 'border-rose-250 bg-rose-50/10 text-rose-800'
          }[color]

          return (
            <motion.div 
              className={`p-5 rounded-2xl border ${colorClasses} space-y-4`}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Brain size={16} />
                  AI Writing Score
                </span>
                {getScoreIcon(results.aiScore, 'ai')}
              </div>
              <div className="text-4xl font-extrabold tracking-tight flex items-baseline gap-1">
                {results.aiScore}
                <span className="text-base font-semibold">%</span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full rounded-full ${
                    color === 'green' ? 'bg-emerald-500' : color === 'amber' ? 'bg-amber-500' : 'bg-rose-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(results.aiScore * 2, 100)}%` }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />
              </div>
              <p className="text-[11px] font-semibold text-slate-500">{getScoreMessage(results.aiScore, 'ai')}</p>
            </motion.div>
          )
        })()}
      </div>

      {/* Collapsible matched sources */}
      {results.sources.length > 0 && (
        <div className="px-6 space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h4 className="font-extrabold text-slate-800 text-sm">Matched Sources</h4>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{results.sources.length} sources</span>
          </div>

          <div className="space-y-3">
            <AnimatePresence>
              {displayedSources.map((source, index) => {
                const isExpanded = expandedSource === index
                return (
                  <motion.div
                    key={index}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      {/* Left details */}
                      <div className="flex gap-3 min-w-0">
                        <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <div className="min-w-0 space-y-0.5">
                          <h5 className="font-bold text-slate-850 text-xs truncate" title={source.title}>{source.title}</h5>
                          <a 
                            href={source.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] text-accent hover:underline flex items-center gap-1 w-fit truncate max-w-xs"
                          >
                            {source.url}
                            <ExternalLink size={10} />
                          </a>
                        </div>
                      </div>
                      
                      {/* Right match index */}
                      <span className="px-2 py-0.5 rounded-lg bg-rose-50 text-rose-600 font-extrabold text-[10px] shrink-0 mt-0.5">
                        {source.similarity}% Match
                      </span>
                    </div>

                    {/* Actions toolbar */}
                    <div className="flex gap-2">
                      <button 
                        className="px-2.5 py-1 border border-slate-200 hover:bg-slate-50 rounded-lg text-[10px] font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition-colors focus:outline-none"
                        onClick={() => setExpandedSource(isExpanded ? null : index)}
                      >
                        <Eye size={12} />
                        {isExpanded ? 'Hide Match' : 'View Matching Quote'}
                        {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </button>
                      <button 
                        className="p-1 border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-500 hover:text-slate-800 transition-colors focus:outline-none"
                        onClick={() => handleCopyText(source.matchedText)}
                        title="Copy matching text"
                      >
                        <Copy size={12} />
                      </button>
                    </div>

                    {/* Collapsible matched text */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          className="bg-slate-50 border border-slate-200/60 rounded-lg p-3.5 text-xs text-slate-600 leading-relaxed italic"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="font-bold text-[9px] uppercase tracking-wider text-slate-400 not-italic mb-1">Matching Paragraph:</div>
                          "{source.matchedText}"
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Show more toggle */}
          {results.sources.length > 3 && (
            <button 
              className="w-full py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
              onClick={() => setShowAllSources(!showAllSources)}
            >
              {showAllSources ? 'Show Less Matches' : `Show ${results.sources.length - 3} More Sources`}
              {showAllSources ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          )}
        </div>
      )}

      {/* Analysis summary card */}
      <div className="px-6">
        <div className="p-5 border border-slate-200/80 rounded-2xl space-y-4">
          <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Metrics Summary</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50">
              <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider mb-0.5">Total Words</span>
              <strong className="text-base text-slate-800 tracking-tight">{results.wordCount.toLocaleString()}</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50">
              <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider mb-0.5">Sources Found</span>
              <strong className="text-base text-slate-800 tracking-tight">{results.sources.length}</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50">
              <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider mb-0.5">Highest match</span>
              <strong className="text-base text-slate-800 tracking-tight">
                {Math.max(...results.sources.map(s => s.similarity), 0)}%
              </strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50">
              <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider mb-0.5">Averages Risk</span>
              <strong className="text-base text-slate-800 tracking-tight">
                {Math.floor((results.overallScore + results.aiScore) / 2)}%
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="px-6 space-y-3">
        <h4 className="font-bold text-slate-850 text-xs uppercase tracking-wider">Academic Recommendations</h4>
        <div className="space-y-2 text-xs">
          {results.overallScore > 12 && (
            <div className="p-3 rounded-xl border border-rose-200 bg-rose-50/20 text-rose-700 flex items-start gap-2">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <span>High similarity index. Significant restructuring of matched paragraphs, proper quotes, and in-text bibliography references are urgently required before submission.</span>
            </div>
          )}
          {results.overallScore > 5 && results.overallScore <= 12 && (
            <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/20 text-amber-700 flex items-start gap-2">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <span>Moderate similarity index. Review flagged sentences, paraphrase sections in your own words, and double-check inline academic references.</span>
            </div>
          )}
          {results.overallScore <= 5 && (
            <div className="p-3 rounded-xl border border-emerald-250 bg-emerald-50/20 text-emerald-700 flex items-start gap-2">
              <CheckCircle size={16} className="shrink-0 mt-0.5" />
              <span>Excellent similarity index. Content appears highly original and satisfies university academic integrity boundaries.</span>
            </div>
          )}
          {results.aiScore > 3 && (
            <div className="p-3 rounded-xl border border-rose-200 bg-rose-50/20 text-rose-700 flex items-start gap-2">
              <Brain size={16} className="shrink-0 mt-0.5" />
              <span>Substantial AI patterns recognized. Review writing structures, ensure you are utilizing your own voice, and avoid direct copying of LLM output.</span>
            </div>
          )}
          {results.aiScore <= 1 && (
            <div className="p-3 rounded-xl border border-emerald-250 bg-emerald-50/20 text-emerald-700 flex items-start gap-2">
              <Brain size={16} className="shrink-0 mt-0.5" />
              <span>Content indicates natural language structures. Matches standard manual writing patterns.</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default PlagiarismResults