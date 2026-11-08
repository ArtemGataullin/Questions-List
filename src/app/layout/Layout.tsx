import { Footer } from '@widgets/Footer/Footer'
import { Header } from '@widgets/Header/Header'
import { Outlet } from 'react-router-dom'

export function Layout () {
    return (
        <>
            <Header />
            <main style={{backgroundColor: '#F4F4F4'}}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}