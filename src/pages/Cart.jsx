import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

export default function Cart(){

const [cart,setCart] = useState([])

useEffect(()=>{
loadCart()
},[])

const loadCart = () => {
const data = JSON.parse(localStorage.getItem("cart")) || []
setCart(data)
}

const updateCart = (newCart) => {

setCart(newCart)

localStorage.setItem("cart",JSON.stringify(newCart))

// cart badge update
window.dispatchEvent(new Event("cartUpdated"))

}

// increase quantity
const increaseQty = (id) => {

const updated = cart.map(item =>
item.id === id
? {...item, quantity: item.quantity + 1}
: item
)

updateCart(updated)

}

// decrease quantity
const decreaseQty = (id) => {

const updated = cart
.map(item =>
item.id === id
? {...item, quantity: item.quantity - 1}
: item
)
.filter(item => item.quantity > 0)

updateCart(updated)

}

// remove product
const removeItem = (id) => {

const updated = cart.filter(item => item.id !== id)

updateCart(updated)

}

// total price
const cartTotal = cart.reduce(
(acc,item)=> acc + item.price * item.quantity,
0
)

return(

<div>

<Navbar/>

<div className="p-6">

<h1 className="text-2xl font-bold mb-6">
Your Cart
</h1>

{cart.length === 0 && (
<p className="text-gray-500">
Cart is empty
</p>
)}

{cart.map(item => (

<div
key={item.id}
className="flex justify-between items-center border p-4 mb-4 rounded-lg shadow-sm"
>

{/* Product Image */}

<img
src={item.image}
alt={item.title}
className="h-20 w-20 object-contain"
/>

{/* Product Info */}

<div className="flex-1 ml-4">

<h2 className="font-bold">
{item.title}
</h2>

<p className="text-green-600">
Price: ${item.price}
</p>

<p className="text-gray-600">
Subtotal: ${(item.price * item.quantity).toFixed(2)}
</p>

</div>

{/* Quantity Buttons */}

<div className="flex items-center gap-2">

<button
onClick={()=>decreaseQty(item.id)}
className="bg-gray-300 px-3 py-1 rounded"
>
-
</button>

<span className="font-bold">
{item.quantity}
</span>

<button
onClick={()=>increaseQty(item.id)}
className="bg-gray-300 px-3 py-1 rounded"
>
+
</button>

<button
onClick={()=>removeItem(item.id)}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Remove
</button>

</div>

</div>

))}

{/* Cart Total */}

{cart.length > 0 && (

<h2 className="text-xl font-bold mt-6">

Cart Total: 
<span className="text-green-600 ml-2">
${cartTotal.toFixed(2)}
</span>

</h2>

)}

</div>

</div>

)

}
