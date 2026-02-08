"use client"
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const path = usePathname();

    return (
        <header className='p-4 shadow-sm bg-white sticky top-0 z-50 border-b border-gray-100'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                {/* Logo Section */}
                <div className='flex gap-2'>
                    <Image src="/logo.svg" alt="Logo" width={40} height={40} className="w-10 h-10" />
                    <h1 className='text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>SkyTrip</h1>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex gap-8 items-center'>
                    {menuOptions.map((option) => (
                        <Link
                            key={option.name}
                            href={option.href}
                            className='text-base font-medium text-gray-600 hover:text-primary transition-colors hover:scale-105 active:scale-95'
                        >
                            {option.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Auth */}
                <div className='hidden md:flex items-center gap-4'>
                    {isSignedIn ? (
                        <div className='flex gap-2 items-center'>
                            {path === '/create-new-trip' ? (
                                <Link href="/my-trips">
                                    <ShimmerButton className='h-10 px-6 text-sm font-medium'>My Trips</ShimmerButton>
                                </Link>
                            ) : (
                                <Link href="/create-new-trip">
                                    <ShimmerButton className='h-10 px-6 text-sm font-medium'>Create New Trip</ShimmerButton>
                                </Link>
                            )}
                            <UserButton appearance={{
                                elements: {
                                    userButtonAvatarBox: "h-14 w-14 border-2 border-primary/10 rounded-full"
                                }
                            }} />
                        </div>
                    ) : (
                        <SignInButton mode='modal'>
                            <ShimmerButton className='h-10 px-6 text-sm font-medium'>Get Started</ShimmerButton>
                        </SignInButton>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className='md:hidden flex items-center gap-4'>
                    {isSignedIn && (
                        <UserButton appearance={{
                            elements: {
                                userButtonAvatarBox: "h-18 w-18 border border-gray-200"
                            }
                        }} />
                    )}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='p-2 rounded-full hover:bg-gray-100 transition-colors'
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className='md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200'>
                    {menuOptions.map((option) => (
                        <Link
                            key={option.name}
                            href={option.href}
                            onClick={() => setIsMenuOpen(false)}
                            className='text-lg font-medium text-gray-700 hover:text-primary py-2 px-2 hover:bg-gray-50 rounded-lg transition-all'
                        >
                            {option.name}
                        </Link>
                    ))}
                    {!isSignedIn ? (
                        <div className="pt-2">
                            <SignInButton mode='modal'>
                                <ShimmerButton className='w-full justify-center'>Get Started</ShimmerButton>
                            </SignInButton>
                        </div>
                    ) : (
                        <div className="pt-2">
                            {path === '/create-new-trip' ? (
                                <Link href="/my-trips" onClick={() => setIsMenuOpen(false)}>
                                    <ShimmerButton className='w-full justify-center'>My Trips</ShimmerButton>
                                </Link>
                            ) : (
                                <Link href="/create-new-trip" onClick={() => setIsMenuOpen(false)}>
                                    <ShimmerButton className='w-full justify-center'>Create New Trip</ShimmerButton>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            )}
        </header>
    )
}

export default Header