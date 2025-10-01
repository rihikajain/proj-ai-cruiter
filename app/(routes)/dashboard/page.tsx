import { useUser } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {
  const {user}= useUser()
  return (
    <div className='py-20 px-10 md:px-28 lg:px-44 xl:px-56'>
      <h2 className='text-lg text-gray-500'> My Dashboard</h2>
      <h2 className='text-3xl'>Welcome,{user?.fullName} </h2>
    </div>
  )
}

export default Dashboard