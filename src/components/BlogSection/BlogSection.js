import React from "react"
import styled from "@emotion/styled"
import Post from "../Post"
import posts from "../../posts"

const Wrapper = styled.section`
  padding: 144px 72px;

  & > *:not(:first-child) {
    margin-top: 36px;
  }
`

const Title = styled.h5`
  font-size: 36px;
  color: #fa73ad;
`

const BlogSection = () => (
  <Wrapper>
    <Title>Blog</Title>
    {posts.map(post => (
      <Post>{post()}</Post>
    ))}
  </Wrapper>
)

export default BlogSection
