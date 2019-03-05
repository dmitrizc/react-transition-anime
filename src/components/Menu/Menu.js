import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import { addEndListener } from '../../utils/animation';
import {
  animateMenuIn,
  animateMenuOut,
  animateMenuItemIn,
  animateMenuItemOut,
} from './Menu.animation';

import './Menu.scss';

class Menu extends React.Component {
  state = {
    customItems: [],
  };

  handleAddCustomItem = () => {
    this.setState(prevState => ({
      customItems: [
        ...prevState.customItems,
        prevState.customItems.length + 1,
      ],
    }));
  };

  handleRemoveCustomItem = () => {
    this.setState(prevState => ({
      customItems: prevState.customItems.length
        ? prevState.customItems.slice(0, prevState.customItems.length - 1)
        : [],
    }));
  };

  render() {
    const {
      customItems,
    } = this.state;

    const {
      isOpen,
      toggle,
    } = this.props;

    return (
      <Transition
        in={isOpen}
        addEndListener={addEndListener}
        onEnter={animateMenuIn}
        onExit={animateMenuOut}
        unmountOnExit
      >
        <div className="menu">
          <div className="menu-btns animated-menu-item">
            <button
              className="menu-btn"
              onClick={toggle}
            >
              Close Menu
            </button>

            <button
              className="menu-btn"
              onClick={this.handleAddCustomItem}
            >
              Add Item
            </button>

            <button
              className="menu-btn"
              onClick={this.handleRemoveCustomItem}
            >
              Remove Item
            </button>
          </div>

          <ul className="menu-items">
            <li className="menu-item animated-menu-item">
              Account
            </li>
            <li className="menu-item animated-menu-item">
              Settings
            </li>
            <li className="menu-item animated-menu-item">
              Logout
            </li>

            <TransitionGroup component={null}>
              {customItems.map((item, key) => (
                <Transition
                  key={key}
                  addEndListener={addEndListener}
                  onEnter={animateMenuItemIn}
                  onExit={animateMenuItemOut}
                >
                  <li className="menu-item animated-menu-item">
                    Item {item}
                  </li>
                </Transition>
              ))}
            </TransitionGroup>
          </ul>
        </div>
      </Transition>
    );
  }
}

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Menu;
