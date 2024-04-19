import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./CartCountActions";


export interface CartCountState {
    count: number;
}

export const initialCounterState: CartCountState = {
    count: 0
};

export const CartCounterReducer = createReducer(
    initialCounterState,
    on(increment, state => ({ ...state, count: state.count + 1 })),
    on(decrement, state => ({ ...state, count: state.count - 1 })),
    on(reset, state => ({ ...state, count:0 }))
);