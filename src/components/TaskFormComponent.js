import React, { useRef, useState } from 'react';

const TaskFormComponent = ( props ) => {

  const nameInput = useRef();

  const [taskInput, setTaskInput] = useState({});

  const updateInput = ( event ) => {
    setTaskInput({...taskInput, [event.target.id]:event.target.value});
  };

  const clearInput = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setTaskInput({});
  };

  const addInput = () => {
    props.onChange(taskInput);
    clearInput();
    nameInput.current.focus();
  };

  return (
    <div className='inputs'>
      <div className='upper-inputs'>
        <div className='name-box'>
          <label>Name</label>
          <input id='name' ref={nameInput} autoFocus onBlur={(event) => updateInput(event)}></input>
        </div>
        <div className='description-box'>
          <label>Description</label>
          <input id='description' onBlur={(event) => updateInput(event)}></input>
        </div>
      </div>
      <div className='lower-inputs'>
        <div className='comment-box'>
          <label>Comment</label>
          <input id='comment' onBlur={(event) => updateInput(event)}></input>
        </div>
      </div>
      <div className='buttons'>
        <button onClick={clearInput}>Clear</button>
        <button onClick={addInput}>Add</button>
      </div>
    </div>
  )
};

export default TaskFormComponent;