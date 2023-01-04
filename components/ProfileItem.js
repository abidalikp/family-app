// import libs
import * as React from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'

// import other
import pro_pic from '../assets/pro_pic.jpg'

// render fun
export default function ProfileItem({member}) {
    return (
        <View style={styles.container}>
                <Image 
                    // source={{uri: member.image}}
                    source={pro_pic}
                    style={styles.propic} 
                    resizeMode='contain'/>
                <View style={styles.memDesc}>
                    <Text style={styles.text}>{member.name}</Text>
                    <Text style={styles.text}>{member.code}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'grey',
        borderWidth: 1,
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    propic: {
        height: 80,
        width: 80,
        flex: 0.3
    },
    memDesc: {
        padding: 15,
        flex: 0.7
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18
    }
})