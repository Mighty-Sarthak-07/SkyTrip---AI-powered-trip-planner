
"use client"
import Chatbox from './_component/chatbox'
import Itinerary from './_component/Itinerary'
const CreateNewTrip = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 items-start">
        <div className='sticky top-10'>
          <Chatbox />
        </div>
        <div className='h-[85vh] col-span-2 overflow-y-scroll sticky top-10'>
          <Itinerary />
        </div>
      </div>
    </div>
  )
}

export default CreateNewTrip