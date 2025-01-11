import React, { useState } from 'react'
import { useRef } from 'react'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault()
    
  }

  return (
    <div >
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        {/* <img className='h-full w-full object-cover' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1392,h_488/v1559821863/assets/2019/06/Uber_Eats_Logo_Lockup_Black.png" alt="" /> */}
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input 
              onClick={()=>setPanelOpen(true)}
              className='bg-[#ddd] px-12 py-2 text-lg rounded-lg w-full mt-5' 
              type="text" 
              value={pickup}
              onChange={(e)=>setPickup(e.target.value)}
              placeholder='Enter pick-up location' />
            <input
              onClick={()=>setPanelOpen(true)} 
              className='bg-[#ddd] px-12 py-2 text-lg rounded-lg w-full mt-3' 
              type="text" 
              value={dropoff}
              onChange={(e)=>setDropoff(e.target.value)}
              placeholder='Enter dropoff location' />
          </form>
        </div>
        <div ref={panelRef} className='bg-red-500 h-0'>

        </div>
      </div>
    </div>
  )
}

export default Home