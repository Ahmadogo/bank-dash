import React from 'react'

const CardHeader = ({header}) => {
  return (
    <div>
      <h1 className="px-4 mb-3 text-[#343C6A] text-[1.25rem]  font-bold sm:px-6">
        {header}
      </h1>
    </div>
  )
}

export default CardHeader
