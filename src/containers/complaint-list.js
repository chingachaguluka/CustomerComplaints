import React, { Component } from 'react';
import ComplaintDetails from './complaint-details';
import { connect } from 'react-redux';

class ComplaintList extends Component {

    render() {

        return (
            <div>
                Card Listing works!!
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