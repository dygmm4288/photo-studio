import { create } from "zustand";

export const useBookingStore = create((set) => ({
  personalInfo: {
    username: "",
    phone: "",
    email: "",
  },
  agreeImportantNotes: false,
  selectedDate: "",
  selectedTime: [],
  selectedOption: "",
  setPersonalInfo: (personalInfo) => set({ personalInfo }),
  setSelectedDate: (selectedDate) => set({ selectedDate }),
  setSelectedTime: (selectedTime) => set({ selectedTime }),
  setSelectedOption: (selectedOption) => set({ selectedOption }),
  setAgreeImportantNotes: (agreeImportantNotes) => set({ agreeImportantNotes }),
}));
