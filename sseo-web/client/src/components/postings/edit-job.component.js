import React, { Component } from 'react';
import axios from 'axios';


export default class PostingsList extends Component {

    constructor(props){
        super(props);
        console.log("This is the id", this.props.match.params._id);
        this.onChangePostingDescription = this.onChangePostingDescription.bind(this);
        this.onChangePostingPriority = this.onChangePostingPriority.bind(this);
        this.onChangePostingType = this.onChangePostingType.bind(this);
        this.onChangePostingCompleted = this.onChangePostingCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            postingDescription: '',
            postingType: '',
            postingPriority: '',
            postingCompleted: false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/postings/' + this.props.match.params._id)
         .then(response => {
            this.setState({
                
                postingDescription: response.data.postingDescription,
                postingType: response.data.postingType,
                postingPriority: response.data.postingPriority,
                postingCompleted: response.data.postingCompleted
            })
        })
        .catch(function(error) {
            console.log(error)
        })
    }
    onChangePostingDescription(e){
        this.setState({
            postingDescription: e.target.value
        });
    }

    onChangePostingType(e){
        this.setState({
            postingType: e.target.value
        });
    }

    onChangePostingPriority(e){
        this.setState({
            postingPriority: e.target.value
        });
    }

    onChangePostingCompleted(e){
        this.setState({
            postingCompleted: !this.state.postingCompleted
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            postingDescription: this.state.postingDescription,
            postingClub: this.state.postingClub,
            postingPriority: this.state.postingPriority,
            postingCompleted: this.state.postingCompleted
        };
        axios.put('http://localhost:4000/postings/' + this.props.match.params.id, obj)
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
                                value={this.state.postingDescription}
                                onChange={this.onChangePostingDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Club: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.postingType}
                                onChange={this.onChangePostingType}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked = {this.state.postingPriority === 'Low'}
                                    onChange = {this.onChangePostingPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked = {this.state.postingPriority === 'Medium'}
                                    onChange = {this.onChangePostingPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked = {this.state.postingPriority === 'High'}
                                    onChange = {this.onChangePostingPriority}
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
                                checked={this.state.postingCompleted}
                                value={this.state.postingCompleted}
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
