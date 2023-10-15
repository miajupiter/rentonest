import React, {useState, useEffect} from 'react'

export function Hero2(props) {
  const [percent,setPercent]=useState(46)

  return (
    <>
      <div classNameass='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
        <div
          className='bg-blue-600 h-2.5 rounded-full'
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </>
  )
}


export default Hero2
