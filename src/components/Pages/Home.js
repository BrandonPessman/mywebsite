import React from 'react'
import axios from 'axios'

export default class Home extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:8081/posts/').then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }

    render() {
        return (
            <div>
              <h1>Home</h1>
            </div>
          )
    }
}