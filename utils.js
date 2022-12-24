import { Pressable } from "react-native"
import ProfileItem from "./components/ProfileItem"

export function listProfile(members, navigation) {
    if (!members || !navigation) return []
    // console.log(navigation.navigate)
    let memberProfiles = []
    members.forEach((member, i) => {
        memberProfiles.push(
            <Pressable  key={i} onPress={() => navigation.replace('Profile', {member: member.code})}>
                <ProfileItem member={member} />
            </Pressable>
        )
    })
    return memberProfiles
    ? memberProfiles
    : <></>
}