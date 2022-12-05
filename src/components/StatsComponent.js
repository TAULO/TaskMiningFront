import React from 'react'

export default function StatsComponent({ object, taskCompletionTime, title, unit }) {
  return (
    <div className='inline-block align-bottom bg-white text-left overflow-hidden shadow-md rounded-lg mb-2'>
        <div className='bg-white p-7'>
            <div className='text-center sm:mt-0 sm:ml-2 sm:text-left max-h-32 overflow-auto'>
                <div className='text-sm leading-6 font-medium  text-gray-400'>{ title }</div>
                <div className='text-2xl font-bold text-black'>
                    {Object.entries(object || {}).map(([key, value], index) => {
                        return (
                            <div key={index} className="flex items-stretch">
                                <div>{key}</div>
                                <div className='flex-1 text-right'>{value} {unit} </div>
                                <div className='ml-2 text-sm mt-2.5 opacity-50'>({Math.round(value / taskCompletionTime * 100)})%</div>
                            </div> 
                    )})}
                </div>
            </div>
        </div>
    </div>
    )
}
