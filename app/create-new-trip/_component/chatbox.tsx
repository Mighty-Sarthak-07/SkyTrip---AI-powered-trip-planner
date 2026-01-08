"use client"
import axios from 'axios'
import { Loader2, Pencil, Send } from 'lucide-react'
import { useState } from 'react'
import EmptyBoxState from './EmptyBoxstate'

type Message = {
    role: string;
    content: string;
}
const Chatbox = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const onSend = async (input?: string) => {
        const msgContent = input || userInput;
        if (!msgContent?.trim()) return;

        const newMsg: Message = { role: 'user', content: msgContent };
        setMessages((prev) => [...prev, newMsg]);
        setUserInput('');
        setLoading(true);
        const result = await axios.post('/api/aimodel', {
            messages: [...messages, newMsg]
        });

        setMessages((prev: Message[]) => [...prev, {
            role: 'assistant',
            content: result?.data?.resp
        }]);
        console.log(result.data);
        setLoading(false);

    }
    return (
        <div className='h-[84vh] flex flex-col'>
            {messages?.length == 0 && <EmptyBoxState onSelectOption={(v: string) => onSend(v)} />}
            <section className='flex-1 overflow-y-auto p-4'>
                <div className="flex flex-col gap-2">
                    {messages.map((msg: Message, index) => (
                        msg.role === 'user' ?
                            <div key={index} className='flex justify-end mt-2'>
                                <div className='max-w-xl py-2 px-4 rounded-lg bg-primary text-white'>
                                    {msg.content}
                                </div>
                            </div> :
                            <div key={index} className='flex justify-start mt-2'>
                                <div className='max-w-xl py-2 px-4 rounded-lg bg-gray-100 text-black'>
                                    {msg.content}
                                </div>
                            </div>
                    ))}
                    {loading && (
                        <div className='flex justify-start mt-2'>
                            <div className='bg-gray-100 text-black py-2 px-4 rounded-lg flex items-center gap-2'>
                                <Loader2 className='animate-spin w-5 h-5' />
                                <span className='text-sm'>Thinking...</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <section>
                <div className='relative flex items-center bg-white border-2 border-gray-200 rounded-2xl px-4 py-4 shadow-sm hover:border-gray-300 transition-colors'>
                    <Pencil className='w-5 h-5 text-gray-400 mr-3' />
                    <input
                        type='text'
                        onChange={(e) => setUserInput(e.target.value ?? "")}
                        value={userInput}
                        placeholder='Start typing your trip idea...'
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

export default Chatbox