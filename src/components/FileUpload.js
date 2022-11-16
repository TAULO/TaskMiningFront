import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from "@fortawesome/free-solid-svg-icons"
import FileItem from './FileItem';

function FileUpload() {
    const [filesArr, setFilesArr] = useState([])

    function readFiles(file) {
        const arr = []
        for(let i = 0; i < file.length; i ++) {
            const reader = new FileReader()
            reader.addEventListener("load", (e) => {
                const data = {
                    name: file[i].name,
                    size: (file[i].size / 1000).toFixed(1),
                    data: e.target.result
                }
                arr.push(data)
            })
            reader.readAsDataURL(file[i])
            reader.addEventListener("loadend", () => { setFilesArr(arr) })
        }
    }

    return (
        <label htmlFor="file-input">
            <div className="flex items-center justify-center absolute top-1/2 bottom-1/2 ml-[35%]">
                <div className="px-24 py-8 border-2 border-dashed border-orange-500 rounded-md opacity-60 hover:opacity-100 cursor-pointer">
                    <div className="flex flex-col items-center text-gray-500">
                        <FontAwesomeIcon className='h-16 text-orange-500' icon={faFileExport} />
                        <p className="mt-8">Click to upload or drag and drop</p>
                        <p>CSV files only</p>
                    </div>
                </div>
            </div>
            <input onChange={e => readFiles(e.target.files)} className='opacity-0' type="file" id="file-input" multiple/>
            <button onClick={() => setFilesArr([])}>upload</button>
            {   
                filesArr.length > 0 ? filesArr.map((file, index) => {
                    return (<FileItem key={index} name={file.name} size={file.size}></FileItem>)
                }) : (<div>No files added</div>)
            }
        </label>
    );
  }
  export default FileUpload;
