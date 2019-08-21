import React from 'react';

import AddTodoItem from './addtodoitem';
import EditTodoItem from './edittodoitem';
import TodoItemList from './todolist'
import './app.css'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        id: null,
        description: '',
        deadline: '',
        todoItem: {},
        todoItems: [
          {
          id: 1,
          description: "Get out of bed",
          deadline: "2017-09-11",
          done: true
        },
        {
          id: 2,
          description: "Brush teeth",
          deadline: "2017-09-10",
          done: false
        },
        {
          id: 3,
          description: "Eat breakfast",
          deadline: "2017-09-09",
          done: false
        }
      ],
        editing: false
    }
  }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
     
        this.setState({
          [name]:value
        })
      }
      addTodoItem = (event) =>{
        event.preventDefault()
        if (!this.state.description) return;
        const todoItem = {
          id: this.state.todoItems.length + 1,
          description: this.state.description,
          deadline: this.state.deadline,
        };
        console.log(todoItem);
        this.setState({
          description: '',
          deadline: '',
          todoItem: todoItem,
          todoItems: [...this.state.todoItems, todoItem]
        })
        console.log(this.state.todoItems);
      }
      deleteTodoItem = (id) => {
        const todoItems = this.state.todoItems.filter( item => item.id !== id );
        this.setState({todoItems: todoItems});
        if(this.state.editing === true) {
          window.location.reload();
        }
      }  
    editTodoItem = (todoItem) => {
        this.setEditing(true);
        this.setState({
          description:todoItem.description,
          deadline:todoItem.deadline,
          todoItem: todoItem
        });
        console.log(todoItem);
      }
    
      setEditing = (value) => {
        if(typeof value !== 'boolean') 
        console.log("throw error")
        this.setState({
          editing: value
        })
      }
    
      updateTodoItem = (event) => {
        event.preventDefault();
        const updatedDescription = this.state.description;
        const updatedDeadline = this.state.deadline;
        const updatedTodoItem = Object.assign({}, this.state.todoItem, { description: updatedDescription, deadline: updatedDeadline })
        const todoItems = this.state.todoItems.map((todoItem) => (todoItem.id === this.state.todoItem.id ? updatedTodoItem : todoItem));
        this.setState({ description:'', 
                        deadline: '', 
                        todoItems: todoItems});
      }
      render() {
        const { todoItems, editing } = this.state;
          return (
            <div className="App">
              <div className="row App-main">
                <TodoItemList 
                  todoItems = {todoItems} 
                  deleteTodoItem={this.deleteTodoItem}
                  editTodoItem={this.editTodoItem}
                />
              </div>
              <div className="row App-main">
              { 
                editing  ? (
                <EditTodoItem 
                 description = {this.state.description}
                 deadline = {this.state.deadline} 
                 handleInputChange = {this.handleInputChange}
                 setEditing = {this.setEditing}
                 updateTodoItem = {this.updateTodoItem}
                />
                ) : (
                <AddTodoItem 
                  description = {this.state.description}
                  deadline = {this.state.deadline} 
                  handleInputChange = {this.handleInputChange} 
                  addTodoItem = {this.addTodoItem}
                />
                )
              }
              </div>
            </div>
          );
     }
}

export default App