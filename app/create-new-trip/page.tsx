
"use client"
import Chatbox from './_component/chatbox'
import Itinerary from './_component/Itinerary'
const CreateNewTrip = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 mb-6 md:mb-10 items-start">
          <Chatbox />
        <div className='h-[60vh] md:h-[85vh] col-span-1 md:col-span-2'>
          <Itinerary />
        </div>
      </div>
    </div>
  )
}

export default CreateNewTrip