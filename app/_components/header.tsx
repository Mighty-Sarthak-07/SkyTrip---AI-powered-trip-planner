"use client"
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../components/ui/button'

const menuOptions = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Contact Us",
        href: "/contact",
    },
]

const Header = () => {
    const { user, isSignedIn } = useUser();
    return (
        <div className='flex justify-between items-center p-4'>
            <div className='flex gap-2 items-center'>
                <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                <h1 className='text-2xl '>SkyTrip</h1>
            </div>
            <div className='flex gap-5 items-center'>
                {menuOptions.map((option) => (
                    <Link key={option.name} href={option.href} className='text-lg transition-all hover:scale-105 hover:text-primary'>{option.name}</Link>
                ))}
            </div>
            {isSignedIn ? (
                <UserButton />
            ) : (
                <SignInButton mode='modal'>
                    <Button>Get Started</Button>
                </SignInButton>
            )}
        </div>
    )
}

export default Header