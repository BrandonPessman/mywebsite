import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Post () {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState([])
  const [postId, setPostId] = useState('')
  const [date, setDate] = useState('')

  let { id } = useParams()
  axios
    .get('http://localhost:8081/posts/' + id)
    .then(function (response) {
      // handle success
      let data = response.data[0]
      setAuthor(data.author)
      setTitle(data.title)
      let bodyHTML = new DOMParser().parseFromString(data.body, 'text/xml')

      console.log(bodyHTML)
      setBody(data.body)
      setPostId(data._id)
      setDate(data.date)
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .finally(function () {
      // always executed
    })

  return (
    <div>
      <h1>{title}</h1>
      <h3>
        {author} {date} {postId}
      </h3>
      <p>{body}</p>
    </div>
  )
}
