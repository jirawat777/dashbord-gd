import React from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../layout/Layout';
const GuardedRoute = ({
  component: Component,
  auth,
  userRole,
  roles,
  ...rest
}) => {
  return auth ? (
    <>
      <Layout />
      <Component />
    </>
  ) : (
    <Navigate to='/' />
  )
}

export default GuardedRoute