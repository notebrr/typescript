import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Person(props: { name: string, age:number, email:string}) {
    return <>
<p>{props.name}</p>
<p>{props.age}</p>
<p>{props.email}</p>
</>;
}

export default Person
