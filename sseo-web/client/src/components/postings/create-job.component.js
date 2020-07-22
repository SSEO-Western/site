import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "../navigation/Navbar.js";
export default class JobsList extends Component {

constructor(props) {
    super(props);

    this.onChangePostingDescription = this.onChangePostingDescription.bind(this);
    this.onChangePostingType = this.onChangePostingType.bind(this);
    this.onChangePostingPriority = this.onChangePostingPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



    this.state = {
        postingDescription: '',
        postingType : '',
        postingPriority: '',
        postingCompleted: false
    }

}
    onChangePostingDescription(e) {
        this.setState({
            postingDescription: e.target.value
        });
    }

    onChangePostingType(e) {
        this.setState({
            postingType: e.target.value
        });
    }
    // Do we really need Priority??
    //DOnt think so tbh
    onChangePostingPriority(e) {
        this.setState({
            postingPriority: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        
        //put the onsumbit logic here instead of the console
        console.log('Form Submitted');
        console.log(`Posting Description: ${this.state.postingDescription}`)
        console.log(`Posting Type: ${this.state.postingClub}`)
        console.log(`Posting Priority: ${this.state.postingPriority}`)
        console.log(`Posting Completed: ${this.state.postingCompleted}`)


        const posting = {
            postingDescription: this.state.postingDescription,
            postingType : this.state.postingType,
            postingPriority: this.state.postingPriority,
            postingCompleted: this.state.postingCompleted
        }
        console.log(posting)
        axios.post('http://localhost:4000/api/postings/', posting)
            .then(res => console.log(res.data));
       

    
        this.setState({
            postingDescription: '',
            postingType : '',
            postingPriority: '',
            postingCompleted: false
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
                        value = {this.state.postingDescription}
                        onChange={this.onChangePostingDescription}/>

                </div>
                <div className = "form-group">
                    <label>Club: </label>
                    <input type = "text"
                        className = "form-control"
                        value = {this.state.postingType}
                        onChange={this.onChangePostingType}/>

                </div>
                <div className = "form-group">
                    <div className = "form-group form-check-inline">
                        <input className="form-check-input"
                                type = "radio"
                                name = "priorityOptions"
                                id = "priorityLow"
                                value = "Low"
                                checked = {this.state.postingPriority === 'Low'}
                                onChange = {this.onChangePostingPriority}
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
                                checked = {this.state.postingPriority === 'Medium'}
                                onChange = {this.onChangePostingPriority}
                        />
                        <label className = "form-check-label">Medium</label>
                    </div>
                    <div className = "form-group form-check-inline">
                        <input className="form-check-input"
                                type = "radio"
                                name = "priorityOptions"
                                id = "priorityHigh"
                                value = "High"
                                checked = {this.state.postingPriority === 'High'}
                                onChange = {this.onChangePostingPriority}
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
