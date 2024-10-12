import React from 'react'

const ViewDetailsBtn = ({content}) => {
  return (
    <div>
      <button className='rounded-3xl text-sm sm:ring-1 sm:ring-[#1814F3] py-1 px-5  text-[#1814F3]'>
        {content}
        </button>
    </div>
  )
}

export default ViewDetailsBtn
