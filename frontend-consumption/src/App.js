import React, { Component } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          taskList: [],
      };
  }

  componentDidMount() {
    fetch('https://task-app-api.azurewebsites.net/api/list-tasks?code=KKMuy7SoT4qnVJor9brhxmB9QtnVqoXzP9h3IvWvmLan6xLu0FORUQ==')
        .then(response => response.json())
        .then(data => {
            let taskList = [];
            data.tasks.forEach(function (task) {
                taskList.push(
                   task
                )

            });
            this.setState({taskList: taskList});
        });
  }

  render() {
      return (
          <div>
              <TaskList taskList={this.state.taskList}/>
              <TaskForm/>
          </div>
      );
  }
}

export default App;