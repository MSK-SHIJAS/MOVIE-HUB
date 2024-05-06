
import Card from 'react-bootstrap/Card';

import React from 'react'

export default function Cards2(props) {
  return (
    <>
    <Card className={` rounded-0 ${props.cards}`}>
        <Card.Body className={`p-4 ${props.body}`}>
          <Card.Title className={props.headings}>{props.title} </Card.Title>
          <Card.Img src={props.notesicon} className={props.icons}/>
          <Card.Subtitle className={props.subheadings}>{props.subtitle} </Card.Subtitle>
          <Card.Text className={props.contents}>{props.text}</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex align-items-center">
            <img className={`w-25 rounded-circle me-4 ${props.imgclass}`} src={props.img} />
            <div className="text-sm">
                <h6 className="text-zinc-900 leading-none text-secondary">Author</h6>
                <h6 className="text-zinc-600">{props.name}</h6>
            </div>
      </Card.Body>
      </Card>
    </>
  )
}