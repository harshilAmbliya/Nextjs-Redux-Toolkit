import { fetchUsers } from '@/store/actions/usersAction';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    users: null
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    },
})

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer