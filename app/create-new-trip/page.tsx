
"use client"
import Chatbox from './_component/chatbox'
import Itinerary from './_component/Itinerary'
const CreateNewTrip = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 mb-10 items-start">
          <Chatbox />
        <div className='h-[85vh] col-span-2'>
          <Itinerary />
        </div>
      </div>
    </div>
  )
}

export default CreateNewTrip