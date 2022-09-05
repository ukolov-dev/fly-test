import {Instance, types} from "mobx-state-tree";


export const Ticket = types.model({
    id: types.identifierNumber,
    cost: types.number,
    timeThere: types.number,
    timeBack: types.number,
    transfer: types.string,
})
export type ITicket = Instance<typeof Ticket>;



