"use client"
import GlobalMap from '@/app/create-new-trip/_component/GlobalMap'
import Itinerary from '@/app/create-new-trip/_component/Itinerary'
import PackingList from '@/app/create-new-trip/_component/PackingList'
import { useTripDetail, useUserDetail } from '@/app/provider'
import { api } from '@/convex/_generated/api'
import { useConvex } from 'convex/react'
import { ArrowDownNarrowWideIcon } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const ViewTrip = () => {
  const { tripId } = useParams();
  console.log(tripId);
  const { userDetail, setUserDetail } = useUserDetail();
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
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
      <div className='md:col-span-3'>
        
        <Itinerary trip={tripDetailInfo || undefined} />
      </div>
      <div className='md:col-span-2'>
        <div className='sticky top-20'>
          <h1 className='px-2 text-4xl py-5'>Interactive Trip Map</h1>
          <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700">
                            <ArrowDownNarrowWideIcon className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                            <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">Overview</span>
                        </div>
          <GlobalMap trip={tripDetailInfo} />
          <PackingList trip={tripDetailInfo || undefined} />
        </div>
      </div>
    </div>
  )
}

export default ViewTrip