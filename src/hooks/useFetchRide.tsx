import { getRide } from "../api/indexTest_API"
import { useEffect, useState } from "react"




const useFetchRide = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
 const handleFetch = async ()=>{
   
   try{
    const result = await getRide()
    setData(result)
   }
   catch(err)
   {
    setError(err)
   }
 }
  
  useEffect(() => {
    setLoading(false)
    handleFetch()
  }, [])

  function refetch(){
    setLoading(false)
    handleFetch()
    
  }
  
  return { data, loading, error, refetch }
}

export default useFetchRide