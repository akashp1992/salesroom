import { createSlice } from '@reduxjs/toolkit';
import { createUsers } from '../actions/usersAction';
const usersReducer = createSlice({
    name: 'usersReducer',
    initialState: {
        usersInfo: {},
        loader: false,
        errors: {},
    },
    reducers: {

    },
    extraReducers: {
        [createUsers.pending]: (state, action) => {
            state.loader = true;
        },
        [createUsers.fulfilled]: (state, action) => {
            state.loader = false;
            state.usersInfo = action.payload;
        },
        [createUsers.rejected]: (state, action) => {
            state.loader = false;
            state.errors = action.payload;
        },
    },
});
export const { } = usersReducer.actions;
export default usersReducer.reducer;