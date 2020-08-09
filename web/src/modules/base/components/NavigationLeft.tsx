import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export default function NavigationLeft() {
  const history = useHistory()
  const location = useLocation()

  const itemClass = 'h-20 bg-gray-300 px-6 py-4 cursor-pointer _center'

  return (
    <div className="h-screen w-32 bg-gray-400">
      <div
        className={`${itemClass}${location.pathname === '/pos' ? ' bg-gray-500' : ''}`}
        onClick={() => history.push('/pos')}
      >
        POS
      </div>
      <div
        className={`${itemClass}${location.pathname === '/inventory' ? ' bg-gray-500' : ''}`}
        onClick={() => history.push('/inventory')}
      >
        Inventory
      </div>
    </div>
  )
}
