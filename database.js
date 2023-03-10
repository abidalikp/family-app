import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('kp')

export async function createTable() {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'create table if not exists profiles (code text primary key not null, name text, parent text, image text)'
            )
            tx.executeSql(
                'create table if not exists partners (member text, profile text primary key not null)'
            )
            // tx.executeSql(
            //     'delete from profiles'
            // )
            // tx.executeSql(
            //     'delete from partners'
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
                'select code, name, image from profiles', [], (_, {rows}) => {
                    resolve(rows._array)
                }
            )
        }, (error) => {
            console.log('getMembers err: '+error.message)
        })
    })
}

export async function saveMembers(members, partners=null) {
    return new Promise(() => {
        db.transaction(tx => {
            tx.executeSql(
                `insert into profiles (code, name, parent, image) values ${members
                    .map(member => 
                        `('${member.code}', '${member.name}', '${member.parent}', '${member.image}')`
                    ).join(', ')
                }`
            )
            tx.executeSql(
                `insert into partners (member, profile) values ${partners
                    .map(partner => 
                        `('${partner.member}', '${partner.profile}')`
                    ).join(', ')
                }`
            )
        }, (error) => {
            console.log('saveMembers err: '+error.message)
        })
    })
}

export function getMember(code) {
    return new Promise((resolve) => {
        db.transaction(tx => {
            tx.executeSql(
                'select code, name, parent, image from profiles where code=?', [code],
                (_, {rows}) => {
                    resolve(rows._array[0])
                }
            )
        }, (error) => {
            console.log('getMember err: '+error.message)
        })
    })
}

export function getChildren(code) {
    return new Promise((resolve) => {
        db.transaction(tx => {
            tx.executeSql(
                'select code, name, image from profiles where parent=?', [code],
                (_, {rows}) => {
                    resolve(rows._array)
                }
            )
        }, (error) => {
            console.log('getChildren err: '+error.message)
        })
    })
}

export function getPartners(code) {
    return new Promise((resolve) => {
        db.transaction(tx => {
            tx.executeSql(
                'select name, code, image from profiles where code=(select profile from partners where member=? union select member from partners where profile=?)', [code, code],
                (_, {rows}) => {
                    resolve(rows._array)
                }
            )
        }, (error) => {
            console.log('getPartners err: '+error.message)
        })
    })
}

export function dropTables() {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'drop table if exists profiles'
            )
            tx.executeSql(
                'drop table if exists partners'
            )
        }, (error) => {
            console.log('dropTables err: '+error.message)
        })
    })
}