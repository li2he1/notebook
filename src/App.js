import './App.css';
import React from 'react';
import firebase from 'firebase';
import SidebarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  }

  render(){
    return (
      <div className="app-container">
        <SidebarComponent/>
        <EditorComponent/>
      </div>
    );

  }
  
}

