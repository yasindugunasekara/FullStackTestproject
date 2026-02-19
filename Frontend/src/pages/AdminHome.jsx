
import { Route } from "react-router-dom";
import { AdminNavBar } from "../component/NavBar";


export default function AdminHome() {
    return(
        <div className="min-h-screen bg-gray-100">
            <AdminNavBar />
            <h1 className="text-4xl font-bold text-center mt-10">Admin Home Page</h1>
        </div>
    )
}