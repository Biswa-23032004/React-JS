import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App | Maggie</h1>
        </div>
    )
}

// const reactElement ={
//     type: 'a',
//     props: {
//         herf: 'https://gmail.com',
//         target: '_blank'
//     },
//     children: 'click me to visit Gmail'
// }

const anotherElement = (
    <a href="https://gmail.com" target='_blank'>Gmail</a>
)


const anotherUser = "Maggie in 2 minute"

const reactElement = React.createElement(
    'a',
    {href: 'https://gmail.com',target:'_blank' },
    'click me to visit Gmail',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
