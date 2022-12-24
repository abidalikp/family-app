import ProfileItem from "./components/ProfileItem"

export function listProfile(members) {
    if (!members) return []
    let memberProfiles = []
    members.forEach((member, i) => {
        memberProfiles.push(
            <ProfileItem member={member} key={i} />
        )
    })
    return memberProfiles
    ? memberProfiles
    : <></>
}