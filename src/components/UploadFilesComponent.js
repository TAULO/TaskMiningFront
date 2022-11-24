import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from "@fortawesome/free-solid-svg-icons"

export default function UploadFilesComponent({ readFiles }) {
  return (
     <div className='max-w-md'>
        <label htmlFor="file-input" className='justify-self-start place-self-center order-2'>
                <div className="">
                    <div className="px-24 py-8 border-2 border-dashed border-orange-500 rounded-md opacity-100 hover:opacity-50 cursor-pointer">
                        <div className="flex flex-col items-center text-gray-500">
                            <FontAwesomeIcon className='h-16 text-orange-500' icon={faFileExport} />
                            <p className="mt-8">Click to upload or drag and drop</p>
                            <p>CSV files only</p>
                        </div>
                    </div>
                </div>
            <input onChange={e => readFiles(e.target.files)} className='opacity-0' type="file" id="file-input" multiple/>
        </label>
    </div>
  )
}
