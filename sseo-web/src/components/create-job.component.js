import React, { Component } from 'react';

export default class JobsList extends Component {

constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoClub = this.onChangeTodoClub.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



    this.state = {
        todo_description: '',
        todo_club: '',
        todo_priority: '',
        todo_completed: false
    }

}
    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoClub(e) {
        this.setState({
            todo_club: e.target.value
        });
    }
    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        
        //put the onsumbit logic here instead of the console
        console.log('Form Submitted');
        console.log(`Todo Description: ${this.state.todo_description}`)
        console.log(`Todo Club: ${this.state.todo_club}`)
        console.log(`Todo Priority: ${this.state.todo_priority}`)
        console.log(`Todo Completed: ${this.state.todo_completed}`)



        this.setState({
            todo_description: '',
            todo_club: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                <div className = "form-group">
                    <label>Description: </label>
                    <input type = "text"
                        className = "form-control"
                        value = {this.state.todo_description}
                        onChange={this.onChangeTodoDescription}/>

                </div>
                <div className = "form-group">
                    <label>Club: </label>
                    <input type = "text"
                        className = "form-control"
                        value = {this.state.todo_club}
                        onChange={this.onChangeTodoClub}/>

                </div>
                <div className = "form-group">
                    <div className = "form-group form-check-inline">
                        <input className="form-check-input"
                                type = "radio"
                                name = "priorityOptions"
                                id = "priorityLow"
                                value = "Low"
                                checked = {this.state.todo_priority === 'Low'}
                                onChange = {this.onChangeTodoPriority}
                        />
                        <label className = "form-check-label">Low</label>
                    </div>
                    <div className = "form-group">
                    <div className = "form-group form-check-inline">
                        <input className="form-check-input"
                                type = "radio"
                                name = "priorityOptions"
                                id = "priorityMedium"
                                value = "Medium"
                                checked = {this.state.todo_priority === 'Medium'}
                                onChange = {this.onChangeTodoPriority}
                        />
                        <label className = "form-check-label">Medium</label>
                    </div>
                    <div className = "form-group form-check-inline">
                        <input className="form-check-input"
                                type = "radio"
                                name = "priorityOptions"
                                id = "priorityHigh"
                                value = "High"
                                checked = {this.state.todo_priority === 'High'}
                                onChange = {this.onChangeTodoPriority}
                        />
                        <label className = "form-check-label">High</label>
                    </div>
                    </div>
                    <div className = "form-group">
                    <input type="submit" value = "Create Job" className= "btn btn-primary"/>

                    </div>
                </div>
                </form>
                
              
            </div>
        )
    }
}
