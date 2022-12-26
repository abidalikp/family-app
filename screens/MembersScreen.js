import React, {useState, useEffect} from "react"
import { ScrollView } from "react-native"
//
import {
    createTable,
    saveMembers,
    getMembers,
} from "../database"
import {listProfile} from '../utils'
//
export default function({navigation}) {

    const [data, setData] = useState([])

    const fetchMembers = async() => {
        let members = [];
        try {
            const response = await fetch(
                'http://192.168.1.9:8000/api/profiles'
            )
            members = await response.json()
            // console.log(members)
        } catch (error) {
            console.log('Fetch error: '+error.message)
        }
        return members
    } 

    useEffect(() => {
        ( async () => {
            try {
                await createTable()
                let members = await getMembers()
                if (!members.length) {
                    const members = await fetchMembers()
                    saveMembers(members)
                }
                setData(members)
            } catch (error) {
                console.log('eff err: '+error)
            }
        })()
    }, [])

    let members = listProfile(data, navigation)

    return (
        <ScrollView>
            { members }
        </ScrollView>
    )
}