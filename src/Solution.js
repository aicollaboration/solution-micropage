import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

export default function Solution({ session }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);


  useEffect(() => {
    getSolution()
  }, [session])

  async function getSolution() {
    const solutionId = 54;
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('solution')
        .select(`*`)
        .eq('id', solutionId)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        console.log(data, "data", user);
        setData(data);
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className="form-widget">

      <br />
      Name: {data.name}

      <br />
      Desc :   {data.description}


      <br />
      <br />
    </div>
  )
}