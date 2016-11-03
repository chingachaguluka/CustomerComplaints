import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComplaintDetails from './complaint-details';
import ComplaintListItem from '../components/complaint-list-item';

class ComplaintList extends Component {
    
    renderList() {

        return this.props.complaints.map((complaint) => {
            return (
                <a href="#" class="list-group-item" key={complaint.id}>
                    <h4 class="list-group-item-heading">{complaint.customerName}  <span className="float-right">#{complaint.id}</span></h4>
                    <p class="list-group-item-text">Branch: {complaint.branch}</p>
                </a>
            );
        });
    }


    render() {

        return (
            <div>
                <ul className="list-group">{this.renderList()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        complaints: state.complaints
    };
}

export default connect(mapStateToProps)(ComplaintList);