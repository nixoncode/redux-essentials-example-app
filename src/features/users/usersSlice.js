import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client } from '../../api/client.js'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get(
    'https://jsonplaceholder.typicode.com/users'
  )
  return response.data
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export default userSlice.reducer

export const selectAllUsers = (state) => state.users
export const selectUserById = (state, userId) => {
  return state.users.find((user) => {
    return user.id === Number(userId)
  })
}
