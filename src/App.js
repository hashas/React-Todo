import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  changeHandler = event => {
    console.log("input changed")
    this.setState({
      formData: 
      {
        task: event.target.value,
        id: Date.now(),
        completed: false
      }
    })
  }

  submitHandler = event => {
    event.preventDefault()
    console.log(this.state.formData)
    this.state.todoList.push(this.state.formData)
    this.setState({...this.state.todoList})
    console.log(this.state)
    this.setState({
      formData:
      {
        task: '',
        id: '',
        completed: ''
      }
    })
    console.log(this.state)
  }

  // clickHandler = event => {
  // 
  // }

  constructor() {
    super();
    this.state = {
      todoList: [
      {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false
      }
      ],
      formData: ''
    };
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList data={this.state.todoList}/>
        <TodoForm
        value={this.state.formData.task}
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
        /> 
      </div>
    );
  }
}

export default App;
