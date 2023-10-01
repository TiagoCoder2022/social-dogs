import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../UserContext'
import styels from './Login.module.css'

const Login = () => {
  const { login } = useContext(UserContext)

  if(login === true ) return <Navigate to="/conta" />

  return (
    <section className={styels.login}>
      <div className={styels.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="criar" element={<LoginCreate />}/>
          <Route path="criar" element={<LoginPasswordLost />}/>
          <Route path="criar" element={<LoginPasswordReset/>}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login