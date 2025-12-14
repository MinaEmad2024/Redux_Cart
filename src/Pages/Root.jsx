
import { Outlet } from "react-router-dom";
import Header from '../ComponentX/Header';



export default function Root(){

    return <div>
    <Header />
    <Outlet />
    </div>
}