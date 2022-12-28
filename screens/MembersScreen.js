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

    const fetchData = async(URL) => {
        let members = [];
        try {
            const response = await fetch(
                URL
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
                    const members = await fetchData('http://192.168.1.9:8000/api/profiles')
                    const partners = await fetchData('http://192.168.1.9:8000/api/partners')
                    await saveMembers(members, partners)
                }
                setData(members)
            } catch (error) {
                console.log('useEffect err: '+error)
            }
        })()
    }, [])

    let members = listProfile(data, navigation)

    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            { members }
        </ScrollView>
    )
}