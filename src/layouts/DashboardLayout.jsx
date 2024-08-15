import { Outlet } from "react-router-dom";
import LeftSide from "../component/left/left";
import RightSide from "../component/rightSide/rightSide";

export default function DashboardLayout() {
    return (
        <div className="">
            <LeftSide />
            <Outlet />
            <RightSide />
        </div>
    )
}