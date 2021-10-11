
import { useState, useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';

import { supabase } from './supabaseClient'
import Auth from './Auth'
import Account from './Account'
import Home from './container/Home/Home'
import Dashboard from './container/Home/Dashboard'
import Header from './components/Header/Header';
import Page404 from './container/Other/Page404';
import { ProtectedRoute } from './util/ProtectedRoute';
import { setLocalStorage } from "./util/storage";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './App.css'


export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const { user, error, session } = await supabase.auth.signIn({ email, password });
      setSession(session);
      setLocalStorage("user", user);
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }


  if (!session) {
  return (
    <div >
      {!session ? <Auth signIn={signIn} /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}


  return (
    <div className="App">
     
    { !loading &&   <Header session={session}/>}
    <BrowserRouter>
    <CssBaseline />
      <Container fixed>

      <main>
          <Switch>
            <ProtectedRoute as={Dashboard} session={session} role={1} path="/dashboard" />
            <ProtectedRoute as={Home} session={session} role={1} path="/home" />

            {/* 
            <ProtectedRoute user={user} as={MemberLibraries} role={1} path="/memberLibraries" />
            <ProtectedRoute as={ResourceMgmt} role={1} path="/ResourceMgmt" /> 
            */}
            
            <ProtectedRoute as={Account} session={session} role={1} path="/" />
            <ProtectedRoute as={Page404} role={1} path="/**" />
          </Switch>
      </main>
      </Container>
    
    </BrowserRouter>

    

  </div>
  )
}