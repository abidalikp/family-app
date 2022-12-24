//
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import MembersScreen from "../screens/MembersScreen"
import ProfileScreen from "../screens/ProfileScreen"
//
Stack = createStackNavigator()
//
export default function() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Members' component={MembersScreen} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Navigator>      
        </NavigationContainer>
    )
}