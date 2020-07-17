import React, { Component } from 'react';
import axios from 'axios';


export default class JobsList extends Component {

    constructor(props){
        super(props);

        this.onChangeJobDescription = this.onChangeJobDescription.bind(this);
        this.onChangeJobPriority = this.onChangeJobPriority.bind(this);
        this.onChangeJobclub = this.onChangeJobclub.bind(this);
        this.onChangeJobCompleted = this.onChangeJobCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            job_description: '',
            job_club: '',
            job_priority: '',
            job_completed: false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
         .then(response => {
            this.setState({
                job_description: response.data.job_description,
                job_club: response.data.job_club,
                job_priority: response.data.job_priority,
                job_completed: response.data.job_completed
            })
        })
        .catch(function(error) {
            console.log(error)
        })
    }
    onChangeJobDescription(e){
        this.setState({
            job_description: e.target.value
        });
    }

    onChangeJobclub(e){
        this.setState({
            job_club: e.target.value
        });
    }

    onChangeJobPriority(e){
        this.setState({
            job_priority: e.target.value
        });
    }

    onChangeJobCompleted(e){
        this.setState({
            job_completed: !this.state.job_completed
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            job_description: this.state.job_description,
            job_club: this.state.job_club,
            job_priority: this.state.job_priority,
            job_completed: this.state.job_completed
        };
        axios.post('http://localhost:4000/todos/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h3 align="center">Update Job</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.job_description}
                                onChange={this.onChangeJobDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Club: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.job_club}
                                onChange={this.onChangeJobclub}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked = {this.state.job_priority === 'Low'}
                                    onChange = {this.onChangeJobPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked = {this.state.job_priority === 'Medium'}
                                    onChange = {this.onChangeJobPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked = {this.state.job_priority === 'High'}
                                    onChange = {this.onChangeJobPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeJobCompleted}
                                checked={this.state.job_completed}
                                value={this.state.job_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
