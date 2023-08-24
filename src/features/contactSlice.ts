import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contact = {
  id: number;
  firstName: string;
  lastName?: string;
  status: boolean;
};

type ContactStore = {
  contacts: Contact[];
};

const initialState: ContactStore = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    // add contact to store
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    // edit a contact
    editContact: (state, action: PayloadAction<Contact>) => {
      const id = action.payload.id;
      state.contacts = state.contacts.map((item) =>
        item.id === id ? action.payload : item
      );
    },
    // delete a contact
    deleteContact: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.contacts = state.contacts.filter((item) => item.id !== id);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
