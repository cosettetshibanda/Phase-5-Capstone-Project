import { createAsyncThunk } from "@reduxjs/toolkit"


export const newTopic = createAsyncThunk("topics/newTopic", async (payload) => {
    return fetch(`/topics`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    }).then((r) => r.json())
});

const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        entities: [],
        errorMessages: null,
    },
    extraReducers(builder){
        builder
            .addCase(newTopic.fulfilled, (state, action) => {
                if(action.payload.errors) state.errorMessages = action.payload.errors
            })
    }
})

export default topicsSlice.reducer