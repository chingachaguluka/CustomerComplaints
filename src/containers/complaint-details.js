import React, { Component } from 'react';
import { connect } from 'react-redux';


class ComplaintDetails extends Component {

    render(){
        if(!this.props.activeComplaint) {
            return (<div> Please select a component </div>);
        }

        return (
            <div>Selected complaint: {this.props.complaint.id}</div>
  
        );
    }
}

function mapStateToProps(state) {
    return {
        activeComplaint: state.activeComplaint
    };
}

export default connect(mapStateToProps)(ComplaintDetails);