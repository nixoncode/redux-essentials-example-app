import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { PostAuthor } from './PostAuthor.js'
import { selectPostById } from './postSlice.js'

export const SinglePostPage = () => {
  const match = useParams()
  const { postId } = match
  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button muted-button">
          Edit Post
        </Link>
        <hr />
        <PostAuthor userId={post.user} />
      </article>
    </section>
  )
}
