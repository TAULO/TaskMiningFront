import React from 'react'

export default function UIStatsComponent({ object, title, totalUI, icon }) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className='grid grid-cols-2 row-gap-8 md:grid-cols-4'>
            <div>{title}</div>
            <div>{object}</div>
            <div>{icon}</div>
        </div>
    </div>
  )
}
