import React from 'react'

export default function FileItem( {name, size} ) {
  return ( 
    <div className='m-4 max-w-xs rounded overflow-hidden shadow-lg bg-orange-200'> 
        <div className='flex flex-col'>
            <p className='p-1 pl-3'>{name}</p>
            <p className="p-1 pr-3 self-end">{size} KB</p>
        </div>
    </div>
  )
}
