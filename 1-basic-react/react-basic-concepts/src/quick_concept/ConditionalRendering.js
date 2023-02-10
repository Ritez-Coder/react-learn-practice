import React from 'react'

export default function ConditionalRendering() {
     let isTrue = false;
 return <div>
     <h1>This is Conditional Rendering</h1>
     {isTrue ? < first /> : < Second />}
 </div>
}

function first () {
     return <h4>First Component</h4>
}

function Second() {
     return <h4>Second Component</h4>
}