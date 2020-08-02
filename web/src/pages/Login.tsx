import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Input } from 'antd'

import { useStoreActions, useStoreState } from '../store'

export default function Login() {
  const user = useStoreState((s) => s.userState.user)
  const logIn = useStoreActions((a) => a.userState.logIn)

  async function _logIn() {
    await logIn()
  }

  return user ? (
    <Redirect to="/" />
  ) : (
    <div className="h-screen bg-gray-300 _center-x">
      <div className="h-48 w-64 mt-40 px-40 bg-white flex-col rounded-lg _center">
        <Input size="large" placeholder="Email" className="w-56" />
        <Button size="large" type="primary" className="mt-4 w-56" onClick={_logIn}>
          Log in
        </Button>
      </div>
    </div>
  )
}
