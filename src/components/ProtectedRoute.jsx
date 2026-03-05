import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {

const isAuth = localStorage.getItem("isAuth")

return isAuth === "true" ? children : <Navigate to="/" />

}
