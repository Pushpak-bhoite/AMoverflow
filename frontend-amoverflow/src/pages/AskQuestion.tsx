'use client'

import { useState } from 'react'
import { AlertCircle } from 'lucide-react'

interface FormData {
  title: string
  body: string
  tags: string
}

export default function Component() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    body: '',
    tags: ''
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (formData.title.length < 15) {
      newErrors.title = 'Title must be at least 15 characters long'
    }
    if (formData.body.length < 30) {
      newErrors.body = 'Question body must be at least 30 characters long'
    }
    if (formData.tags.split(' ').filter(tag => tag.trim() !== '').length < 1) {
      newErrors.tags = 'At least one tag is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      // Reset form after submission
      setFormData({ title: '', body: '', tags: '' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Ask a Question</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. How do I create a React component?"
              className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.title}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
              Body
            </label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              placeholder="Provide details about your question..."
              rows={6}
              className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.body ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.body && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.body}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              value={formData.tags}
              onChange={handleChange}
              placeholder="e.g. react javascript typescript"
              className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.tags ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.tags && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.tags}
              </p>
            )}
            <p className="mt-1 text-sm text-gray-500">Add up to 5 tags to describe what your question is about</p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Post Your Question
          </button>
        </form>
      </div>
    </div>
  )
}