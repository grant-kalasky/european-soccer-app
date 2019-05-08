import React from 'react';

export default class Games extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      gameResults: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (!this._isMounted) {
      this._isMounted = true;
    }
  }

  render() {
    const { gameResults } = this.state;

    return (
      <div className="games-container">
        <h2>Welcome to the Games Page</h2>
        <p>Search for a given team and see their match results from previous seasons.</p>
        <div className="ui icon input">
          <input 
            type="text" 
            placeholder="Search for a team..."
            value={this.state.search}
            onChange={this.handleChange}
          />
          <i className="search icon"></i>
        </div>
        <div className="game-card-container">
          
        </div>
      </div>
    );
  }
}