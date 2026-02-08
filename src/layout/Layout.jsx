import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from '../components/loader/Loader'

const Layout = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader />}
      <Outlet />
    </>
  )
}

export default Layout
