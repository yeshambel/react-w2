import React from 'react'

const EditTodoItem = (props) =>{ 
  return (
    <form>
      <div className="form-group">
        <label>Description</label>
        <input type="text"  
        name="description" 
        value={props.description} 
        onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label className="text-white">Deadline</label>
        <input type="text" 
         name="deadline" 
        value={props.deadline} 
        onChange={ props.handleInputChange} />
      </div>
      <button onClick={props.updateTodoItem }> Update </button>
      <button onClick={() => props.setEditing(false)} >Cancel</button>
    </form>
  )
}

export default EditTodoItem;