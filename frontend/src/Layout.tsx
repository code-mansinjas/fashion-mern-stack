import React from 'react'
import Header from './widgets/header/Header'
import Footer from './widgets/footer/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout