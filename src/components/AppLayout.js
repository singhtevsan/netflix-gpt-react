import { Outlet } from "react-router-dom"
import Header from "./Header"

const AppLayout = () => {
    return (
        <div>
            {/* Header */}
            <Header />

            {/* Children */}
            <Outlet />
        </div>
    )
};

export default AppLayout;