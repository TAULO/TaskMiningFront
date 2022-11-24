import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

export default function FileItem( {id, name, size, deleteFile, previewFile} ) {
  return ( 
    <div className='mb-2 rounded overflow-hidden shadow-fileBs  bg-orange-500 opacity-100 hover:opacity-80 cursor-pointer h-18' onClick={previewFile}> 
        <div className='flex flex-col'>
            <FontAwesomeIcon className='self-end translate-y-3 text-gray-700 -translate-x-3 hover:opacity-50 z-10' id='delete-icon' icon={faCircleXmark} onClick={deleteFile}></FontAwesomeIcon>
            <div className="invisible p-0 m-0 absolute">{id}</div>
            <p className='pl-3 text-gray-900'>{name} </p>
            <p className="p-1 pr-3 self-end text-gray-900 mt-2">{size} KB</p>
        </div>
    </div>
  )
}
