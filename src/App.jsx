import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export default function App(){
  const [dataLatLong, setDataLatLong] = useState([])

  function getLatAndLongFromHeader(data){
    setDataLatLong(data)
  }

  return(
    <div className="h-screen w-full ">
      <Header sendDataToParent={getLatAndLongFromHeader} />
      <Main valuesLat={dataLatLong.lat} valuesLong={dataLatLong.lon}/>
    </div>
  )
}