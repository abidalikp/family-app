import { Pressable, Text } from "react-native"
import ProfileItem from "./components/ProfileItem"

export function listProfile(members, navigation, heading=null) {
    if (!members || !navigation) return []
    let memberProfiles = []
    if (heading && members.length) memberProfiles.push(<Text>{heading}</Text>)
    members.forEach((member, i) => {
        memberProfiles.push(
            <Pressable  key={i} onPress={() => navigation.replace('Profile', {member: member.code})}>
                <ProfileItem member={member} />
            </Pressable>
        )
    })
    return memberProfiles
}