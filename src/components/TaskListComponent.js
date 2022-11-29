import React, { useState } from 'react'
import TaskHeaderComponent from './TaskHeaderComponent';
import TaskFlowComponent from './TaskFlowComponent';
import StatsComponent from './StatsComponent';
import TasksListComponent from './TasksListComponent';
import UIStatsComponent from './UIStatsComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse, faKeyboard } from '@fortawesome/free-solid-svg-icons';

export default function TaskListComponent({ tasksList }) {
    const [indvTasks, setIndvTasks] = useState({})
    const [tasks, setTasks] = useState(tasksList)

    async function search(task) {
        const value = task.target.value.trim()
    }

    async function getTask(task) {
        const value = task.target.textContent
        setIndvTasks(tasksList.find(task => task.name === value))
    }

    function orderName() {
        const sortArr = tasksList.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          setTasks(sortArr)
    }

    function orderSteps() {
        setTasks(tasksList.sort((a, b) => parseInt(a.tasksCount) - parseInt(b.tasksCount)).reverse())
    }

    function orderLongestTask() {
        setTasks(tasksList.sort((a, b) => parseInt(a.taskCompletionTimeSeconds) - parseInt(b.taskCompletionTimeSeconds)).reverse())
    }


    return (
        <div className='flex'>
            <TasksListComponent tasksList={tasksList} orderName={orderName} orderSteps={orderSteps} orderLongestTask={orderLongestTask} search={search} getTask={getTask}></TasksListComponent>
            <div>
                <TaskHeaderComponent indvTask={indvTasks || {}}></TaskHeaderComponent>
                <TaskFlowComponent indvTask={indvTasks || {}}></TaskFlowComponent>
            </div>
            <div className='flex flex-col flex-1'>
                <StatsComponent object={indvTasks?.timeSpentPrApplication} unit="sec" taskCompletionTime={indvTasks?.taskCompletionTimeSeconds} title="Time spent per application"></StatsComponent>
                <StatsComponent object={indvTasks?.individualTaskUserCount} unit="steps" taskCompletionTime={indvTasks?.tasksCount}  title="User total individual steps"></StatsComponent>
                {/* <UIStatsComponent object={indvTasks.individualTaskUserInteractionsCount["MOUSE_LEFT_CLICK" || ""] || {}} title="Mouse left click" totalUI={indvTasks.userInteractions?.length || 0} icon={<FontAwesomeIcon icon={faMouse}></FontAwesomeIcon>}></UIStatsComponent>
                <UIStatsComponent object={indvTasks.individualTaskUserInteractionsCount["KEYBOARD_CLICK" || ""] || {}} title="Keyboard click" totalUI={indvTasks.userInteractions?.length || 0} icon={<FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>}></UIStatsComponent>
                <UIStatsComponent object={indvTasks.individualTaskUserInteractionsCount["KEYBOARD_SEND_KEYS" || ""] || {}} title="Keyboard send keys" totalUI={indvTasks.userInteractions?.length || 0} icon={<FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>}></UIStatsComponent> */}
            </div>
        </div>
    )
}
