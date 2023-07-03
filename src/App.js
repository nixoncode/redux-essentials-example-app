import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
  Navigate,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostsList } from './features/posts/PostList.js'
import { AddPostForm } from './features/posts/AddPostForm.js'
import { SinglePostPage } from './features/posts/SinglePostPage.js'
import { EditPostForm } from './features/posts/EditPostForm.js'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            }
          />
          <Route path="/posts/:postId" Component={SinglePostPage} />
          <Route path="/editPost/:postId" Component={EditPostForm} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
