import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")

const handleLogin = (e)=>{

e.preventDefault()

let users = JSON.parse(localStorage.getItem("users")) || []

let user = users.find(
(u)=>u.email === email && u.password === password
)

if(user){

localStorage.setItem("isAuth","true")
localStorage.setItem("user",JSON.stringify(user))

navigate("/dashboard")

}else{

setError("Invalid Email or Password")

}

}

return(

<div>
 <div className="bg-black text-white flex justify-between items-center p-4">

<h2 className="font-bold text-lg">
Ecommerce Website
</h2>

</div>

{/* LOGIN FORM */}

<div className="flex justify-center items-center h-[80vh]">

<form onSubmit={handleLogin} className="border p-6 w-80 shadow">

<h2 className="text-xl font-bold mb-4 text-center">
Login
</h2>

<input
type="email"
placeholder="Enter Email"
className="border w-full p-2 mb-3"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Enter Password"
className="border w-full p-2 mb-3"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button
className="bg-green-500 text-white w-full p-2"
>
Login
</button>

{error && (
<p className="text-red-500 mt-2 text-center">
{error}
</p>
)}

<p className="text-center mt-4">
New User ?
<Link to="/register" className="text-blue-500 ml-1">
Register
</Link>
</p>

</form>
</div>

</div>


)

}
