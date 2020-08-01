import React from 'react'

import Navigation from '../components/Navigation'

const Layout = ({ children }: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  )
}

export default Layout
