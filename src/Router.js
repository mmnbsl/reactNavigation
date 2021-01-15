import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DetailScreen from './screen/DetailScreen';
import HomeScreen from './screen/HomeScreen';
import AboutModal from "./screen/AboutModal";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

class MainStackScreen extends Component {
    render() {
        return (
            <MainStack.Navigator
                initialRouteName='Home'>
                <MainStack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        headerTitleAlign: 'center'
                    }}
                />
                <MainStack.Screen
                    name='Detail'
                    component={DetailScreen}
                    options={({ route }) => 
                        ({
                            title: route.params.title,
                            headerTitleAlign: 'center',
                            headerBackTitle : null  
                        })
                    }
                />
            </MainStack.Navigator>
        );
    }
}

export default class RootStackScreen extends Component {
    render () {
        return(
            <NavigationContainer>
                <RootStack.Navigator mode = 'modal'>
                    <RootStack.Screen 
                        name = 'Main' 
                        component = {MainStackScreen}
                        options = {{headerShown : false }}

                    />
                    <RootStack.Screen
                        name = 'MyModal'
                        component = {AboutModal}
                        options = {{
                            headerShown : false
                        }}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}

