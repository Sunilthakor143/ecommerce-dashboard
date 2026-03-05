import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

export default function Register(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")

const handleRegister = (e)=>{
e.preventDefault()

let users = JSON.parse(localStorage.getItem("users")) || []

const emailExists = users.find(user => user.email === email)

if(emailExists){
setError("Email already registered")
return
}

if(password.length < 6){
setError("Password must be at least 6 characters")
return
}

const newUser = {name,email,password}

users.push(newUser)

localStorage.setItem("users",JSON.stringify(users))

alert("Registration successful")

navigate("/")
}

return(

<div className="flex justify-center items-center h-screen bg-gray-100">

<form onSubmit={handleRegister} className="bg-white p-8 shadow-md w-80">

<h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

<input
type="text"
placeholder="Name"
className="border w-full p-2 mb-3"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email"
className="border w-full p-2 mb-3"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
className="border w-full p-2 mb-3"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button className="bg-blue-500 text-white w-full p-2">
Register
</button>

{error && <p className="text-red-500 mt-2">{error}</p>}

<p className="text-center mt-3">
Already have account?
<Link to="/" className="text-blue-500 ml-1">
Login
</Link>
</p>

</form>

</div>

)

}
