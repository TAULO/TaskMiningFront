import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from "@fortawesome/free-solid-svg-icons"
import FileItem from './FileItem';
import ButtonComponent from './ButtonComponent';
import { Link, useNavigate } from "react-router-dom";

function FileUpload() {
    const [filesArr, setFilesArr] = useState([])
    const navigate = useNavigate()

    function readFiles(file) {
        const arr = []
        for(let i = 0; i < file.length; i ++) {
            const reader = new FileReader()
            reader.addEventListener("load", (e) => {
                const index = i + 1
                const data = {
                    id: index,
                    name: file[i].name.trim(),
                    size: (file[i].size / 1000).toFixed(1),
                    data: e.target.result
                }
                arr.push(data)
            })
            reader.readAsDataURL(file[i])
            reader.addEventListener("loadend", () => { setFilesArr(arr) })
        }
    }

    function previewFile(file) {
        const name = file.textContent.trim()
        const data = (filesArr.filter(files => files.name === name).map(items => items.data))[0].split(",")[1]

        const decode = atob(data)
        console.log(decode)
        const w = window.open("")
        w.document.write(`<p>${decode}</p>`)
    }

    function deleteFile(file) {
        const id = file.nextSibling.innerHTML
        if (id !== null) {
            setFilesArr(filesArr.filter(files => files.id.toString() !== id))
        }
    }

    function analyseFiles() {
        // <Link to="/analyse"></Link>
    }

    return (
        <div className='ml-20'>
            <div className='place-self-stretch pt-8 pb-8'>
                <label className='block text-sm font-medium text-gray-500 mb-2' for="task_name">Name of the Work Task:</label>
                <input className='border border-gray-900 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5' type={"text"} id="task_name"></input>
            </div>
            <div className='grid grid-cols-2'>
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
                <div className='col-span-1 row-span-1 order-1'>
                    {   
                        filesArr.length > 0 ? filesArr.map((file, index) => {
                            const filesCap = 6
                            const totalLength = filesArr.length - filesCap
                            if (index <= filesCap) {
                                return (<FileItem key={index} id={file.id} name={file.name} size={file.size} previewFile={e => previewFile(e.target)} deleteFile={e => deleteFile(e.target)}></FileItem>)
                            } else if (index >= filesCap && index <= filesCap + 1) {
                                return <div>+{totalLength}...</div>
                            } else {
                                return null
                            }
                        }) : (<div>No files added</div>)
                    }
                </div>
                    <div className='pt-8 flex space-x-16 order-2 col-span-2 row-span-2'>
                        <ButtonComponent text="Remove All" onClick={() => setFilesArr([])}></ButtonComponent>
                        <ButtonComponent text="Analyse" onClick={() => navigate("/analyse")}></ButtonComponent>
                    </div>
                </div>
            </div>
    );
  }
  export default FileUpload;
