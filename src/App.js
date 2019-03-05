import React, { Component } from 'react';
import Menu from './components/Menu/Menu';

import './App.scss';

class App extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenuOpen = isMenuOpen => {
    this.setState(prevState => ({
      isMenuOpen: (typeof isMenuOpen === 'boolean') ? isMenuOpen : !prevState.isMenuOpen,
    }));
  };

  render() {
    const {
      isMenuOpen,
    } = this.state;

    return (
      <div className="app">
        <div className="header">
          <button
            className="header__toggle-menu-btn"
            onClick={this.toggleMenuOpen}
          >
            {isMenuOpen ? 'Close' : 'Open'}
          </button>
        </div>

        <Menu isOpen={isMenuOpen} toggle={this.toggleMenuOpen}/>
      </div>
    );
  }
}

export default App;
