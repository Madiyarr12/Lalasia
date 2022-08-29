import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../shared_components/utilities/AuthProvider'
import { useNavigate } from 'react-router-dom'
import './login.css'
function LoginPage() {
  let navigate = useNavigate()
  const { currentUser, setCurrentUser, setAdmin } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  useEffect(() => {
    if (currentUser != null) {
      navigate('/')
    }
  }, [])
  function onSign() {
    if (email === 'Madiyor' && password === '123') {
      setAdmin(true)
    } else {
      setAdmin(false)
    }
    const user = {
      email: email,
      password: password,
    }
    setCurrentUser(user)
    localStorage.setItem('moddy', JSON.stringify(user))
    navigate('/')
  }
  return (
    <div id="login">
      <div className="login-conatiner">
        <div className="login-form">
          <div className="company-logo">
            <img
              src="https://i.postimg.cc/7ZjYrQvk/image-2022-08-27-17-40-44-removebg-preview-1.png"
              alt="logo"
            />
            <h1 className="header-two tt-color-1">Lalasia</h1>
          </div>
          <div className="form">
            <div>
              <label className="pg-3" htmlFor="email">
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>
            <div>
              <label className="pg-3" htmlFor="password">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <div className="save">
              <div className="saveBox">
                <input type="checkbox" name="save" id="saveBox" />
                <div htmlFor="saveBox">Remember me</div>
              </div>

              <div>
                <span className="header-six"> Forgot your password?</span>
              </div>
            </div>
            <button onClick={onSign} className="header-five signInBtn">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
