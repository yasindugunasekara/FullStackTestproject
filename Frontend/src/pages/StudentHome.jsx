import { Route } from "react-router-dom";
import { StudentNavBar } from "../component/NavBar";


export default function StudentHome() {
    return(
        <div className="min-h-screen bg-gray-100">
            <StudentNavBar />
            <h1 className="text-4xl font-bold text-center mt-10">Student Home Page</h1>
        </div>
    )
}