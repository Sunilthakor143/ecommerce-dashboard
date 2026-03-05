import Layout from "../layout/Layout"

export default function Dashboard(){

const user=JSON.parse(localStorage.getItem("user"))

return(

<Layout>

<h1 className="text-2xl font-bold">

Welcome {user?.name}

</h1>

</Layout>

)

}
