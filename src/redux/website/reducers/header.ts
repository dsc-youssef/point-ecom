// Dependences
import { createSlice } from "@reduxjs/toolkit";

// Default State
import { headerState } from "../defaults/header";

const headerSlicer = createSlice({
  name: "header",
  initialState: headerState,
  reducers: {
    toggleOpen: (state) => { state.isOpen = !state.isOpen }
  }
})

export default headerSlicer;