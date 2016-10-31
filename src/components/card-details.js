import React, { Component } from 'react';

class CardDetails extends Component {

    render(){

        return (

            {/* <!--First columnn--> */}
                <div className={"col-md-4"}>
                    {/* <!--Rotating card-->  */}
                    <div className={"card-wrapper"}>
                        <div id="card-1" className="card-rotating effect__click">

                            /* <!--Front Side--> */
                            <div className="face front">
                                <h3 className="card-header primary-color white-text">Chinga Chaguluka</h3>
                                /*  <!--Content-->  */
                                <hr>
                                    <p className="card-text">
                                        Description: <strong>The ATM was not working for more than 2 hours and none was able to explain</strong>    
                                    </p>
                                <hr>
                                /*  <!--Triggering button for rotation-->  */
                                <a className="rotate-btn" data-card="card-1">
                                    <i className="fa fa-repeat"></i> Contact Details
                                </a>
                                <br> 
                            </div>  /*  <!--/.Front Side-->  */

                            /*  <!--Back Side-->  */
                            <div className="face back">

                                /*  <!--Content-->   */
                                <div className="card-block">
                                    <div className="card-title">
                                        Phone: <strong>0999989777</strong><br>
                                        Email: <strong>chinga.e.chaguluka@gmail.com</strong><br>
                                        Logged: <strong>26-Oct-16 15:54</strong><br>
                                        Status: <strong>Logged</strong>
                                    </div>

                                    <a className="btn btn-primary">Next Step</a>
                                </div>

                                /*  <!--Triggering button-->  */
                                <a className="rotate-btn" data-card="card-1"><i className="fa fa-undo"></i> Back </a>

                            </div>  /*  <!--/.Back Side-->   */

                        </div>
                    </div>  /*  <!--/.Rotating card-->  */   
                </div>  /*  <!--First columnn-->  */
  
        );
    }
}

export default CardDetails;