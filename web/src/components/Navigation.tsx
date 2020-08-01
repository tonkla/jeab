import React from 'react'
import { useHistory } from 'react-router-dom'

import { useStoreActions, useStoreState } from '../store'

const Navigation = () => {
  const user = useStoreState((s) => s.userState.user)
  const logOut = useStoreActions((a) => a.userState.logOut)

  const history = useHistory()

  async function _logOut() {
    await logOut()
    if (!user) history.push('/login')
  }

  return (
    <div>
      <div onClick={_logOut}>Log Out</div>
    </div>
  )
}

export default Navigation
