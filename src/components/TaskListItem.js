import React from 'react'

export default function TaskListItem({ index, task }) {
  return (
    <div key={index} className='flex flex-row m-2'>
        <div className='flex-grow font-medium px-2'>{task.name}</div>
        <div className='opacity-60 align-middle justify-self-center'>steps: {task.tasksCount}</div>
    </div>

  )
}
