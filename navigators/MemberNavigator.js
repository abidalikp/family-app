//
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import MembersScreen from "../screens/MembersScreen"
import ProfileRoute from "../routes/ProfileRoute"
import { Button } from "react-native"
//
Stack = createStackNavigator()
//
export default function() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Members'
                screenOptions={{headerTitleAlign: 'center',}}
                >
                <Stack.Screen name='Members' component={MembersScreen} />
                <Stack.Screen 
                    name='Profile' 
                    component={ProfileRoute}
                    options={({navigation}) => ({
                        headerLeft: () => <Button title="Home" onPress={() => navigation.replace('Members')}/>
                    })} />
            </Stack.Navigator>      
        </NavigationContainer>
    )
}