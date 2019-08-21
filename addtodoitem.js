import React from 'react'

const AddTodoItem = props => {
  return (
    <form onSubmit={ props.addTodoItem }>
      <div className="form-group"> <br />
        <label>Description: </label>
        <input type="text" className="form-control" name="description" value={props.description} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group"> <br />
        <label>Deadline: </label>
        <input type="text" className="form-control" name="deadline" value={props.deadline} onChange={props.handleInputChange} />
      </div> <br />
      <button className="btn btn-success mt-2"> Add todo Item </button>
    </form>
  )
}

export default AddTodoItem;