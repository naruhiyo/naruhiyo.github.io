import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"

import "normalize.css"

import { Hello } from "./components/Hello"

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Hello} />
    <Route path="hello" component={Hello} />
  </BrowserRouter>,
  document.getElementById("root")
)
