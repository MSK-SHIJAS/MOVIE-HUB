import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { faShare, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons';



function Cards(props) {
  return (
    <>

      <Card className={` border-0 shadow-lg rounded-0 ${props.cards}`}>
        <Card.Img variant="top" src={props.img} className={props.imgclass}/>
        <Card.Body className={`p-4 ${props.body}`}>
          <Card.Title className={props.headings}>{props.title} </Card.Title>
          <Card.Img src={props.notesicon} className={props.icons}/>
          <Card.Subtitle className={props.subheadings}>{props.subtitle} </Card.Subtitle>
          <Card.Text className={props.contents}>{props.text}</Card.Text>
        </Card.Body>
        {props.index !== 0 && ( // Conditionally render footer except for the first card
          <Card.Footer className={`p-3 ${props.footer}`}>
            <small className="text-muted">
              <span  className='p-3'><FontAwesomeIcon icon={faShare}/>{props.shares} </span>
              <span  className='p-3'><FontAwesomeIcon icon={faEye}/>{props.views}</span>
              <span  className='p-3'><FontAwesomeIcon icon={faEnvelope}/>{props.messages}</span> 
            </small>
          </Card.Footer>
        )}
      </Card>
        
    </>
    
  )
}

export default Cards