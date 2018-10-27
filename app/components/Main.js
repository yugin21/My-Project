import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Note from './Note';

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }
  render() {

    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
        deleteMethod={() => this.deleteNote(key)} />
    })

    const { noteText } = this.state
    return (
      <View style={styles.container}>
        <Header HeaderText={' To-Do List '} />
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>

          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={noteText}
            placeholder='Type here'
            placeholderTextColor='blue'
            underlineColorAndroid='transparent'
            multiline={true} />
        </View>

        <TouchableOpacity
          onPress={this.addNote.bind(this)}
          style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {

      var d = new Date();
      this.state.noteArray.push({
        'date': d.getDate() +
          '/' + (d.getMonth() + 1) +
          '/' + d.getFullYear(),
        'note': this.state.noteText
      })
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' });
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1)
    this.setState({ noteArray: this.state.noteArray })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,

  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
  },
  textInput: {
    maxHeight: 100,
    lineHeight: 15,
    alignSelf: 'stretch',
    fontStyle: 'normal',
    color: 'black',
    padding: 20,
    margin: 3,
    width: '98%',
    elevation: 1,
    backgroundColor: "lawngreen",
    borderRadius: 10,
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 80,
    backgroundColor: 'darkcyan',
    width: 60,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
  },
});


export default Main;
