//
import { Button } from "react-native"
import { createStackNavigator } from "@react-navigation/stack" 
//
import MembersScreen from "../screens/MembersScreen"
import ProfileRoute from "../routes/ProfileRoute"
//
Stack = createStackNavigator()
//
export default function() {
    return (
        <Stack.Navigator
            initialRouteName='Members'
            screenOptions={{headerTitleAlign: 'center'}}
            >
            <Stack.Screen name='Members' component={MembersScreen} />
            <Stack.Screen 
                name='Profile' 
                component={ProfileRoute}
                options={({navigation}) => ({
                    headerLeft: () => <Button 
                        title="Home"
                        onPress={() => 
                            navigation.replace('Members')
                        }
                    />
                })} 
                />
        </Stack.Navigator>      
    )
}