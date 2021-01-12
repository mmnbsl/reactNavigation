import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DetailScreen from './screen/DetailScreen';
import HomeScreen from './screen/HomeScreen';
import { Button } from "react-native";

const Stack = createStackNavigator();


export default class Router extends Component {
    render() {
        return (
            <NavigationContainer> 
                <Stack.Navigator
                    initialRouteName='Home'>
                    <Stack.Screen
                        name='Home'
                        component={HomeScreen}
                        options={{
                            headerTitleAlign: 'center'
                        }}
                    />
                    <Stack.Screen
                        name='Detail'
                        component={DetailScreen}
                        options={({ route }) => 
                            ({
                                title: route.params.title,
                                headerTitleAlign: 'center',
                                
                            })
                        }
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
