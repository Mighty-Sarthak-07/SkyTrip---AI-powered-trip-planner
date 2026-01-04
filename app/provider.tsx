"use client"
import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Footer from './_components/footer';
import Header from './_components/header';
const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const createUser = useMutation(api.user.CreateNewUser);
  const [userDetail, setUserDetail] = useState<any>(null); 
  const { user } = useUser();

  const CreateNewUser = useCallback(async () => {
    if (user) {
      const result = await createUser({
        name: user.fullName ?? '',
        email: user.primaryEmailAddress?.emailAddress ?? '',
        imageUrl: user.imageUrl,
      });
      setUserDetail(result);
    }
  }, [user, createUser]);

  useEffect(() => {
    user && CreateNewUser();
  }, [user, CreateNewUser]);



  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </UserDetailContext.Provider>
  )
}

export default Provider

export const useUserDetail = () => {
  const context = useContext(UserDetailContext);
  if (!context) {
    throw new Error('useUserDetail must be used within a UserDetailProvider');
  }
  return context;
};