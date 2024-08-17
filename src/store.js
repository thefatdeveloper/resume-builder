import {configureStore} from "@reduxjs/toolkit"
import stepperReducer from ".";

export const store = configureStore({
    reducer : {
        stepper : stepperReducer
    }
    
});