import { Outlet } from "react-router-dom"
import React from 'react'
import Header from "../Header"

const UsersLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                Footer
            </footer>

        </div>
    )
}

export default UsersLayout