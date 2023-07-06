import india from '@svg-maps/india'
import React, { useState } from 'react'
import { SVGMap } from 'react-svg-map'

export default function IndiaMap({setStateCode,setStateName,setStateMap}) {
    function onLocationClick(event){
        setStateCode(event.target.id);
        setStateName(event.target.getAttribute("name"))
        const path=event.target.getAttribute("d").split(' ');
        path[1]='0,0';
        setStateMap(path.join(" "))
    }
  return (
    <div>
        <SVGMap map={india} onLocationClick={onLocationClick}/>
    </div>
  )
}
