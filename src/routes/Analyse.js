import React, { useEffect, useState } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import TaskListComponent from '../components/TaskListComponent'

export default function Analyse() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchAllTasks = async () => {
      const res = await fetch("http://localhost:5104/api/tasks")
      return await res.json()
    }
    fetchAllTasks()
    .then(data => setTasks(data))
  }, [])

  async function getAllTasks() {
    const res = await fetch("http://localhost:5104/api/tasks")
    return await res.json()
  }

  async function getAnalyse() {
    // const res = await fetch("http://localhost:5104/api/tasks/analyse/data")
    // const data = await res.json()

    // console.log(data)
  }
  
  return (
    <div>
      <TaskListComponent tasksList={tasks}></TaskListComponent>
      <ButtonComponent text="test" onClick={getAnalyse}></ButtonComponent>
    </div>
  )
}
