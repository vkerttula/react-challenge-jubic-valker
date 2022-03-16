import React from 'react';

const TaskComponent = ( props ) => {

    const remove = () => {
        props.onRemove(props.task.id);
    };

  return (
    <tr className='task'>
        <th className='name'>{props.task.name}</th>
        <th className='description'>{props.task.description}</th>
        <th><button onClick={remove}>Delete</button></th>
        <th><button>Details</button></th>
    </tr>
  )
};

export default TaskComponent;