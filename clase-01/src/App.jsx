import { useState } from 'react'
import './App.css'
import Card from './components/card/card'
import travels from './data/travels'




function App() {

  const travelsList = travels.map(t => {
    return <Card img    = {t.img}
                 title  = {t.title} 
                 dates  = {t.dates}
                 info   = {t.info}/>
  })

  return (
    <>
      <div className='containerCard'>
        {travelsList}
      </div>
    </>
  );
}

const ParentComponent = (props) => {
  return ( 
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}



export default App
