"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useConvex } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useTripDetail, useUserDetail } from '@/app/provider'
import Itinerary from '@/app/create-new-trip/_component/Itinerary'

const ViewTrip = () => {
    const {tripId} = useParams();
    console.log(tripId);
    const {userDetail,setUserDetail} = useUserDetail();
    const convex = useConvex();

     const { tripDetailInfo, setTripDetailInfo } = useTripDetail();
    useEffect(() => {
        userDetail && GetTripDetail();
    }, [userDetail])
    const GetTripDetail = async () => {
        const result = await convex.query(api?.tripDetail.GetTripById, { 
            tripId: tripId + "", 
            uid: userDetail._id 
        });
        console.log(result);
        setTripDetailInfo(result?.tripDetail);
    }
  return (
    <div className='mt-20'><Itinerary/>   </div>
  )
}

export default ViewTrip