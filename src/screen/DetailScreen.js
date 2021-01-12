import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight, Alert } from "react-native";

export default class DetailScreen extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    componentDidMount = () =>{
        this.props.navigation.setOptions({
            headerRight : () => (
                <Button 
                    title = 'deneme'
                    onPress = {()=> {
                        this.setState({count : this.state.count + 1 })
                    }}
                />
            )
        })
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        const { title } = this.props.route.params
        return (
            <View
                style={style.container}>
                <Text>{this.state.count}</Text>
                <Button 
                    title = {'go to home'}
                    onPress={() => { navigate('Home') }} />
                
                <TouchableHighlight
                    onPress = {() => { goBack() }}
                    underlayColor = 'transparent'>
                    <Text style = {{color : 'blue'}}>Go Back</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})