import { useEffect, useState } from 'react';
import '../styles/user.css'
import UserCard from '../components/UserCard';

const Users = () => {
    const [allUsers, setAllUsers] = useState([])
    //if set to [], called once in each render
    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users").then(async (res) => {
                console.log("res : ", res)
                const users = await res.json()
                console.log("users : ", users)
                setAllUsers(() => users)
            })
        },
        []
    )
    return (
        <div id='users'>
            <h1 id='title'>All Users</h1>
            <div id='user-grid'>
                {
                    allUsers.map(
                        (user) => {
                            return <UserCard user={user} key={user.id} />
                        }
                    )
                }
            </div>
        </div>
    );
}

export default Users