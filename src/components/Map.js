import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import React from 'react'

export default function Map({data}) {

  const mapStyle = {
    height: '50vh',
    with: '100%'
  }

  const defaultCenter = {
    lat: data.lat, lng: data.lng
  }

  return (
    <LoadScript googleMapsApiKey='affraefffargrgr'>
      <GoogleMap
        mapContainerStyle={mapStyle}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}
