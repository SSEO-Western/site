import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "../navigation/Navbar.js";
export default class JobsList extends Component {

constructor(props) {
    super(props);

    this.onChangeJobDescription = this.onChangeJobDescription.bind(this);
    this.onChangeJobClub = this.onChangeJobClub.bind(this);
    this.onChangeJobPriority = this.onChangeJobPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



    this.state = {
        job_description: '',
        job_club: '',
        job_priority: '',
        job_completed: false
    }

}
    onChangeJobDescription(e) {
        this.setState({
            job_description: e.target.value
        });
    }

    onChangeJobClub(e) {
        this.setState({
            job_club: e.target.value
        });
    }
    // Do we really need Priority??
    onChangeJobPriority(e) {
        this.setState({
            job_priority: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        
        //put the onsumbit logic here instead of the console
        console.log('Form Submitted');
        console.log(`Job Description: ${this.state.job_description}`)
        console.log(`Job Club: ${this.state.job_club}`)
        console.log(`Job Priority: ${this.state.job_priority}`)
        console.log(`Job Completed: ${this.state.job_completed}`)


        const newTodo = {
            job_description: this.state.job_description,
            job_club: this.state.job_club,
            job_priority:this.state.job_club,
            job_completed: this.state.job_completed  
        }

        axios.post('http://localhost:4000/routes/postings/add', newTodo)
            .then(res => console.log(res.data));
       

        this.setState({
            job_description: '',
            job_club: '',
            job_priority: '',
            job_completed: false
        })
    }

    render() {
        return (
            <div>
            <Navbar></Navbar>

            <div style={{marginTop: 10}}>
                <h3>Create New Job</h3>
                <form onSubmit={this.onSubmit}>
                <div className = "form-group">
                    <label>Description: </label>
                    <input type = "text"
                        className = "form-control"
                        value = {this.state.job_description}
                        onChange={this.onChangeJobDescription}/>

                </div>
                <div className = "form-group">
                    <label>Club: </label>
                    <input type = "text"
                        className = "form-control"
                        value = {this.state.job_club}
                        onChange={this.onChangeJobClub}/>

                </div>
                <div className = "form-group">
                    <div className = "form-group form-check-inline">
                        <input className="form-check-input"
                                type = "radio"
                                name = "priorityOptions"
                                id = "priorityLow"
                                value = "Low"
                                checked = {this.state.job_priority === 'Low'}
                                onChange = {this.onChangeJobPriority}
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
                                checked = {this.state.job_priority === 'Medium'}
                                onChange = {this.onChangeJobPriority}
                        />
                        <label className = "form-check-label">Medium</label>
                    </div>
                    <div className = "form-group form-check-inline">
                        <input className="form-check-input"
                                type = "radio"
                                name = "priorityOptions"
                                id = "priorityHigh"
                                value = "High"
                                checked = {this.state.job_priority === 'High'}
                                onChange = {this.onChangeJobPriority}
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
            </div>
        )
    }
}
