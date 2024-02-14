'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import classes from './nav-links.module.css';
function Navlinks({href,children}) {
    const path =  usePathname();
  return (
    <div>
        <Link  className={path.startsWith(href) ? `${classes.link} ${classes.active} ` : undefined} href={href}> 
        {children}
        </Link>
    </div>
  )
}

export default Navlinks