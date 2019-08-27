import React from 'react'

export default function VerticalStepper() {
  return (
    <div>
      <h1
        style={{
          color: 'white',
          textAlign: 'center',
          letterSpacing: '2px',
          fontWeight: '500',
          marginBottom: '80px',
        }}
      >
        Work Experience
      </h1>
      <div className="timeline">
        <div className="container left">
          <div
            className="content"
            style={{
              borderTop: '5px solid rgb(138, 43, 226)',
              borderRadius: '0',
            }}
          >
            <h3
              style={{
                color: 'rgb(138, 43, 226)',
                marginTop: 0,
                marginBottom: 15,
                textAlign: 'center',
              }}
            >
              2019 - Present
            </h3>
            <h2 style={{ marginBottom: 0, marginTop: 0, textAlign: 'center' }}>
              Clearwater Labs
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
              SOFTWARE ENGINEER
            </h5>
            <p
              style={{
                color: 'rgba(255,255,255,.8)',
                fontWeight: '100',
              }}
            >
              Currently doing Full-Stack Development in order to build web
              applications for our contracts. Helped with the Frontend of an
              Energy Dashboard using React + D3.js. We also meet with clients on
              a weekly basis in order to gather feedback and show off our demo.
              Also had weekly sprint and retrospective meetings.
            </p>
          </div>
        </div>
        <div className="container right">
          <div
            className="content"
            style={{
              borderTop: '5px solid rgb(138, 43, 226)',
              borderRadius: '0',
            }}
          >
            <h3
              style={{
                color: 'rgb(138, 43, 226)',
                marginTop: 0,
                marginBottom: 15,
                textAlign: 'center',
              }}
            >
              2019
            </h3>
            <h2 style={{ marginBottom: 0, marginTop: 0, textAlign: 'center' }}>
              Travelers Insurance
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
              IT INTERN
            </h5>
            <p
              style={{
                color: 'rgba(255,255,255,.8)',
                fontWeight: '100',
              }}
            >
              Built a Web Application using React, NestJS, MySQL, and Java which
              automatically sent out emails when reports were run. Helped in
              automating tasks that were once manual using Java, XML, and MySQL.
              Created multiple React demos for intern projects. Built a demo for
              Social Media Fraud Detection where our team one first place in the
              showcase.
            </p>
          </div>
        </div>
        <div className="container left">
          <div
            className="content"
            style={{
              borderTop: '5px solid rgb(138, 43, 226)',
              borderRadius: '0',
            }}
          >
            <h3
              style={{
                color: 'rgb(138, 43, 226)',
                marginTop: 0,
                marginBottom: 15,
                textAlign: 'center',
              }}
            >
              2018-2019
            </h3>
            <h2 style={{ marginBottom: 0, marginTop: 0, textAlign: 'center' }}>
              Learning and Technology Services (UWEC)
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
              Help Desk Consultant
            </h5>
            <p
              style={{
                color: 'rgba(255,255,255,.8)',
                fontWeight: '100',
              }}
            >
              Provided one-on-one consulting support for students, faculty, and
              staff experiencing problems with PCs, Macintosh, email, internet
              browsers, and other campus-related software. Analyzed problems,
              determined complexity, and determined the best way to solve those
              problems.
            </p>
          </div>
        </div>
        <div className="container right">
          <div
            className="content"
            style={{
              borderTop: '5px solid rgb(138, 43, 226)',
              borderRadius: '0',
            }}
          >
            <h3
              style={{
                color: 'rgb(138, 43, 226)',
                marginTop: 0,
                marginBottom: 15,
                textAlign: 'center',
              }}
            >
              2015-2017
            </h3>
            <h2 style={{ marginBottom: 0, marginTop: 0, textAlign: 'center' }}>
              Pick N' Save
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
              Customer Service Representative / Cashier
            </h5>
            <p
              style={{
                color: 'rgba(255,255,255,.8)',
                fontWeight: '100',
              }}
            >
              Oversaw frontend operations and determined work priorities and
              task lists. Trained, monitored, and coached associates on frontend
              policies and procedures. Handled cash and other tenders.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
