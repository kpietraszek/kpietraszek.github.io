import React from "react"
import { Global, css } from "@emotion/core"
import "./font.css"

const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: "Jost";
    margin: 0;
  }
`

const Layout = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
)

export default Layout
