//
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeNavigator from "./HomeNavigator"
import LoginScreen from "../screens/LoginScreen"
//
//
Stack = createStackNavigator()
//
export default function() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{headerTitleAlign: 'center'}}
                >
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen 
                    name='Home' 
                    component={HomeNavigator} 
                    options={{ headerShown: false }}/>
            </Stack.Navigator>      
        </NavigationContainer>
    )
}