import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Sprints And Tickets</h1>
        <p className="lead">
          A curated list of sprints and tickets for the best.
        </p>
        <hr className="my-4" />
        <Link
          to="/sprints"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Sprints
        </Link>
        <Link
          to="/tickets"
          className="btn btn-lg custom-button custom-button-tick"
          role="button"
        >
          View Tickets
        </Link>
      </div>
    </div>
  </div>
);