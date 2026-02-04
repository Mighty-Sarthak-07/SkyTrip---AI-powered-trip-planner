import { Globe, Landmark, Map, Mountain, Plane } from 'lucide-react'

const EmptyBoxState = ({ onSelectOption }: any) => {
    const options = [
        {
            id: 1,
            name: 'Create New Trip',
            icon: Map,
            color: 'text-blue-500',
            bgColor: 'bg-blue-100'
        },
        {
            id: 2,
            name: 'Inspire me where to go',
            icon: Plane,
            color: 'text-green-500',
            bgColor: 'bg-green-100'

        },
        {
            id: 3,
            name: 'Discover Hidden gems',
            icon: Landmark,
            color: 'text-orange-700',
            bgColor: 'bg-orange-100'

        },
        {
            id: 4,
            name: 'Adventure Destination',
            icon: Mountain,
            color: 'text-rose-500',
            bgColor: 'bg-rose-100'
        }
    ]
    return (
        <div className='flex flex-col items-center justify-center p-2 h-full animate-in fade-in duration-500'>
            <div className='flex items-center gap-2 mb-6'>
                <Globe className='w-12 h-12 text-primary animate-pulse' />
            </div>
            <h2 className='text-3xl font-extrabold text-gray-900 tracking-tight'>
                Start Planning your <span className='text-primary'>Next Trip</span>
            </h2>
            <p className='text-gray-500 text-center mt-4 max-w-xl text-lg relative z-10'>
                Your personal AI travel planner. Select an option below to begin your journey.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 w-full max-w-3xl'>
                {options.map((option) => (
                    <div
                        key={option.id}
                        onClick={() => onSelectOption(option.name)}
                        className='group flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-2xl hover:border-primary cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white hover:bg-gray-50'
                    >
                        <div className={`p-4 rounded-full mb-3 ${option.bgColor} group-hover:rotate-12 transition-transform duration-300`}>
                            <option.icon className={`w-8 h-8 ${option.color}`} />
                        </div>
                        <h2 className='font-bold text-md text-gray-800 group-hover:text-primary transition-colors'>{option.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default EmptyBoxState