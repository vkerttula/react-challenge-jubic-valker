import React, { useState } from 'react';
import PopupComponent from './PopupComponent';

const TaskComponent = ( props ) => {

    const [isOpen, setIsOpen] = useState(false);

    const handlePopup = () => {
      setIsOpen(!isOpen);
    };

    const remove = () => {
        props.onRemove(props.task.id);
        if(isOpen) handlePopup();
    };

  return (
    <tr valign="top" className='task'>
        <th className='name'><div>{props.task.name}</div></th>
        <th className='description'>{props.task.description}</th>
        <th></th>
        <th>
          <button onClick={remove}>Delete</button>
          <button onClick={handlePopup}>Details</button>
        </th>
        {isOpen && <PopupComponent
          content={
          <>
            <h3>{props.task.name}</h3>
            <p>Description: {props.task.description}</p>
            <p>Comment: {props.task.comment}</p>
            <button onClick={remove}>Delete</button>
          </>}
          handleClose={handlePopup}
        />}
    </tr>
  )
};

export default TaskComponent;