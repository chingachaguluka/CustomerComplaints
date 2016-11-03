import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectComplaint } from '../actions/index';

class ComplaintList extends Component {
    
    renderList() {

        return this.props.complaints.map((complaint) => {
            return (
                <li className="list-group-item" key={complaint.id} 
                    onClick={() => selectComplaint(complaint)}>
                    <h4 className="list-group-item-heading">{complaint.customerName}  <span className="float-right">#{complaint.id}</span></h4>
                    <p className="list-group-item-text">Branch: {complaint.branch}</p>
                </li>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectComplaint: selectComplaint }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintList);