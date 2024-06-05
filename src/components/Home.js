import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import AddCards from './AddCards';



const DUMY_DATA=[
  {
    key:1,
    title:'First title',
    body:'First Body',
    date: new Date(),
  },
  {
    key:2,
    title:'Second title',
    body:'Second Body',
    date: new Date(),
  }
]

const Home = () => {
  const [data,setData]= useState(null);


  return (
    <>
      <img style={{height:'100vh', width:'100vw'}} src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="background" />
      <div className='container-fluid' style={{position:'absolute', top:'0', left:'0', height:'100vh', width:'100vw', backgroundColor:'rgba(0,0,0,0.3)', backdropFilter:'(3px)'}}>
          <div className='row w-100 h-100 d-flex justify-content-around align-items-center'>
              <div className='col-md-4'>
                  <h3 className="display-1 text-white fst-italic">Manage Yourself & Set Your Goals</h3>
                  <AddCards data={data} setData={setData}/>
              </div>
              <div className='col-md-6'>
                {
                  data ? <div style={{overflowY:'scroll',height:'60vh'}}><Cards data={data} setData={setData}/></div>:<h3 className="display-2 fw-bold text-white">Start Creating Goals</h3>
                }
              </div>
          </div>
      </div>
    </>
  )
}

export default Home
