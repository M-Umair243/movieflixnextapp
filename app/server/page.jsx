
const fetchApi = async () => {
    const res = await fetch('https://dummyjson.com/users',{
        next:{revalidate:0}
    })
    const data = await res.json()
  await new Promise(resolve=> setTimeout(resolve,3000)  )
    return data.users;
}
const page =async () => {
    const userResult =await fetchApi();
    return (
        <>
            <h1>Fetching Data using Server Component</h1>
            {userResult.map((user) => (
                <div key={user.id}>
                    <p>User Email: {user.email}</p>
                </div>
            ))}
        </>
    )
}

export default page
