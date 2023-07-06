'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  return (
    <div className='h-screen'>
      <div className='pb-5'>
        <h1>Palkkalaskin</h1>
      </div>
      <div>
        <Palkkalaskin />
      </div>
    </div>
  )
}

function Palkkalaskin(){
  const [tuntipalkka, setTuntipalkka] = useState(0);
  const [tyotunnit, setTyotunnit] = useState(0);
  const [palkka, setPalkka] = useState(0);

  function syotaTuntipalkka(e: any) {
    setTuntipalkka(Number(e.target.value));
    console.log(tuntipalkka);
  }

  function syotaTunnit(e: any){
    setTyotunnit(Number(e.target.value));
    console.log(tyotunnit);
  }

  function laskePalkka(){
    setPalkka(tuntipalkka * tyotunnit);
  }

  return (
    <div>
      <div className='pb-4'>
        <label>Tuntipalkka: </label>
        <input type="number" onChange={syotaTuntipalkka}></input>
      </div>
      <div className='pb-4'>
        <label>Kuukauden työtunnit: </label>
        <input type="number" onChange={syotaTunnit}></input>
      </div>
      <div className='pb-4'>
        <button className='bg-slate-500' onClick={laskePalkka}>Paina</button>
        <label> Veroton palkka: </label>
        <input readOnly value={palkka}></input>
      </div>
      <div className='pb-4'>
        <label></label>
        <input></input>
      </div>
    </div>
  )
}