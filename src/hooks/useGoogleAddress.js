import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGoogleAddress(address) {

  const [map, setMap] = useState({})
  const API_KEY = 'efaeagegageag5118va18evea8v'
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`

  useEffect(async () => {
    const response = await axios(API)
    setMap(response.data.results[0].geometry.location)
  }, [])

  return map
}
