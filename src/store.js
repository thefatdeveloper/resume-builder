import { configureStore } from "@reduxjs/toolkit";
import stepperReducer from "./features/stepper/stepperSlice";
import infoReducer from "./features/info/infoSlice";
import workReducer from "./features/work/workSlice";
import educationReducer from "./features/education/educationSlice";

export const store = configureStore({
  reducer: {
    stepper: stepperReducer,
    info: infoReducer,
    work: workReducer,
    education: educationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
