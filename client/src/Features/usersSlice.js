import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
    const response = await fetch("/me");
    const data = await response.json();
    return data;
});

export const signup = createAsyncThunk("users/signup", async ({ username, password }) => {
    const response = await fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
});

export const login = createAsyncThunk("users/login", async ({ username, password }) => {
    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
});

export const logout = createAsyncThunk("users/logout", async () => {
    await fetch("/logout", {
        method: "DELETE",
    });
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        entities: null,
        errorMessages: null,
    },
    reducers: {
        reset(state) {
            state.errorMessages = null;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.entities = action.payload;
            })
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload.errors) state.errorMessages = action.payload.errors;
                else {
                    state.entities = action.payload;
                    state.errorMessages = null;
                }
            })
            .addCase(signup.fulfilled, (state, action) => {
                if (action.payload.errors) state.errorMessages = action.payload.errors;
                else {
                    state.errorMessages = null;
                    state.entities = action.payload;
                }
            })
            .addCase(logout.fulfilled, (state) => {
                state.errorMessages = null;
                state.entities = null;
            });
    },
});

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;