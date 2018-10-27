import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, CheckBox } from 'react-native';
const trash = require('../assets/trash.png')

class Keyval extends Component {

    constructor() {
        super();
    this.state={
        checked: false,
    }
  }
    render() {
        return (
            <View>
                <View key={this.props.keyval} style={styles.note}>
                    
                    <Text style={styles.noteDate}>{this.props.val.date}</Text>
                    <Text style={styles.noteText}>{this.props.val.note}</Text>
                    <CheckBox
                        style={styles.button}
                        checked={this.state.checked}
                    />
                </View>
                <View style={styles.noteDelete}>
                    <TouchableOpacity
                        onPress={this.props.deleteMethod}>
                        <Image
                            style={styles.icon}
                            source={trash}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    note: {
        margin: 10,
        width: '70%',
        padding: 40,
        borderRadius: 5,
        position: 'relative',
        paddingRight: 50,
        elevation: 1,
        flexDirection: 'row',
    },
    noteText: {
        bottom: 5,
        right: 80,
        fontFamily: 'arial',
        fontSize: 15,
    },
    button: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,
        width: '25%',
        height: '95%',
        right: 7,
    },
    noteDate: {
        width: '40%',
        bottom: 30,
        right: 30,
        fontFamily: 'arial',
        fontSize: 12,
    },
    noteDelete: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 1,
        margin: 1,
        width: '25%',
        height: '90%',
        top: 7,
        right: 7,
    },
    icon: {
        height: 55,
        width: 55
    }
});

export default Keyval;
