import React from 'react';
// import Client from "../Client.js";
import '../styles/Teams.css';

export default class Teams extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      teamResults: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (!this._isMounted) {
      this._isMounted = true;
    }
  }
  
  handleChange(e) {
    const newSearchValue = e.target.value;
    this.setState({
      search: newSearchValue
    });

    if (this._isMounted) {
      if (newSearchValue === "") {
        this.getTeams();
      } else {
        this.getTeams(newSearchValue);
      }
    }
  }

  getAllTeams() {
    fetch(`http://localhost:3001/api/teams`)
      .then(res => res.json())
      .then(teams => this.setState({ teamResults: teams }))
  }

  getTeams(query) {
    fetch(`http://localhost:3001/api/teams?q=${query}`, {
      accept: "application/json"
    })
      .then(res => res.json())
      .then(teams => this.setState({ teamResults: teams }))
  }

  render() {
    const { teamResults } = this.state;

    return(
      <div className="teams-container">
        <h2>Welcome to the Teams page</h2>
        <p>Search for your favorite soccer teams and view their attributes for different matches.</p>
        <div className="ui icon input">
          <input 
            type="text" 
            placeholder="Search for team..."
            value={this.state.search}
            onChange={this.handleChange}
          />
          <i className="search icon"></i>
        </div>
        <div className="team-card-container">
          {teamResults.length > 0 && 
            <div className="ui cards">
              {teamResults.map(team => (
                <div className="ui card">
                  <div className="content">
                    <div className="header">
                      {team.team_long_name}
                    </div>
                    <div className="description">
                      {team.team_short_name} - {team.date.slice(0,9)}
                    </div>
                  </div>
                  <div className="content">
                    <span className="right floated">
                      {team.buildUpPlaySpeedClass}
                    </span>
                    <i class="bolt icon"></i>
                    Speed: {team.buildUpPlaySpeed}
                  </div>
                  <div className="content">
                    <span className="right floated">
                      {team.buildUpPlayDribblingClass}
                    </span>
                    <i class="futbol outline icon"></i>
                    Dribbling: {team.buildUpPlayDribbling}
                  </div>
                  <div className="content">
                    <span className="right floated">
                      {team.buildUpPlayPassingClass}
                    </span>
                    <i class="male icon"></i>
                    Passing: {team.buildUpPlayPassing}
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
        
      </div>
    );
  }
}

