import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Auth({signIn}) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (email,password) => {
    // try {
    //   setLoading(true)
    //   const { error } = await supabase.auth.signIn({ email })
    //   if (error) throw error
    //   alert('Check your email for the login link!')
    // } catch (error) {
    //   alert(error.error_description || error.message)
    // } finally {
    //   setLoading(false)
    // }
    console.log("test");
    signIn(email,password)
  }

  

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Login</h1>
        <p className="description">Sign </p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="inputField"
            type="password"
            placeholder="Your email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email,password)
            }}
            className={'button block'}
            disabled={loading}
          >
            {loading ? <span>Checking</span> : <span>Login</span>}
          </button>
        </div>
      </div>
    </div>
  )
}