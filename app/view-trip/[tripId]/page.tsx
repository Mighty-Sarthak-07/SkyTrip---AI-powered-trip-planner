"use client"
import GlobalMap from '@/app/create-new-trip/_component/GlobalMap'
import Itinerary from '@/app/create-new-trip/_component/Itinerary'
import PackingList from '@/app/create-new-trip/_component/PackingList'
import TripChatbot from '@/app/create-new-trip/_component/TripChatbot'
import { useTripDetail, useUserDetail } from '@/app/provider'
import { api } from '@/convex/_generated/api'
import { useConvex } from 'convex/react'
import { ArrowLeft } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const ViewTrip = () => {
  const { tripId } = useParams();
  console.log(tripId);
  const { userDetail, setUserDetail } = useUserDetail();
  const convex = useConvex();

  const { tripDetailInfo, setTripDetailInfo } = useTripDetail();
  const [activeDay, setActiveDay] = useState<number | null>(null);

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
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="w-full md:col-span-3">
          <Itinerary trip={tripDetailInfo || undefined} activeDay={activeDay} setActiveDay={setActiveDay} />
        </div>
        <div className="w-full md:col-span-2">
          <div className="sticky top-20">
            <h1 className="px-2 text-4xl py-5">Interactive Trip Map</h1>
            <div 
              onClick={() => setActiveDay(null)}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 mb-4 w-fit cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
              title="Reset to overview"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
              <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">Overview</span>
            </div>
            <GlobalMap trip={tripDetailInfo} activeDay={activeDay} />
            <div className="mt-6">
              <PackingList trip={tripDetailInfo || undefined} />
            </div>
          </div>
        </div>
      </div>
      {tripDetailInfo && <TripChatbot tripContext={tripDetailInfo} />}
    </div>
  )
}

export default ViewTrip