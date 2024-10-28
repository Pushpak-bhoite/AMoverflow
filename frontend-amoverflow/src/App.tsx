import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home.tsx'
import AskQuestion from './pages/AskQuestion.tsx'
import SignUp from './pages/auth/SignUp.tsx'
import SignIn from './pages/auth/SignIn.tsx'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Home /> */}
      {/* <AskQustion /> */}
      {/* <SignUp /> */}
      {/* <h1 className='bg-green-700'>Hello world</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/ask-question" element={<AskQuestion />} />
      </Routes>
    </>
  )
}

export default App
