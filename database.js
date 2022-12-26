import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('kp')

export async function createTable() {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'create table if not exists profiles (code text primary key not null, name text, parent text)'
            )
            // tx.executeSql(
            //     'create table if not exists partners (member text, profile text)'
            // )
        },
        reject,
        resolve
        )
    })
}

export async function getMembers() {
    return new Promise((resolve) => {
        db.transaction(tx => {
            tx.executeSql(
                'select code, name from profiles', [], (_, {rows}) => {
                    resolve(rows._array)
                }
            )
        })
    })
}

export function saveMembers(members, partners=null) {
    db.transaction(tx => {
        tx.executeSql(
            `insert into profiles (code, name, parent) values ${members
                .map(member => 
                    `('${member.code}', '${member.name}', '${member.parent}')`
                ).join(', ')
            }`
        )
        // tx.executeSql(
        //     `insert into partners (member, profile) values ${partners
        //         .map(partner => 
        //             `('${partner.member}', '${partner.profile}')`
        //         ).join(', ')
        //     }`
        // )
    })
}

export function getMember(code) {
    return new Promise((resolve) => {
        db.transaction(tx => {
            tx.executeSql(
                'select code, name from profiles where code=?', [code],
                (_, {rows}) => {
                    resolve(rows._array[0])
                }
            )
        }, (error) => {
            console.log('getMember err: '+error.message)
        })
    })
}