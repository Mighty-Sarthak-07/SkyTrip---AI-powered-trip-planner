
"use client"
import Chatbox from './_component/chatbox'

const CreateNewTrip = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10 items-start">
        <div className='sticky top-10'>
          <Chatbox />
        </div>
        <div className='h-[200vh]'>

        </div>
      </div>
    </div>
  )
}

export default CreateNewTrip