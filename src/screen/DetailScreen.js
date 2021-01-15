import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight, Alert, Image } from "react-native";


class LogoTitle extends Component {
    render(){
        const { title } = this.props
        return (
            <View style = {{flexDirection : 'row', alignItems : 'center'}}>
                <Image
                    style = {{height : 38, width : 38}}
                    source={require('../assets/notes.png')}
                />
                <Text style = {{color : 'white', fontWeight : 'bold'}}>{title}</Text>
            </View>
            
        )
    }
}


export default class DetailScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            title : this.props.route.params.title,
        }
    }

    componentDidMount = () =>{
        const { navigation } = this.props
        navigation.setOptions({
            headerTitle: <LogoTitle title={this.state.title}/>,
            headerTintColor : 'blue',
            //headerBackTitle : 'Back',
            headerRight : () => (
                <Button 
                    title = 'About'
                    color = 'blue'
                    onPress = {()=> {
                        navigation.navigate('MyModal')
                    }}
                />
            ),
            headerStyle : {
                backgroundColor : 'green' 
            },
            headerTitleStyle : {
                fontWeight : 'bold',
                color : 'white'
            }
        })
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        const { title } = this.props.route.params
        return (
            <View
                style={style.container}>
                <Text>{this.state.count}</Text>
                <Text>{title}</Text>
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