import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'

const Layout = ({children}) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='px-3 md:px-8 lg:px-12 py-6'>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout