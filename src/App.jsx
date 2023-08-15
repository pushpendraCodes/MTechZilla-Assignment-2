import { useState } from 'react'

import './App.css'

import UserCard from './UserCard'
import Loader from './Loader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCard/>
    </>
  )
}

export default App
