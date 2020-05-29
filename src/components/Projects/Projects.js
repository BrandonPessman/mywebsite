import React, { useEffect, useState } from 'react'

import styles from './Projects.module.sass'

import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import Octicon, { Star, RepoForked, Eye } from '@primer/octicons-react'

function Projects () {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    axios
      .get('https://api.github.com/users/brandonpessman/repos')
      .then(data => {
        console.log(data.data)
        setProjects(data.data)
      })
  }, [])

  return (
    <div>
      <Container>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '600',
            marginBottom: '25px'
          }}
        >
          Projects
        </h1>
        <Row>
          {projects != null
            ? projects.map(project => {
                return !project.fork ? (
                  <Col key={project.id} sm={4}>
                    <a
                      href={project.html_url}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div className={styles.projectContainer}>
                        <h1 className={styles.header1}>{project.name}</h1>
                        <h2 className={styles.header2}>
                          {project.description}
                        </h2>
                        {/* <Button className={styles.sourceButton} variant='primary'>
                        Source Code
                      </Button>{' '}
                      <Button className={styles.liveButton} variant='primary'>
                        Live Demo
                      </Button> */}
                        <div className={styles.languages}>
                          <span
                            style={{
                              margin: '0 5px',
                              fontSize: '13px',
                              fontWeight: '600',
                              color: '#FF6A00'
                            }}
                          >
                            {project.stargazers_count} <Octicon icon={Star} />
                          </span>
                          <span
                            style={{
                              margin: '0 5px',
                              fontSize: '13px',
                              fontWeight: '600'
                            }}
                          >
                            {project.forks_count} <Octicon icon={RepoForked} />
                          </span>
                          <span
                            style={{
                              margin: '0 5px',
                              fontSize: '13px',
                              fontWeight: '600'
                            }}
                          >
                            {project.watchers_count} <Octicon icon={Eye} />
                          </span>
                          <span
                            style={{
                              margin: '0 5px',
                              fontSize: '13px',
                              fontWeight: '600'
                            }}
                          >
                            <Badge
                              className={styles.languageBadge}
                              variant='primary'
                              style={{ color: 'white !important' }}
                            >
                              {project.language}
                            </Badge>
                          </span>
                        </div>
                      </div>
                    </a>
                  </Col>
                ) : (
                  ''
                )
              })
            : ''}
        </Row>
      </Container>
    </div>
  )
}

export default Projects
