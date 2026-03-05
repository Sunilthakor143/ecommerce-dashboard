import { useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"

export default function Profile(){

const navigate = useNavigate()

const storedUser = JSON.parse(localStorage.getItem("user")) || {}

const [name,setName] = useState(storedUser.name || "")
const [email,setEmail] = useState(storedUser.email || "")
const [password,setPassword] = useState(storedUser.password || "")
const [edit,setEdit] = useState(false)

const handleUpdate = ()=>{

const updatedUser = { name,email,password }

localStorage.setItem("user",JSON.stringify(updatedUser))

alert("Profile Updated")

setEdit(false)

}

const handleLogout = ()=>{

localStorage.removeItem("isAuth")
navigate("/")

}

return(

<div>

<Navbar/>

<div className="p-6 max-w-md mx-auto">

<h1 className="text-2xl font-bold mb-6">
Profile
</h1>

{edit ? (

<div className="space-y-3">

<input
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-2 w-full"
/>

<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="border p-2 w-full"
/>

<input
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="border p-2 w-full"
/>

<button
onClick={handleUpdate}
className="bg-green-500 text-white px-4 py-2"
>
Save
</button>

</div>

) : (

<div className="space-y-3">

<p><b>Name:</b> {name}</p>
<p><b>Email:</b> {email}</p>
<p><b>Password:</b> {password}</p>

<div className="flex gap-4">

<button
onClick={()=>setEdit(true)}
className="bg-blue-500 text-white px-4 py-2"
>
Edit
</button>

<button
onClick={handleLogout}
className="bg-red-500 text-white px-4 py-2"
>
Logout
</button>

</div>

</div>

)}

</div>

</div>

)

}
