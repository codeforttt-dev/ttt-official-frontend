import { createSlice } from "@reduxjs/toolkit";

// Safe localStorage parsing
const getStoredRegistrations = () => {
  try {
    const data = localStorage.getItem("registrations");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

const initialState = {
  registrations: getStoredRegistrations(),
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    addRegistration: (state, action) => {
      state.registrations.push(action.payload);

      // Save updated data to localStorage
      localStorage.setItem(
        "registrations",
        JSON.stringify(state.registrations)
      );
    },
  },
});

export const { addRegistration } = registrationSlice.actions;
export default registrationSlice.reducer;
