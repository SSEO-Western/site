import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

const Job = props => (
    <tr>
        <td>{props.job.job_description}</td>
        <td>{props.job.job_club}</td>
        <td>{props.job.job_priority}</td>
        <td>
            <Link to={"/edit/"+props.job._id}> Edit</Link>
        </td>
    </tr>
)
export default class JobsList extends Component {

    constructor(props){
        super(props);
        this.state = {jobs: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/')
        .then(response => {
            this.setState({jobs: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }
    JobList() {
        return this.state.jobs.map(function(currentTodo, i){
            return <Job job={currentTodo} key={i} />;
        })
    }
    render() {
        return (
            <div>
                <h3> Jobs List</h3>
                <table className="table table-striped" style = {{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Job Description</th>
                            <th>Club</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.JobList()}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
