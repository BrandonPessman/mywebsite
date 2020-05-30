import React from 'react'

import Header from 'components/Header/Header'
import Projects from 'components/Projects/Projects'
import Songs from 'components/Songs/Songs'
import Contact from 'components/Contact/Contact'
// import Footer from 'components/Footer/Footer'

function Landing () {
  return (
    <div>
      <Header />
      <Projects />
      <Songs />
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}

export default Landing
