import { 
    Text,
    Button, 
    TextInput,
    StyleSheet,
    View,
    Alert
} from "react-native"
import { useState } from "react"
//
export default function LoginScreen({navigation}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const loginPress = () => {
        if (username == 'abid' && password == '123') {
            navigation.replace('Home')
        }else {
            Alert.alert('Invalid credentials')
        }
    }
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.inputBox}/>
            <TextInput 
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.inputBox}/>
            <View style={styles.button}>
                <Button
                    title="Login"
                    onPress={loginPress}/>
            </View>
        </View>
    )
}
//
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },
    inputBox: {
        height: 50,
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    button: {
        margin: 20,
    }
})