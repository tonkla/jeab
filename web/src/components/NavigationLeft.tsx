import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NavigationLeft() {
  const history = useHistory()

  return (
    <div className="h-screen w-32 bg-gray-400">
      <div
        className="h-20 bg-gray-300 px-6 py-4 border-b border-gray-500 cursor-pointer _center"
        onClick={() => history.push('/pos')}
      >
        POS
      </div>
      <div
        className="h-20 bg-gray-300 px-6 py-4 border-b border-gray-500 cursor-pointer _center"
        onClick={() => history.push('/inventory')}
      >
        Inventory
      </div>
    </div>
  )
}
