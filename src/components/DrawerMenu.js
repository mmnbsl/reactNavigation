import React, { Component } from "react";
import {SafeAreaView ,Text, TouchableOpacity, View } from 'react-native';

class DrawerMenu extends Component {
    navigateToScreen = (route) => () => {
        this.props.navigation.navigate(route)
    }
    render() {
        return (
            <SafeAreaView>
               <TouchableOpacity
                   onPress = {this.navigateToScreen('Home')} >
                    <Text>Deneme</Text>
               </TouchableOpacity>
            </SafeAreaView>        
        );
    }
}

export default DrawerMenu;