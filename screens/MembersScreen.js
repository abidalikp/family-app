import React, {useState, useEffect} from "react"
import { Text, ScrollView } from "react-native"
//
import {listProfile} from '../utils'
export default function() {

    const [data, setData] = useState([])

    const getData = async() => {
        try {
            const response = await fetch(
                'http://192.168.1.7:8000/api/members'
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
    }, [])

    let members = listProfile(data)

    return (
        <ScrollView>
            <Text>Members</Text>
            { members }
        </ScrollView>
    )
}