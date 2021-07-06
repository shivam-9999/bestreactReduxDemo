import { createStore } from "redux";
import { reducer } from "./increAction/Reducer";

export const store = createStore(reducer);
