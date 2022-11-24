import React from 'react'

export default function ButtonComponent({ text, onClick, onHover, onMouseLeave}) {
  return (
    <div className="bg-orange-500 hover:opacity-50 cursor-pointer text-white font-bold py-2 px-4 rounded w-32 text-center" onMouseLeave={onMouseLeave} onMouseOver={onHover} onClick={onClick}>{text}</div>
  )
}
