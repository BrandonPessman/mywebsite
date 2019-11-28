import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
const ReactMarkdown = require('react-markdown')

export default function Post () {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState([])
  const [postId, setPostId] = useState('')
  const [date, setDate] = useState('')

  let { id } = useParams()

  useEffect(
    () => {
      axios
        .get('http://localhost:8081/posts/' + id)
        .then(function (response) {
          // handle success
          let data = response.data[0]
          setAuthor(data.author)
          setTitle(data.title)
          setBody(data.body)
          setPostId(data._id)
          var ts = new Date(data.date)
          setDate(ts.toDateString())
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .finally(function () {
          // always executed
        })
    },
    [id]
  )

  return (
    <div>
      <Jumbotron>
        <center>
          <h1>{title.toUpperCase()}</h1>
          <h5>{date}</h5>
        </center>
      </Jumbotron>
      <Container>
      <ReactMarkdown source={body} />
      </Container>
    </div>
  )
}
