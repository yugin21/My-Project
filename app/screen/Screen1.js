import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground } from 'react-native';

class A extends Component {
    moveScreen() {
        this.props.navigation.navigate('Layar2')
    }
    render() {
        return (
            <View style={{ 
                flex:1 }}>
                <ImageBackground 
                        style={{ flex:1 }}
                        source={require('../assets/cover.png')}>
                <TouchableOpacity 
                    style={{ justifyContent: 'center',  
                    alignSelf:'center', top: 400 }}
                    onPress={() => this.moveScreen()}>
                        <Image
                            source={require('../assets/create.png')}
                            style={{ 
                                width: 50, 
                                height: 50,
                                justifyContent: 'center',  
                                alignSelf:'center'}}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{ 
                            justifyContent: 'center',  
                            alignSelf:'center', 
                            top: 415, 
                            fontFamily: 'Codec-Cold-Light-trial',
                            fontSize: 20,
                            paddingRight: 7 }}
                    >
                        Buat List
                    </Text>
                </ImageBackground>
            </View>
        )
    }
    
}
export default A