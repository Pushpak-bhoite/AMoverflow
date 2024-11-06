import { HelpCircle, Home, Users, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LeftSidebar = ({isSidebarOpen,toggleSidebar }) => {
   
  return (
    <div className={`${isSidebarOpen ? 'block' : 'hidden'} fixed inset-0 z-40 md:static md:block md:w-1/5 md:mr-4`}>
    <div className="h-full bg-white shadow-lg md:shadow-none">
      <div className="flex justify-between items-center p-4 md:hidden">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="space-y-2 p-4">
        <a href="#" className="bg-gray-200 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <Home className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
          Home
        </a>
        <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <Users className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
          Community
        </a>
        <Link to="/ask-question" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
          <HelpCircle className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
          Ask Question
        </Link>
      </nav>
    </div>
  </div>
  )
}

export default LeftSidebar


