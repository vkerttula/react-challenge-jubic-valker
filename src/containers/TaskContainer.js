import React, { useEffect, useState } from 'react';
import TaskComponent from '../components/TaskComponent';
import TaskFormComponent from '../components/TaskFormComponent';
import { addTaskToLocalStorage, getAllFromLocalStorage, removeTask } from '../controllers/TaskController';

const TaskContainer = () => {

    const [task, setTask] = useState(null);
    const [allTasks, setAllTasks] = useState();

    useEffect(() => {
        if(task !== null) {
            addTask(task);
        }
        getTasks();
    }, [task]);

    const getTasks = () => {
        setAllTasks(getAllFromLocalStorage());
    }

    const addTask = ( data ) => {
        addTaskToLocalStorage(data);
    }

    const handleChange = ( data ) => {
        setTask(data);
    };

    const handleRemove = ( data ) => {
        removeTask(data);
        getTasks();
    };

  return (
    <div>
        <div className='form-container'>
            <TaskFormComponent onChange={handleChange} />
        </div>
        <div className='list-container'>
            <table>
                <tbody>
                    <tr className='head'>
                        <th>Name</th><th>Description</th><th></th><th></th>
                    </tr>
                    {allTasks&&allTasks.map((task, index) => (
                        <TaskComponent task={task} key={index} onRemove={handleRemove} />
                    ))}
                </tbody>
            </table>
        </div>  
    </div>
  )
};

export default TaskContainer;