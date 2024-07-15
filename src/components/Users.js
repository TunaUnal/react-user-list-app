import React from 'react'
import axios from 'axios'
import UserSingle from './UserSingle'
import SearchUser from './SearchUser'
import { useEffect, useState } from 'react'
import Page from './Page'
import Info from './Info'
import {filterUsers,paginateUsers} from './Functions'

let filteredUsers;
function Users() {
    const [allUsers, setAllUsers] = useState([])
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [info, setInfo] = useState("")
    const [maxPage, setMaxPage] = useState(0)


    useEffect(() => {
        if (search) {
            setPage(1)
        }
    }, [search]);


    useEffect(() => {
        filteredUsers = search ? filterUsers(allUsers, search) : allUsers
        setUsers(paginateUsers(filteredUsers, page))
        setMaxPage(Math.ceil(filteredUsers.length / 10));
        setInfo(
            search ?
                `Found ${filteredUsers.length} results starting with '${search}'. You are currently on page ${page}` :
                `There are ${allUsers.length} results available. You are currently on page ${page}`
        )
    }, [search, page, allUsers])



    async function getUsers() {
        const response = await axios.get(`https://randomuser.me/api/?results=107&seed=foo`)
        return response.data.results
    }

    useEffect(() => {
        getUsers()
            .then(data => {
                setAllUsers(data)
                setUsers(paginateUsers(data, page))
            })
    }, [])

    return (
        <>
            <SearchUser setSearch={setSearch} />
            <Page setPage={setPage} page={page} maxPage={maxPage} />
            <Info info={info} />
            {users.map((u, i) => (
                <UserSingle key={i} user={u} />
            ))}
        </>
    )
}

export default Users