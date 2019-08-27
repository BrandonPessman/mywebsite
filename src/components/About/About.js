import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import Grid from '@material-ui/core/Grid'

import Icon from '@mdi/react'
import { mdiGithubFace } from '@mdi/js'
import { mdiLinkedin } from '@mdi/js'
import { mdiTwitter } from '@mdi/js'
import { mdiGmail } from '@mdi/js'

import Me from '../../images/ProfileLarge.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}))

export default function About() {
  const classes = useStyles()

  return (
    <div style={{ marginTop: '80px', marginBottom: '80px' }}>
      <Paper className={classes.root} style={{ padding: '0px' }}>
        <div style={{ padding: '60px' }}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={4}
              style={{ paddingLeft: '50px', paddingRight: '50px' }}
            >
              <img width="100%" src={Me} alt="Brandon Pessman" />
            </Grid>
            <Grid
              item
              xs={8}
              style={{ paddingLeft: '50px', paddingRight: '50px' }}
            >
              <h1 style={{ margin: 0 }}>
                <span style={{ fontWeight: '100' }}> I'm </span>{' '}
                <span style={{ fontWeight: '800' }}>
                  <strong> Brandon Pessman </strong>
                </span>
              </h1>
              <h3
                style={{
                  fontWeight: '400',
                  margin: 0,
                  color: 'rgb(138, 43, 226)',
                }}
              >
                Full-Stack Web Developer
              </h3>
              <hr
                style={{
                  marginTop: '15px',
                  marginBottom: '15px',
                  borderWidth: '.3px',
                }}
              />
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <p style={{ margin: 0 }}>
                    <strong>School Year</strong>
                  </p>
                </Grid>
                <Grid item xs={9}>
                  <p
                    style={{
                      margin: 0,
                      color: 'rgba(255,255,255,.8)',
                      fontWeight: '100',
                    }}
                  >
                    3rd Year (Junior)
                  </p>
                </Grid>
                <Grid item xs={3}>
                  <p style={{ margin: 0 }}>
                    <strong>Location</strong>
                  </p>
                </Grid>
                <Grid item xs={9}>
                  <p
                    style={{
                      margin: 0,
                      color: 'rgba(255,255,255,.8)',
                      fontWeight: '100',
                    }}
                  >
                    Eau Claire, Wisconsin
                  </p>
                </Grid>
                <Grid item xs={3}>
                  <p style={{ margin: 0 }}>
                    <strong>Email</strong>
                  </p>
                </Grid>
                <Grid item xs={9}>
                  <p
                    style={{
                      margin: 0,
                      color: 'rgba(255,255,255,.8)',
                      fontWeight: '100',
                    }}
                  >
                    pessman.brandon@gmail.com
                  </p>
                </Grid>
                <Grid item xs={3}>
                  <p style={{ margin: 0 }}>
                    <strong>Discord Username</strong>
                  </p>
                </Grid>
                <Grid item xs={9}>
                  <p
                    style={{
                      margin: 0,
                      color: 'rgba(255,255,255,.8)',
                      fontWeight: '100',
                    }}
                  >
                    Brandon | Braymen#0001
                  </p>
                </Grid>
                <Grid item xs={3}>
                  <p style={{ margin: 0 }}>
                    <strong>Looking For</strong>
                  </p>
                </Grid>
                <Grid item xs={9}>
                  <p
                    style={{
                      margin: 0,
                      color: 'rgba(255,255,255,.8)',
                      fontWeight: '100',
                    }}
                  >
                    A Summer 2020 Internship Focusing on Full-Stack Web
                    Development
                  </p>
                </Grid>
                <Grid item xs={3}>
                  <p style={{ margin: 0 }}>
                    <strong>Expected Graduation</strong>
                  </p>
                </Grid>
                <Grid item xs={9}>
                  <p
                    style={{
                      margin: 0,
                      color: 'rgba(255,255,255,.8)',
                      fontWeight: '100',
                    }}
                  >
                    May 2021
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Paper className={classes.root} style={{ textAlign: 'center' }}>
          <a href="https://github.com/brandonpessman">
            <Icon
              path={mdiGithubFace}
              title="User Profile"
              size={1}
              horizontal
              vertical
              rotate={180}
              color="white"
              style={{ margin: '40px' }}
            />
          </a>
          <a href="https://www.linkedin.com/in/brandonpessman/">
            <Icon
              path={mdiLinkedin}
              title="User Profile"
              size={1}
              horizontal
              vertical
              rotate={180}
              color="white"
              style={{ margin: '40px' }}
            />
          </a>
          <a href="https://twitter.com/BrandonPessman">
            <Icon
              path={mdiTwitter}
              title="User Profile"
              size={1}
              horizontal
              vertical
              rotate={180}
              color="white"
              style={{ margin: '40px' }}
            />
          </a>
          <a href="mailto:pessman.brandon@gmail.com">
            <Icon
              path={mdiGmail}
              title="User Profile"
              size={1}
              horizontal
              vertical
              rotate={180}
              color="white"
              style={{ margin: '40px' }}
            />
          </a>
        </Paper>
      </Paper>
    </div>
  )
}
