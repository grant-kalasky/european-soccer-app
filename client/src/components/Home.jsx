import React from 'react';

export default class Home extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      dbStats: []
    };
  }

  componentDidMount() {
    if (!this._isMounted) {
      this._isMounted = true;
    }

    this.getDatabaseStats();
  }

  getDatabaseStats() {
    fetch(`http://localhost:3001/api/`)
      .then(res => res.json())
      .then(stats => this.setState({ dbStats: stats }))
  }

  render() {
    const { dbStats } = this.state;

    return (
      <div className="games-container">
        <h2>Welcome to the European Soccer Database!</h2>
        <h4>Here, you'll find statistics from many of your favorite teams and players.</h4>
        <h4>Included in this database are:</h4>
        {dbStats.length > 0 && 
          <div className="ui horizontal statistics">
            <div className="statistic">
              <div className="value">{dbStats[0].total_matches}</div>
              <div className="label">Matches</div>
            </div>
            <div className="statistic">
              <div className="value">{dbStats[0].total_teams}</div>
              <div className="label">Teams</div>
            </div>
            <div className="statistic">
              <div className="value">{dbStats[0].total_leagues}</div>
              <div className="label">Leagues</div>
            </div>
            <div className="statistic">
              <div className="value">{dbStats[0].total_seasons}</div>
              <div className="label">Seasons</div>
            </div>
            <div className="statistic">
              <div className="value">{dbStats[0].avg_score}</div>
              <div className="label">Avg Match Score</div>
            </div>
          </div>
        }
      </div>
    );
  }
}