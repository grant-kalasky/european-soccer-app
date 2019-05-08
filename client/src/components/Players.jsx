import React from 'react';
import '../styles/Players.css';

export default class Players extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      playerResults: []
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

    if (this._isMounted && newSearchValue !== "") {
      this.getPlayers(newSearchValue);
    }
  }

  getPlayers(query) {
    fetch(`http://localhost:3001/api/players?q=${query}`, {
      accept: "application/json"
    })
      .then(res => res.json())
      .then(players => this.setState({ playerResults: players }))
  }

  render() {
    const { playerResults } = this.state;

    return (
      <div className="players-container">
        <h2>Welcome to the Teams page</h2>
        <p>Search for your favorite soccer players and view their attributes for different matches.</p>
        <div className="ui icon input">
          <input 
            type="text" 
            placeholder="Search for player..."
            value={this.state.search}
            onChange={this.handleChange}
          />
          <i className="search icon"></i>
        </div>
        <div className="player-card-container">
          {playerResults.length > 0 && 
            <div className="ui cards">
              {playerResults.map(player => (
                <div className="ui card">
                  <div className="content">
                    <div className="header">
                      {player.player_name}
                    </div>
                    <div className="description">
                      <i className="calendar outline icon"></i>
                      Game Date: {player.date.slice(0,9)}
                    </div>
                  </div>
                  <div className="content">
                    <i class="bullseye icon"></i>
                    Overall Rating: {player.overall_rating}
                  </div>
                  <div className="content">
                    <i class="bolt icon"></i>
                    Finishing: {player.finishing}
                  </div>
                  <div className="content">
                    <i class="heart outline icon"></i>
                    Stamina: {player.stamina}
                  </div>
                  <div className="content">
                    <i class="futbol icon"></i>
                    Ball Control: {player.ball_control}
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