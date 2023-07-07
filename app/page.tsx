'use client'
import Image from 'next/image'
import { Container } from 'postcss';
import { useState } from 'react'

export default function Home() {
  return (
    <div className='h-screen bg-black'>
      <div className='flex justify-center pt-10'>
        <Palkkalaskin />
      </div>
    </div>
  )
}

function Palkkalaskin(){
  const [tuntipalkka, setTuntipalkka] = useState(0);
  const [tyotunnit, setTyotunnit] = useState(0);
  const [palkka, setPalkka] = useState(0);
  const [veroprosentti, setVeroprosentti] = useState(0);
  const [nettopalkka, setNettopalkka] = useState(0);

  function syotaVeroprosentti(e: any) {
    setVeroprosentti(Number(e.target.value));
  }

  function syotaTuntipalkka(e: any) {
    setTuntipalkka(Number(e.target.value));
  }

  function syotaTunnit(e: any){
    setTyotunnit(Number(e.target.value));
  }

  function laskePalkka(){
    setPalkka(tuntipalkka * tyotunnit);
    const veroOsuus = (veroprosentti / 100) * palkka;
    setNettopalkka(palkka - veroOsuus);
  }

  return (
    <div>
      <div className='bg-slate-900 text-white p-5 font-mono'>
        <h1 className='flex justify-center'>Palkkalaskin</h1>
        <div className='pb-4 pt-5'>
          <label>Syötä veroprosentti: </label>
          <input type="number" onChange={syotaVeroprosentti} className='bg-slate-700'></input>
        </div>
        <div className='pb-4'>
          <label>Tuntipalkka: </label>
          <input type="number" onChange={syotaTuntipalkka} className='bg-slate-700' ></input>
        </div>
        <div className='pb-4'>
          <label>Kuukauden työtunnit: </label>
          <input type="number" onChange={syotaTunnit} className='bg-slate-700'></input>
        </div>
        <div className='pb-4'>
          <label> Veroton palkka: </label>
          <input readOnly value={palkka} className='bg-slate-700'></input>
        </div>
        <div className='pb-4'>
          <label>Verollinen palkka: </label>
          <input readOnly value={nettopalkka} className='bg-slate-700'></input>
        </div>
        <div>
          <p>Paina kerran saadaksesi verottoman palkan ja <br></br>sen jälkeen toisen kerran saadaksesi verollisen</p>
          <div className='pt-3 flex justify-center'>
            <button className='bg-slate-500 p-1' onClick={laskePalkka}>Paina</button>
          </div>
        </div>
      </div>
    </div>
  )
}