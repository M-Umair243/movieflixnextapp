"use client";

import { useEffect, useState } from "react";

const page = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch('https://dummyjson.com/users')
            const data = await res.json()
            setApiData(data.users)
            console.log(data.users);

        }
        fetchApi()
    }, [])
    return (
        <>
            <h1>Fetching Data using Client Components</h1>
            <h4>All Users Data</h4>
                {apiData.map((user) => (
                    <div key={user.id}>
                        <ul>
                            <li> User First Name: {user.firstName} | User Last Name : {user.lastName}</li>
                        </ul>
                    </div>
                ))}
           
        </>
    )
}

export default page
