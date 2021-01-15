import React, { Component } from "react";
import {View, Button, Text, SafeAreaView, StyleSheet} from 'react-native';

class AboutModal extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        const { navigation } = this.props
        navigation.setOptions({
            headerTitleAlign: 'center',
            headerBackTitle: null
        })
    }
    render() {
        const { goBack } = this.props.navigation;
        return (
            <SafeAreaView style={style.container}>
                <View>
                    <Button title='Kapat' onPress={() => goBack()} />
                </View>
            </SafeAreaView>
        );
    }
}
const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default AboutModal;