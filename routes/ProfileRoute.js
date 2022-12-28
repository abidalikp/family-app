import React, {useState, useEffect} from "react"
import { Text } from "react-native"
//
import ProfileScreen from "../screens/ProfileScreen"
import {
    getMember,
    getChildren,
    getPartners,
} from '../database'
//
export default function({route, navigation}) {
    const [data, setData] = useState('ABG')
    const {member} = route.params
    
    useEffect(() => {
        ( async() => {
            try {
                let mem = await getMember(member)
                let children = await getChildren(member)
                let partners = await getPartners(member)
                // console.log(partners)
                mem.children = children
                mem.partners = partners
                setData(mem)
            } catch (error) {
                console.log('Get member err: ', error)                
            }
        })()
    }, [])

    return (
        <>
            <ProfileScreen member={data} navigation={navigation}/>
        </>
    )
}