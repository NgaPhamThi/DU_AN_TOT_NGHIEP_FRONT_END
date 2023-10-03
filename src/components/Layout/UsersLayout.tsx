import { Outlet } from "react-router-dom"
import React from 'react'

const UsersLayout = () => {
    return (
        <div>
            <header>
                Header
            </header>
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