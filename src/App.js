import React, { Component } from 'react';
import Modal from "react-modal";
import './App.css';

const appElement = document.getElementById('root');
Modal.setAppElement(appElement);

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      modalOpen: false
    }
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  handleModalClose(){
    this.setState({modalOpen: false});
  }

  handleModalOpen(){
    this.setState({modalOpen: true});
  }
  render() {
    return (
      <div className="vh-100 bg-black flex justify-center items-center">
        <button className="f1 outline-transparent dim ph3 pv2 mb2 dib white bg-black b--none br-100 h5 w5 bg-blue"
        onClick={this.handleModalOpen}>
        Bored?
        </button>
        <Modal closeTimeoutMS={150} isOpen={this.state.modalOpen}>
          <header className="flex justify-end">
            <button onClick={this.handleModalClose}>X</button>
          </header>
          <main>
            <h1>Look a modal!</h1>
          </main>
          <footer>
            <h2>Nothing to see here...</h2>
          </footer>
        </Modal>
      </div>
    );
  }
}

export default App;
