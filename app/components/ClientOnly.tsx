"use client"

import React, { useEffect, useState } from 'react'

const ClientOnly = ({children}:{children:React.ReactNode}) => {
    const [monted,setMounted]=useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])
    if(!monted) return null

  return (
    <div>
        {children}
    </div>
  )
}

export default ClientOnly