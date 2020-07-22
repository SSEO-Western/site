import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Navbar from "../navigation/Navbar.js";

const Posting = props => (
    <tr>
        <td>{props.posting.postingDescription}</td>
        <td>{props.posting.postingType}</td>
        <td>{props.posting.postingPriority}</td>
        <td>
            
            <Link to={"/edit/"+props.posting._id}> Edit</Link>
        </td>
    </tr>
)
export default class PostingsList extends Component {

    constructor(props){
        super(props);
        this.state = {postings: []};
    }

    componentDidMount(){
        console.log("Mounted")
        axios.get('http://localhost:4000/api/postings/')
        .then(response => {
            this.setState({postings: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    PostingList() {
        return this.state.postings.map(function(currentPosting, i){
            return <Posting posting={currentPosting} key={i} />;
        })


    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <h3> Jobs List</h3>
                <table className="table table-striped" style = {{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Posting Description</th>
                            <th>Type</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.PostingList()}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
