import React, { useState, useEffect } from 'react'
import { Route, Switch, Link, useHistory } from 'react-router-dom'
import Brand from './brand'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import MetaData from './meta-data'

const RouteHead = ({
  title,
  description,
  src
}) => (
  <>
    <MetaData
      title={title}
      description={description}
      image={`${src}-meta.jpg`}
    />
    <img src={`/${src}-title.jpg`} alt={description} />
  </>
)

export default () => {
  const [active, setActive] = useState(false)

  const history = useHistory()
  useEffect(() => {
    history.listen((location, action) => {
      setActive(false)
    })
  })

  return (
    <section className='hero is-black is-oswald'>
      <div className='image is-3by1'>
        <div className='hero-image-shadow' />
        <Switch>
          <Route exact path='/about'>
            <RouteHead
              title='Momentum Images - About'
              description='Learn a bit about Momentum Images'
              src='about'
            />
          </Route>
          <Route exact path='/tcs'>
            <RouteHead
              title="Momentum Images - T&C's"
              description='Learn a bit about Momentum Images'
              src='tcs'
            />
          </Route>
          <Route exact path='/contact'>
            <RouteHead
              title='Momentum Images - Contact'
              description='Learn a bit about Momentum Images'
              src='contact'
            />
          </Route>
          <Route exact path='/portfolio/dance'>
            <RouteHead
              title='Momentum Images - Dance Portfolio'
              description='Learn a bit about Momentum Images'
              src='portfolio_dance'
            />
          </Route>
          <Route exact path='/portfolio/family'>
            <RouteHead
              title='Momentum Images - Family Portfolio'
              description='Learn a bit about Momentum Images'
              src='portfolio_family'
            />
          </Route>
          <Route exact path='/portfolio/portrait'>
            <RouteHead
              title='Momentum Images - Portrait Portfolio'
              description='Learn a bit about Momentum Images'
              src='portfolio_portrait'
            />
          </Route>
          <Route exact path='/'>
            <RouteHead
              title='Momentum Images'
              description='Learn a bit about Momentum Images'
              src='home'
            />
          </Route>
          <Route exact path='/thanks'>
            <RouteHead
              title='Momentum Images - Thanks'
              description='Learn a bit about Momentum Images'
              src='home'
            />
          </Route>
          <Route>
            <RouteHead
              title='404 Not Found'
              description='Learn a bit about Momentum Images'
              src='not_found'
            />
          </Route>
        </Switch>
      </div>
      <div className='hero-head'>
        <nav className='navbar is-fixed-top'>
          <div className='container'>
            <div className='navbar-brand'>
              <Link to='/' className='navbar-item'>
                <Brand />
              </Link>
              <span className='navbar-burger burger' onClick={() => { setActive(!active) }}>
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className={`navbar-menu is-${active ? 'active' : 'inactive'}`}>
              <div className='navbar-end'>
                <a className='navbar-item is-inline-block' href='https://www.facebook.com/momentum.images.uk' target='_blank' rel='noopener noreferrer'>
                  <span className='icon'>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </a>
                <a className='navbar-item is-inline-block' href='https://www.instagram.com/momentum.images' target='_blank' rel='noopener noreferrer'>
                  <span className='icon'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </a>
                <Link to='/' className='navbar-item' onClick={() => { setActive(false) }}>
                  Home
                </Link>
                <div className='navbar-item has-dropdown is-hoverable'>
                  <Link className='navbar-link' to='/portfolio'>
                    Portfolio
                  </Link>
                  <div className='navbar-dropdown'>
                    <Link className='navbar-item' to='/portfolio/dance'>
                      Dance
                    </Link>
                    <Link className='navbar-item' to='/portfolio/family'>
                      Family
                    </Link>
                    <Link className='navbar-item' to='/portfolio/portrait'>
                      Portait
                    </Link>
                  </div>
                </div>
                <Link to='/about' className='navbar-item' onClick={() => { setActive(false) }}>
                  About
                </Link>
                <Link to='/tcs' className='navbar-item' onClick={() => { setActive(false) }}>
                  T&Cs
                </Link>
                <Link to='/contact' className='navbar-item' onClick={() => { setActive(false) }}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
