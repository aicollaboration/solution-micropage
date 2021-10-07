import { useState, useEffect } from 'react'
import Solution from './Solution'
import { supabase } from './supabaseClient'

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)


  return (
    <div className="form-widget">

      <Solution session={session}/>

   

      <div className="form-padding">
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}