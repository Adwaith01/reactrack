
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet"
import { Icon } from "leaflet"
import { useState,useEffect } from "react"
import 'leaflet/dist/leaflet.css'
export default function Track(){

    const [position,setPosition]=useState([])
useEffect(()=>{
    navigator.geolocation.getCurrentPosition(position=>{

        setPosition([position.coords.latitude,position.coords.latitude])
       })
},[])

const myIcon = new Icon({
    iconUrl: '../logo512.png',
    iconSize: [32,32]
   })


    return<>
    Track App
    {position.length>1?
    
    <MapContainer  center={position}   style={{height:"500px",width:"500px"}} zoom={13} scrollWheelZoom={true}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={myIcon} >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>:""

    }
    </>
}