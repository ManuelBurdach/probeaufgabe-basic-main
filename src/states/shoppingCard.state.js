import {create} from "zustand"

export const shoppingCardState = create((set)=>({
    shoppingCardItems:[],
    setShoppingCardItems: (shoppingCardItems) => set((state)=> ({shoppingCardItems})),
}))