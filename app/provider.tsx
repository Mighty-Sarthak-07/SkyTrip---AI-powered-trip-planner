"use client"
import React from 'react'
import Header from './_components/header';
import Footer from './_components/footer';
const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
const CreateNewUser = async () => {
    
}

  return (
    <div>
        <Header/>
        {children}
        <Footer/>
        </div>
  )
}

export default Provider