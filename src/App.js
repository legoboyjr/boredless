import React, { Component } from 'react';
import Modal from "react-modal";
import './App.css';
import axios from 'axios';

const appElement = document.getElementById('root');
Modal.setAppElement(appElement);

const isDev = process.env.NODE_ENV !== 'production';
//bored api
const BORED_API = isDev ? '/activity' : 'https://boredapi.com/api/activity';

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      modalOpen: false,
      activity: '',
      participants: '',
      error: null
    }
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  handleModalClose(){
    this.setState({modalOpen: false});
  }

  handleModalOpen(){
    axios.get(BORED_API)
    .then(response => {
      const { activity } = response.data;
      const { participants } = response.data;
      this.setState({
        modalOpen: true,
        activity: activity,
        error: null,
        participants: participants
      });
  })
    .catch(err => { 
      this.setState({
        error: err
      });
    });
  }
  render() {
    return (
      <div className="vh-100 bg-black flex-column flex justify-center items-center">
      { this.state.error && <div className="bg-white red f4 mb4 h4 w4">Error: {this.state.error && this.state.error.message} </div>}
        <button className="f1 outline-transparent dim ph3 pv2 mb2 dib white bg-black b--none br-100 h5 w5 bg-blue"
        onClick={this.handleModalOpen}>
        Bored?
        </button>
        <Modal closeTimeoutMS={150} isOpen={this.state.modalOpen}>
        <div className="flex flex-column h-100">
          <header className="flex justify-end">
            <button className="f1 ph3 pv2 mb2 dib white bg-black b--none" onClick={this.handleModalClose}>X</button>
          </header>
          <main className="flex flex-column justify-center items-center flex-grow-1">
            <h1>Here is something you can do</h1>
            <h2>{this.state.activity}</h2>
          </main>
          <footer>
            <h2>number of prople needed</h2>
            <h3>{this.state.participants}</h3>
          </footer>
         </div>
        </Modal>
      </div>
    );
  }
}

export default App;
