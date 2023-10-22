import Link from 'next/link'
import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'

const NavBar = () => {
    const links = [
        {name: "Dashboard", href: "/"},
        {name: "Issues", href: "/issues"}
    ]
        
    return (
        <nav className='navbar text-primary space-x-5 bg-base-100 text-xl border-b border-base-content mb-2'>
            <div className='navbar-start'><div className='p-1 bg-indigo-900 rounded-xl'><Link href='/' className=''><BiSolidDashboard /></Link></div></div> 
            <div className='navbar-center lg:flex space-x-5'>
                {links.map(link => <Link href={link.href}  className='hover:text-accent transition-colors'>{link.name}</Link>)}
            </div>
            <div className='navbar-end '></div>
        </nav>
    )
}

export default NavBar