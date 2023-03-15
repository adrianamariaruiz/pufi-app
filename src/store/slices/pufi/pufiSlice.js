
import { createSlice } from '@reduxjs/toolkit'

export const pufiSlice = createSlice({
    name: 'pufi',
    initialState: {
        userEmailSlice: ''
    },
    reducers: {
        emailUser: (state, action) => {
            state.userEmailSlice = action.payload
        }
    },
})

export const { emailUser } = pufiSlice.actions