'use client'
import Link from 'next/link'
import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { usePathname } from 'next/navigation'
import classnames from 'classnames';


const NavBar = () => {
    const links = [
        {name: "Dashboard", href: "/"},
        {name: "Issues", href: "/issues"}
    ]
    
    const currentPath = usePathname();


    return (
        <nav className='navbar text-primary space-x-5 bg-base-100 text-xl border-b border-base-content mb-2'>
            <div className='navbar-start'><div className='p-1 bg-indigo-900 rounded-xl'><Link href='/' className=''><BiSolidDashboard /></Link></div></div> 
            <div className='navbar-center lg:flex space-x-5'>
                {links.map(link => (
                <Link 
                    href={link.href}
                    key={link.href}
                    className={classnames({
                    "text-primary-focus": link.href === currentPath,
                    "text-primary": link.href !== currentPath,
                    "hover:text-primary-focus": true,
                    "transition-colors": true
            })}
            > {link.name}</Link>))}
            </div>
            <div className='navbar-end '></div>
        </nav>
    )
}

export default NavBar