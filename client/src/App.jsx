import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers () {
      fetch('http://localhost:5000/users').then((response) => response.json()).then((response) => 
      setUsers(response.users))
    }

    fetchUsers()
  }, [])

  return (
    <div>
      {users.map((user, key) => (<p key={key}>{user}</p>))}
    </div>
  )
}

export default App
