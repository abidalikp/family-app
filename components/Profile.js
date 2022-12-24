import { Text, ScrollView, StyleSheet, Image, Dimensions } from "react-native"
import pro_pic from '../assets/pro_pic.jpg'
import { listProfile } from "../utils"
import ProfileItem from "./ProfileItem"

const width = Dimensions.get('window').width

export default function Profile({member}) {
    let partners = listProfile(member.partners)
    let children = listProfile(member.children)
    let parent = member.parent
        ? <ProfileItem member={member.parent}/>
        : <></>
    return (
        <ScrollView style={styles.container}>
            { parent }
            <Text style={styles.headingName}>{member.name}</Text>
            <Image 
                source={pro_pic}
                resizeMode='contain'
                style={styles.image}/>
            <Text>{member.code}</Text>
            <Text>Partner</Text>
            { partners }
            <Text>Children</Text>
            { children }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
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