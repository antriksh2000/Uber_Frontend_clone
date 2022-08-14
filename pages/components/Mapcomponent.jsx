import {React,useEffect} from 'react'
import mapboxgl from '!mapbox-gl'
import tw from "tailwind-styled-components"

mapboxgl.accessToken = 'pk.eyJ1IjoiYW50cmlrc2gyMDAwIiwiYSI6ImNsNmIwbWVlMTA2eWozbW9hNGVsbzMzYTEifQ.NkJgZAbSmB_MTRhpUS4Unw';

function Mapcomponent() {

useEffect(() => {
 const map = new mapboxgl.Map({
container: "map",
style: 'mapbox://styles/mapbox/streets-v11',
center: [76.772120, 30.752990],
zoom: 10
});
});
  
  return (
    <Wrapper id='map'></Wrapper>

  )
}
const Wrapper= tw.div`
flex-1
` 


export default Mapcomponent