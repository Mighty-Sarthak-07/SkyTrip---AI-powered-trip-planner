
"use client"
import React, { useState } from 'react'
import { Pencil, Send } from 'lucide-react'

const chatbox = () => {
    const [inputValue, setInputValue] = useState('')
    const onSend = () => {
        if (!inputValue) return;
        setInputValue('');
    }
  return (
    <div className='h-[84vh] flex flex-col'>
        <section className='flex-1 overflow-y-auto p-4'>
<div className="flex justify-end mt-2">
<div className="max-w-lg bg-primary text-white py-2 px-4 rounded-lg">
    user message
    </div>    
</div>
<div className="flex justify-start mt-2">
<div className="max-w-lg bg-gray-100 text-black py-2 px-4 rounded-lg">
    AI message
    </div>    
</div>
        </section>
        <section>
<div className='relative flex items-center bg-white border-2 border-gray-200 rounded-2xl px-4 py-4 shadow-sm hover:border-gray-300 transition-colors'>
            <Pencil className='w-5 h-5 text-gray-400 mr-3' />
            <input
              type='text'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='Create a trip for Paris from New York'
              className='flex-1 outline-none text-gray-700 placeholder-gray-400 text-lg'
            />
            <button
              className='ml-3 w-12 h-12 rounded-full bg-primary hover:bg-[#FF5A3A] transition-colors flex items-center justify-center text-white shadow-md'
              aria-label='Submit' onClick={() => onSend()}
            >
              <Send className='w-5 h-5' />
            </button>
          </div>
        </section>
    </div>
  )
}

export default chatbox