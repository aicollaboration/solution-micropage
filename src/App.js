
import './App.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import Account from './Account'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const signIn = async (email, password) => {
    // if (this.isAuthenticated) {
    //     throw new Error('User is already logged in.');
    // }
    try {
      // setLoading(true)

      const { user, error, session } = await supabase.auth.signIn({ email, password });
      setSession(session);
      if (error) throw error;
      // this.isAuthenticated = true;

      console.log(user, "user");

      // return user;

    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      // setLoading(false)
    }
  }

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth signIn={signIn} /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}