import React from 'react'

const ViewDetailsBtn = ({content, onClick}) => {
  return (
    <div>
      <button className='rounded-3xl text-sm sm:ring-1 sm:ring-[#1814F3] py-1 px-5  text-[#1814F3]'
      onClick={onClick}
      >
        {content}
        </button>
    </div>
  )
}

export default ViewDetailsBtn
