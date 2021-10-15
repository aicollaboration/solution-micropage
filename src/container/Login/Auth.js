import { useState } from 'react'
import { supabase } from '../../supabaseClient'
import { setLocalStorage } from "../../util/storage";


export default function Auth({ setSession,setLoading }) {
  const [loadinghere, setLoadinghere] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      setLoadinghere(true);
      const { user, error, session } = await supabase.auth.signIn({ email, password });
      // setLocalStorage(user, user);
      // setSession(session);
      // if (user) {
      //   signIn(session, user)
      // }

      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    setLoadinghere(false);

    }
    console.log("test");
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
              handleLogin(email, password)
            }}
            className={'button block'}
            disabled={loadinghere}
          >
            {loadinghere ? <span>Checking</span> : <span>Login</span>}
          </button>
        </div>
      </div>
    </div>
  )
}