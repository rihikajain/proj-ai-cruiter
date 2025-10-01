import React from 'react'
import AppHeader from './_components/AppHeader'

const DashboardLayout = ({children}:any) => {
  return (
<>
    <AppHeader/>
    <div>{children}</div>
</>

  )
}

export default DashboardLayout