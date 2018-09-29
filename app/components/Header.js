import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.HeaderText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'skating_move',
        fontSize: 35 
    },
    header: {
        top: 3,
        height: 40
    }
});

export default Header