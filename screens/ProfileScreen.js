import { 
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions,
} from "react-native"
import FastImage from "react-native-fast-image"
//
import pro_pic from '../assets/pro_pic.jpg'
import { listProfile } from "../utils"

const width = Dimensions.get('window').width

export default function Profile({member, navigation}) {
    let partners = listProfile(member.partners, navigation, 'Partners')
    let children = listProfile(member.children, navigation, 'Children')
    let parent = member.parent? listProfile([member.parent], navigation, 'Parent'): <></>
    return (
        <ScrollView style={styles.container}>
            { parent }
            <Text style={styles.headingName}>{member.name}</Text>
            <Image 
                // source={{uri: member.image}}
                source={pro_pic}
                resizeMode='contain'
                style={styles.image}/>
            <Text>{member.code}</Text>
            { partners }
            { children }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white'
    },
    image: {
        height: width,
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
    },
    headingName: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})