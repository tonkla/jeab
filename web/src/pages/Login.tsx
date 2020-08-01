import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Input } from 'antd'

import { useStoreActions, useStoreState } from '../store'

const Login = () => {
  const user = useStoreState((s) => s.userState.user)
  const logIn = useStoreActions((a) => a.userState.logIn)

  const history = useHistory()

  async function _logIn() {
    await logIn()
    if (user) history.push('/')
  }

  return (
    <div>
      <Input size="large" placeholder="Email" />
      <Button size="large" type="primary" onClick={_logIn}>
        Log in
      </Button>
    </div>
  )
}

export default Login
