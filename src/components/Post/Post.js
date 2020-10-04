import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.section`
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  color: #403b10;

  h2 {
    font-size: 24px;
    padding-bottom: 8px;
    line-height: 1.4;
  }

  h4 {
    font-size: 18px;
    padding-top: 16px;
    line-height: 1.4;
  }

  p {
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 14px;
    line-height: 1.8;
  }

  a {
    &,
    &:visited,
    &:active {
      color: #fa73ad;
      text-decoration: underline;
    }
  }

  table {
    border-collapse: collapse;
    margin-top: 16px;
    margin-bottom: 16px;
    table-layout: fixed;
    width: 100%;
  }

  td,
  th {
    padding: 8px;
    text-align: center;

    &.lowest {
      background-color: #f7b5b5;
    }

    &.highest {
      background-color: #b3eab5;
    }
  }

  th {
    background-color: #f5f5f5;
  }
`

const Post = ({ children }) => <Wrapper>{children}</Wrapper>

export default Post
