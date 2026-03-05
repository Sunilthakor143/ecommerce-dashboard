import { useEffect, useState } from "react"
import Layout from '../layout/Layout'

export default function Products(){

const [products,setProducts]=useState([])
const [loading,setLoading]=useState(true)

useEffect(()=>{

fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
setProducts(data)
setLoading(false)
})

},[])

const addToCart=(product)=>{

let cart=JSON.parse(localStorage.getItem("cart"))||[]

const existing=cart.find(item=>item.id===product.id)

if(existing){
existing.quantity+=1
}else{
cart.push({
id:product.id,
title:product.title,
price:product.price,
image:product.image,
quantity:1
})
}

localStorage.setItem("cart",JSON.stringify(cart))

window.dispatchEvent(new Event("cartUpdated"))

alert("Product added to cart")

}

if(loading){
return(

<div className="flex justify-center items-center h-screen">

<div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>

</div>

)
}

return(
    <Layout>

<div className="p-6 grid grid-cols-4 gap-6">

{products.map(product=>(

<div key={product.id} className="border p-4 rounded shadow">

<img
src={product.image}
className="h-40 mx-auto"
/>

<h2 className="font-bold mt-2">
{product.title}
</h2>

<p className="text-green-600 font-bold">
${product.price}
</p>

<button
onClick={()=>addToCart(product)}
className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
>

Add to Cart

</button>

</div>

))}

</div>
</Layout>

)
}
