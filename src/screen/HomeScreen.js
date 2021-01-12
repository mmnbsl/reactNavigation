import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class HomeScreen extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View
                style={style.container}>
                <Text>HomeScreen</Text> 
                <Button
                    title={'Haber 1'}
                    onPress={() => { navigate('Detail', {
                        title : `Kadıköy'de Yangın`
                    }) }}
                />
                <Button
                    title={'Haber 2'}
                    onPress={() => { navigate('Detail',{
                        title : `Fenerbahçe'de Yeni Transflerin Ardı Kesilmiyor!`
                    }) }}
                />
            
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