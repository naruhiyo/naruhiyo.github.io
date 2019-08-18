import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Top from './Top'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Top} />
        </BrowserRouter>
      </div>
    )
  }
}
