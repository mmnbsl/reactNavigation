import React, { Component } from "react";
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

export default class DrawerMenuButton extends Component {
    render() {
        const { navigation } = this.props
        return (
            <TouchableOpacity 
                style = {{paddingHorizontal : 10}}
                onPress = {()=> {
                navigation.toggleDrawer()
            }}>
               <Icon
                   name = 'ios-menu'
                   size = {24}
               />
            </TouchableOpacity>
        )
    }
}