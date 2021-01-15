import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DetailScreen from './screen/DetailScreen';
import HomeScreen from './screen/HomeScreen';
import AboutModal from "./screen/AboutModal";
import Icon from 'react-native-vector-icons/Ionicons'; 
import DrawerMenuButton from "./components/DrawerMenuButton";




const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

class MainStackScreen extends Component {
    render() {
        return (
            <MainStack.Navigator 
            initialRouteName = 'Main'>
                <MainStack.Screen
                    name = 'Main'
                    component = {HomeScreen}
                    options = {({navigation}) => ({
                        headerTitleAlign: 'center',
                        title: 'Ana Sayfa',
                        headerLeft: () => (
                            <DrawerMenuButton navigation={navigation} />
                        )
                    })}
                />
                <MainStack.Screen
                    name = 'Detail'
                    component = {DetailScreen}
                    options = {({route}) => ({
                       // title : route.params.title
                    })}
                />
            </MainStack.Navigator>
        ); 
    }
}

class RootStackScreen extends Component {
    render () {
        return(
                <RootStack.Navigator mode = 'modal'>
                    <RootStack.Screen
                        name = 'MainStack'
                        component = {MainStackScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <RootStack.Screen
                        name = 'MyModal'
                        component = {AboutModal}
                        options = {{
                            headerShown : false,
                            
                        }}
                    />
                </RootStack.Navigator>
        ) 
    }
}

export default class DrawerScreen extends Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator 
                    initialRouteName = 'Home'
                    drawerPosition = 'Left'
                    drawerType = 'back'
                    drawerContentOptions = {{
                        activeTintColor: '#fff',
                        inactiveTintColor : '#d03932',
                        activeBackgroundColor: '#d03932', 
                        inactiveBackgroundColor : '#fff',
                        itemStyle : {
                            
                        }                      
                    }}
                    drawerStyle = {{
                        
                    }}
                    >
                    <Drawer.Screen
                        name='Home'
                        component={RootStackScreen}
                        options = {{ 
                            drawerLabel : 'Ana Sayfa',
                            drawerIcon : (  {tintColor} ) => (
                                <Icon
                                    name = 'ios-home'
                                    size = {17}
                                    color = {tintColor}
                                />
                            )
                            
                        }} />
                    <Drawer.Screen
                        name='Detail Screen'
                        component={DetailScreen}
                        options={{
                            drawerLabel: 'Detail Screen',
                            drawerIcon: ({ tintColor }) => (
                                <Icon
                                    name='ios-home'
                                    size={17}
                                    color={tintColor}
                                />
                            )

                        }} />
                        
                </Drawer.Navigator>
                 
            </NavigationContainer>

        )
    }
}
