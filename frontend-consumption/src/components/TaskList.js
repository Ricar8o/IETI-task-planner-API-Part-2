import React from 'react';
import { TaskItem } from './TaskItem';
import './Tasks.css';

export class TaskList extends React.Component{

    render(){
        const taskList = this.props.taskList.map((task, i) => {
            return (
                <TaskItem key={i} description={task.description} dueDate={task.dueDate} status={task.status} responsible={task.responsible.name} email={task.responsible.email}/>
            );
        });
        return(
            <div className="container">
                <h1>TASKS</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Responsible name</th>
                        <th>Responsible email</th>
                    </tr>
                    </thead>
                    <tbody>
                        {taskList}
                    </tbody>
                </table>
            </div>
            
        );
    }
}