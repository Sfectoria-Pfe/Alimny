import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function SessionDetails() {
    const [collapse, setCollapse]= useState(false)
    const {id} = useParams()
    console.log(id,"this is the sessionId")
  return (
    <div className='p-4'>
      <div className="d-flex justify-content-end gap-4">
        <button className="btn btn-outline-dark" onClick={()=>setCollapse(!collapse)}>Expand All</button>
        <button className="btn btn-dark" onClick={()=>setCollapse(!collapse)}>Collapse All</button>
        <button className="btn btn-success fs-5">+ Add</button>
        
      </div>
      <Accordion defaultActiveKey={['0']} className='mt-5' alwaysOpen >
      {[1,2,3].map((e,i)=>{
        return (
            <div className='mt-4'key={i}>
      <Accordion.Item eventKey={i+""} >
      <Accordion.Header>Week {e}</Accordion.Header>
      <Accordion.Body>
      <ListGroup >
      <ListGroup.Item action href="#link1">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" width={50} className='img-fluid rounded-5 mx-3'/>
       Content1.pdf
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" >
      <img src="https://www.easy-micro.org/images/lecons/html/formation-html.jpg" alt="" width={50} className='img-fluid rounded-5 mx-3'/>

        Content2.pdf
      </ListGroup.Item>
      <ListGroup.Item action >
      <img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" alt="" width={50} className='img-fluid rounded-5 mx-3'/>

        Content3.pdf
      </ListGroup.Item>
    </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
    </div>
        )
      })}
    </Accordion>
    </div>
  )
}

export default SessionDetails
