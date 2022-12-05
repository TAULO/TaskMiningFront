import React, { useEffect, useState } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import TaskListComponent from '../components/TaskListComponent'
import SpinnerComponent from "../components/SpinnerComponent"
import useFetch from '../Hooks/useFetch'

export default function Analyse() {


  const { response, loading, error } = useFetch("http://localhost:5104/api/tasks")

  return (
    <div>
      <div>
        {response == null ? <SpinnerComponent></SpinnerComponent> : <TaskListComponent tasksList={response}></TaskListComponent>}
      </div>
    </div>
  )
}
