import React, { useEffect } from 'react'
import { cn } from '../../lib/utils'

interface ToastProps {
  message: {
    type: 'success' | 'error'
    text: string
  }
  onClose: () => void
  duration?: number
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [onClose, duration])

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in-right">
      <div
        className={cn(
          "px-6 py-4 rounded-lg shadow-lg border max-w-md",
          message.type === 'success' 
            ? "bg-green-50 border-green-200 text-green-800" 
            : "bg-red-50 border-red-200 text-red-800"
        )}
      >
        <div className="flex items-center gap-3">
          {message.type === 'success' ? (
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          <p className="font-['Sora',Helvetica] font-medium text-sm">{message.text}</p>
          <button
            onClick={onClose}
            className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}