import React, { useContext } from 'react'
import './Cella.css'
import { KattContext } from '../context/KattContext'

function Cella(props) {

  /* itt kell használni a contextr katt fvt*/
const {katt}=useContext(KattContext)

  function kattintas(){
   
    katt(props.index)
  }

  return (
    <div className='cella' onClick={()=>{kattintas()}}>
        {props.jel}
    </div>
  )
}

export default Cella