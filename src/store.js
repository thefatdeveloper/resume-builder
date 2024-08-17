import { configureStore } from "@reduxjs/toolkit";
import stepperReducer from "./features/stepper/stepperSlice";
import infoReducer from "./features/info/infoSlice";
export const store = configureStore({
  reducer: {
    stepper: stepperReducer,
    info: infoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
