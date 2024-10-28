import React, { useState } from 'react'
import { Search, Menu, Bell, MessageSquare, User, Home, Users, HelpCircle, ChevronUp, X } from 'lucide-react'

// Mock data for questions
const questions = [
  { id: 1, title: "How to center a div?", votes: 10, answers: 5, views: 100, tags: ["css", "html"] },
  { id: 2, title: "What's the difference between let and const in JavaScript?", votes: 15, answers: 8, views: 200, tags: ["javascript", "es6"] },
  { id: 3, title: "How to use useEffect in React?", votes: 20, answers: 12, views: 300, tags: ["react", "hooks"] },
]

// Mock data for top questions
const topQuestions = [
  { id: 1, title: "How to implement authentication in Next.js?", votes: 25 },
  { id: 2, title: "Best practices for React performance optimization", votes: 30 },
  { id: 3, title: "How to deploy a Node.js application to Heroku?", votes: 18 },
]

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27" alt="Stack Overflow" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-b-2 border-orange-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Products
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <Menu className="h-6 w-6" />
              </button>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="relative">
                  <input type="text" placeholder="Search..." className="bg-gray-100 rounded-md py-2 px-4 w-64" />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  <Bell className="h-6 w-6" />
                </button>
                <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  <MessageSquare className="h-6 w-6" />
                </button>
                <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  <User className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar */}
          <div className={`${isSidebarOpen ? 'block' : 'hidden'} fixed inset-0 z-40 md:static md:block md:w-1/5 md:mr-4`}>
            <div className="h-full bg-white shadow-lg md:shadow-none">
              <div className="flex justify-between items-center p-4 md:hidden">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-600">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="space-y-1 p-4">
                <a href="#" className="bg-gray-200 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                  <Home className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                  <Users className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
                  Community
                </a>
                <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                  <HelpCircle className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
                  Ask Question
                </a>
              </nav>
            </div>
          </div>

          {/* Middle Content - All Questions */}
          <div className="w-full md:w-3/5">
            <h1 className="text-3xl font-bold mb-4">All Questions</h1>
            <div className="space-y-4">
              {questions.map((question) => (
                <div key={question.id} className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-2">{question.title}</h2>
                  <div className="flex flex-wrap justify-between items-center text-sm text-gray-500">
                    <div className="flex space-x-4 mb-2 sm:mb-0">
                      <span>{question.votes} votes</span>
                      <span>{question.answers} answers</span>
                      <span>{question.views} views</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {question.tags.map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Top Questions */}
          <div className="w-full md:w-1/5 mt-4 md:mt-0">
            <h2 className="text-lg font-semibold mb-4">Top Questions</h2>
            <div className="space-y-4">
              {topQuestions.map((question) => (
                <div key={question.id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-sm font-medium mb-2">{question.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <ChevronUp className="h-4 w-4 mr-1" />
                    <span>{question.votes} votes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}