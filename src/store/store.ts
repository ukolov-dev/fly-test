import {types, Instance, SnapshotIn} from "mobx-state-tree";
import { Ticket, FilterTransfer } from "../models";

export const RootStore = types
    .model({
        tickets: types.array(Ticket),
        filterTransfer: types.array(FilterTransfer),
    }).views(self => ({
        get ticketsOfFast() {
            return self.tickets.filter(ticket => ticket.transfer.split(',').length <= 1)
        }
        // ticketsOfСheap(age) {
        //     return self.tickets.filter(ticket => ticket.age > age).length
        // }
    }))
export type RootStoreModel = Instance<typeof RootStore>;
export const store: RootStoreModel = RootStore.create({
    tickets: [
         {
            id: 1,
            cost: 13000,
            timeThere: 10,
            timeBack: 9,
            transfer: "MSK"
        },
        {
            id: 2,
            cost: 14000,
            timeThere: 12,
            timeBack: 11,
            transfer: "MSK, PGK"
        },
    ],
    filterTransfer: [
        {
            value: 0,
            label: "Без пересадок",
            show: true
        },
         {
            value: 1,
            label: "1 пересадока",
            show: true
        },
         {
            value: 2,
            label: "2 пересадоки",
            show: true
        },
         {
            value: 3,
            label: "3 пересадоки",
            show: true
        },
    ]
});

