import React, { Component } from 'react';
import { connect } from 'react-redux';


class ComplaintDetails extends Component {

    render() {
        console.log(this.props.complaint);

        if(!this.props.activeComplaint) {
            return (<div> Please select a Complaint </div>);
        }

        return (

            <div className="card text-xs-center">
                <div className="card-header default-color-dark white-text">
                    <div className="col-md-8">
                        {this.props.activeComplaint.customerName}
                    </div>
                    <div className="col-md-4">
                        <span className="pull-left">#{this.props.activeComplaint.id}</span>
                    </div>
                </div>
                <div className="card-block">
                    <div className="col-xs-4">
                        <span className="pull-right">Phone:</span>
                    </div>
                    <div className="col-xs-8">
                        <span className="pull-left">{this.props.activeComplaint.phone}</span>
                    </div>
                    <div className="col-xs-4">
                        <span className="pull-right">Email:</span>
                    </div>
                    <div className="col-xs-8">
                        <span className="pull-left">{this.props.activeComplaint.email}</span>
                    </div>
                    <div className="col-xs-4">
                        <span className="pull-right">Branch:</span>
                    </div>
                    <div className="col-xs-8">
                        <span className="pull-left">{this.props.activeComplaint.branch}</span>
                    </div>
                </div>
                <div className="card-header default-color-dark white-text">
                    <div className="col-xs-4">
                        <span className="pull-right">Logged:</span>
                    </div>
                    <div className="col-xs-8">
                        <span className="pull-left">{this.props.activeComplaint.logged}</span>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeComplaint: state.activeComplaint
    };
}

export default connect(mapStateToProps)(ComplaintDetails);