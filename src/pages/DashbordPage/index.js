import React, { useEffect } from 'react'
import Header from '../../components/bases/header'
import { useSelector, useDispatch } from 'react-redux';

function DashbordPage() {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.category.category)
  useEffect(() => {
    dispatch.category.fetchCategory('category')
  }, [dispatch])

  return (
    <div className='p-5 w-screen'>
      <Header title='Dashbord' />
      <div className='mt-10 flex'>
        {category.map((c, i) => c.img !== undefined && <img width={90} alt='img' src={c.img} />)}
      </div>
    </div>
  )
}

export default DashbordPage