import { useState, useEffect } from 'react'
import Loading from '../../atoms/Loading/Loading';
import { supabase } from '../../supabaseClient';

export default function Solution() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);

  useEffect(() => {
    getSolution()
  }, [])

  async function getSolution() {
    const solutionId = 54;
    try {
      setLoading(true)
      let { data, error, status } = await supabase
        .from('solution')
        .select(`*`)
        .eq('id', solutionId)
        .single()

      if (error && status !== 406) {
        throw error
      }
      if (data) {
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
      {loading && <Loading />}
      {!loading &&
        <>
          <br />
          Name: {data.name}
          <br />
          {data.description ? "Desc :" + data.description : ""}
          <br />
          <br />
        </>}
    </div>


  )
}