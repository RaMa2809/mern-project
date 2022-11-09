import { createSlice , createAsyncThunk} from "@redux/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState : {
        firstName : '',
        lastName : '',
        accessToken : '',
        resetToken : '',
        email : '',
        email_verified: false,
    },
    reducers:{

    },
    extraReducers:{

    }
})

export const userSelector = state =>state.user;