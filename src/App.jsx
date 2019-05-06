import React from 'react';
import './styles/App.css';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div className="page-container">
        <Header />
        <Body />
      </div>
    );
  }
}
