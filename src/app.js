import React from 'react'
import ReactDOM from 'react-dom'

const node_version = process.env.node_version

const App = () => (
  <div>
    Hello, i'm a a React 14 component running with node version 6.9.1
  </div>
)

ReactDOM.render(<App />, document.querySelector('#root'))