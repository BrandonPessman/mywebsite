import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
    color: 'rgb(138, 43, 226)',
    borderColor: 'rgb(138, 43, 226)',
    background: 'rgba(138, 43, 226, .05)',
  },
}))

export default function NestedGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{ marginTop: '80px' }}>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Paper
            style={{
              width: '100%',
              padding: '10px',

              borderTop: '5px solid rgb(138, 43, 226)',

              borderRadius: '0',
            }}
          >
            <h3
              style={{
                color: 'rgb(138, 43, 226)',

                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              Started Summer 2019
            </h3>
            <h2 style={{ marginBottom: 0, marginTop: 0, textAlign: 'center' }}>
              Estheria: A Realm Divided
            </h2>
            <h5
              style={{
                marginTop: 0,
                marginBottom: '30px',
                color: 'rgba(255,255,255,.5)',
                fontWeight: '100',
                textAlign: 'center',
              }}
            >
              A Browser-Based MMORPG
            </h5>
            <div className={classes.chipContainer}>
              <Chip label="React" variant="outlined" className={classes.chip} />
              <Chip
                label="NodeJS"
                variant="outlined"
                className={classes.chip}
              />

              <Chip
                label="JavaScript"
                variant="outlined"
                className={classes.chip}
              />
              <Chip label="MySQL" variant="outlined" className={classes.chip} />
              <Chip
                label="Server Management"
                variant="outlined"
                className={classes.chip}
              />
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,.8)',
                fontWeight: '100',
              }}
            ></p>
            <center>
              <Button
                style={{ width: '49%' }}
                variant="contained"
                href="http://estheria.io"
                target="_blank"
              >
                Live Demo
              </Button>{' '}
              <Button
                style={{ width: '49%' }}
                variant="contained"
                href="http://github.com/brandonpessman/estheria"
                target="_blank"
              >
                Source Code (Frontend)
              </Button>
            </center>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            style={{
              width: '100%',
              padding: '10px',

              borderTop: '5px solid rgb(138, 43, 226)',

              borderRadius: '0',
            }}
          >
            <h3
              style={{
                color: 'rgb(138, 43, 226)',

                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              Started Spring 2019
            </h3>
            <h2 style={{ marginBottom: 0, marginTop: 0, textAlign: 'center' }}>
              Steam Inspector
            </h2>
            <h5
              style={{
                marginTop: 0,
                marginBottom: '30px',
                color: 'rgba(255,255,255,.5)',
                fontWeight: '100',
                textAlign: 'center',
              }}
            >
              A Web-Application utilizing Sentiment Analysis on Steam Games
            </h5>
            <div className={classes.chipContainer}>
              <Chip label="React" variant="outlined" className={classes.chip} />
              <Chip
                label="NodeJS"
                variant="outlined"
                className={classes.chip}
              />
              <Chip
                label="JavaScript"
                variant="outlined"
                className={classes.chip}
              />
              <Chip
                label="MongoDB"
                variant="outlined"
                className={classes.chip}
              />
              <Chip
                label="Server Management"
                variant="outlined"
                className={classes.chip}
              />
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,.8)',
                fontWeight: '100',
              }}
            ></p>
            <center>
              {' '}
              <Button disabled style={{ width: '49%' }} variant="contained">
                Live Demo
              </Button>{' '}
              <Button
                style={{ width: '49%' }}
                variant="contained"
                href="http://github.com/brandonpessman/steamInspector"
                target="_blank"
              >
                Source Code
              </Button>
            </center>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            style={{
              width: '100%',
              padding: '10px',

              borderTop: '5px solid rgb(138, 43, 226)',

              borderRadius: '0',
            }}
          >
            <h3
              style={{
                color: 'rgb(138, 43, 226)',

                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              Started Spring 2018
            </h3>
            <h2 style={{ marginBottom: 0, marginTop: 0, textAlign: 'center' }}>
              SeeScript
            </h2>
            <h5
              style={{
                marginTop: 0,
                marginBottom: '30px',
                color: 'rgba(255,255,255,.5)',
                fontWeight: '100',
                textAlign: 'center',
              }}
            >
              A Programming Language for SVG Animations
            </h5>
            <div className={classes.chipContainer}>
              <Chip
                label="JavaScript"
                variant="outlined"
                className={classes.chip}
              />
              <Chip label="Node" variant="outlined" className={classes.chip} />
              <Chip label="NPM" variant="outlined" className={classes.chip} />
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,.8)',
                fontWeight: '100',
              }}
            ></p>
            <center>
              {' '}
              <Button disabled style={{ width: '49%' }} variant="contained">
                Live Demo
              </Button>{' '}
              <Button
                style={{ width: '49%' }}
                variant="contained"
                href="http://github.com/brandonpessman/seescript"
                target="_blank"
              >
                Source Code
              </Button>
            </center>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            style={{
              width: '100%',
              padding: '10px',

              borderTop: '5px solid rgb(138, 43, 226)',

              borderRadius: '0',
            }}
          >
            <h3
              style={{
                color: 'rgb(138, 43, 226)',

                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              Started Summer 2019
            </h3>
            <h2 style={{ marginBottom: 0, marginTop: 0, textAlign: 'center' }}>
              Personal Website
            </h2>
            <h5
              style={{
                marginTop: 0,
                marginBottom: '30px',
                color: 'rgba(255,255,255,.5)',
                fontWeight: '100',
                textAlign: 'center',
              }}
            >
              A React Web-Application
            </h5>
            <div className={classes.chipContainer}>
              <Chip label="React" variant="outlined" className={classes.chip} />
              <Chip
                label="NodeJS"
                variant="outlined"
                className={classes.chip}
              />
              <Chip
                label="JavaScript"
                variant="outlined"
                className={classes.chip}
              />

              <Chip
                label="Server Management"
                variant="outlined"
                className={classes.chip}
              />
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,.8)',
                fontWeight: '100',
              }}
            ></p>
            <center>
              {' '}
              <Button disabled style={{ width: '49%' }} variant="contained">
                Live Demo
              </Button>{' '}
              <Button
                style={{ width: '49%' }}
                variant="contained"
                href="http://github.com/brandonpessman/personalWebsite"
                target="_blank"
              >
                Source Code
              </Button>
            </center>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            style={{
              width: '100%',
              padding: '10px',

              borderTop: '5px solid rgb(138, 43, 226)',

              borderRadius: '0',
            }}
          >
            <h3
              style={{
                color: 'rgb(138, 43, 226)',

                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              Started Spring 2019
            </h3>
            <h2 style={{ marginBottom: 0, marginTop: 0, textAlign: 'center' }}>
              DrogonBot
            </h2>
            <h5
              style={{
                marginTop: 0,
                marginBottom: '30px',
                color: 'rgba(255,255,255,.5)',
                fontWeight: '100',
                textAlign: 'center',
              }}
            >
              A Discord Bot Based on 'Game of Thrones'
            </h5>
            <div className={classes.chipContainer}>
              <Chip
                label="Discord.js"
                variant="outlined"
                className={classes.chip}
              />
              <Chip
                label="NodeJS"
                variant="outlined"
                className={classes.chip}
              />

              <Chip
                label="Server Management"
                variant="outlined"
                className={classes.chip}
              />
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,.8)',
                fontWeight: '100',
              }}
            ></p>
            <center>
              {' '}
              <Button disabled style={{ width: '49%' }} variant="contained">
                Live Demo
              </Button>{' '}
              <Button
                style={{ width: '49%' }}
                variant="contained"
                href="http://github.com/brandonpessman/drogonBot"
                target="_blank"
              >
                Source Code
              </Button>
            </center>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
