import React from 'react';
import '../semantic/dist/semantic.min.css';

const Teams = () => (
  <div className="teams-container">
    <h2>Welcome to the Teams page</h2>
    <div className="ui icon input">
      <input type="text" placeholder="Search for team..." />
      <i className="search icon"></i>
    </div>
  </div>
);

export default Teams;