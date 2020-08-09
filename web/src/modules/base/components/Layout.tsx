import React from 'react'
import NavigationLeft from './NavigationLeft'
import NavigationTop from './NavigationTop'

export default function Layout({ children }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="h-screen flex">
      <NavigationLeft />
      <div className="h-screen w-full">
        <NavigationTop />
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  )
}
