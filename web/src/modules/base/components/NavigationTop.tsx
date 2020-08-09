import React from 'react'
import { Redirect } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../../../store'

export default function NavigationTop() {
  const user = useStoreState((s) => s.userState.user)
  const logOut = useStoreActions((a) => a.userState.logOut)

  async function _logOut() {
    await logOut()
  }

  return !user ? (
    <Redirect to="/login" />
  ) : (
    <div className="px-6 py-2 bg-blue-200 text-right">
      <div className="cursor-pointer" onClick={_logOut}>
        Log out
      </div>
    </div>
  )
}
