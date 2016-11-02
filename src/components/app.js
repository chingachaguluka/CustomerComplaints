import React, { Component } from 'react';
import ComplaintList from '../containers/complaint-list';
import ComplaintDetails from '../containers/complaint-details';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-5">
          <ComplaintList />
        </div>
        <div className="col-md-7">
          <ComplaintDetails />
        </div>
      </div>
    );
  }
}
