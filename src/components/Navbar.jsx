import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar(){

const [cartCount,setCartCount] = useState(0)

const loadCart = () => {
const cart = JSON.parse(localStorage.getItem("cart")) || []

const totalQty = cart.reduce(
(acc,item)=> acc + item.quantity,
0
)

setCartCount(totalQty)
}

useEffect(()=>{

loadCart()

window.addEventListener("cartUpdated", loadCart)

return ()=>{
window.removeEventListener("cartUpdated", loadCart)
}

},[])

return(

<div className="bg-black text-white flex justify-between items-center p-4">

<h2 className="font-bold text-lg">
Ecommerce Dashboard
</h2>

<div className="flex gap-6">

<Link to="/dashboard">Dashboard</Link>

<Link to="/products">Products</Link>

<Link to="/cart" className="relative">

Cart

{cartCount > 0 && (
<span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 rounded-full">
{cartCount}
</span>
)}

</Link>

<Link to="/profile">Profile</Link>

</div>

</div>

)

}
