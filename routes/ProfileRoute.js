import React, {useState, useEffect} from "react"
import { Text } from "react-native"
import ProfileScreen from "../screens/ProfileScreen"
//
export default function({route, navigation}) {
    const [data, setData] = useState([])
    const {member} = route.params
    const getData = async() => {
        try {
            const response = await fetch(
                `http://192.168.1.7:8000/api/members/${member}`
            )
            const json = await response.json()
            setData(json)
            // console.log(json)
        } catch (error) {
            console.log('Get members error: '+error.message)
        } 
    } 

    useEffect(() => {
        getData()
        // console.log(data)
    }, [])

    return (
        <>
            <ProfileScreen member={data} navigation={navigation}/>
        </>
    )
}