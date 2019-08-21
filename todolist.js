import React from 'react'

const TodoItemList = (props) => {
      
    return (  
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            { 
             props.todoItems.length > 0 ? (
               props.todoItems.map((todoItem) => (
                    <tr key={todoItem.id} >
                      <td>{ todoItem.id }</td>
                      <td>{ todoItem.description }</td>
                      <td>{ todoItem.deadline }</td>
                      <td>
                        <button className="btn btn-primary ml-2" 
                        onClick={() => props.editTodoItem(todoItem) }>Edit</button>
                        <button className="btn btn-danger ml-2"
                         onClick={() =>props.deleteTodoItem(todoItem.id) }>Delete</button>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan={4}>No Todo Item</td>
                </tr>
              )
            }
        </tbody>
      </table> 
    
    );
  }
export default TodoItemList;