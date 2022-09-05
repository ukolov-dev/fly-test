import { types, Instance } from 'mobx-state-tree';
import { Ticket, FilterTransfer } from '../models';
import { values } from 'mobx';
import type { IFilterTransfer, ITicket } from '../models';

export const RootStore = types
    .model({
        tickets: types.array(Ticket),
        filterTransfer: types.array(FilterTransfer),
    })
    .views(self => ({
        // get ticketsOfFast() {
        //     return self.tickets.filter(ticket => ticket.transfer.split(',').length <= 1)
        // },
        get useFilter() {
            return filterTickets(
                values(self.tickets),
                values(self.filterTransfer)
            );
        },
        get getFilters() {
            return values(self.filterTransfer);
        },
    }))
    .actions(self => {
        function updateFilter(list: any) {
            values(self.filterTransfer).forEach(item =>
                list.includes(item.value)
                    ? (item.show = true)
                    : (item.show = false)
            );
        }
        return {
            updateFilter,
        };
    });
export type RootStoreModel = Instance<typeof RootStore>;
export const store: RootStoreModel = RootStore.create({
    tickets: [
        {
            id: 1,
            cost: 13000,
            timeThere: 10,
            timeBack: 9,
            transfer: 'MSK',
        },
        {
            id: 2,
            cost: 14000,
            timeThere: 12,
            timeBack: 11,
            transfer: 'MSK, PGK',
        },
    ],
    filterTransfer: [
        {
            value: 0,
            label: 'Без пересадок',
            show: true,
        },
        {
            value: 1,
            label: '1 пересадока',
            show: false,
        },
        {
            value: 2,
            label: '2 пересадоки',
            show: true,
        },
        {
            value: 3,
            label: '3 пересадоки',
            show: false,
        },
    ],
});
interface IFilter {
    value: number;
    label: string;
    show: boolean;
}
function filterTickets<Array>(
    tickets: ReadonlyArray<Array>,
    filterObj: ReadonlyArray<IFilterTransfer>
) {
    let transfer: IFilter[] = filterObj.filter(i => i.show === true);
    let transferC = transfer.map(i => i.value + 1);
    console.log('filterTickets', transferC);
    return tickets.filter((ticket: any) =>
        transferC.includes(ticket.transfer.split(',').length)
    );
}
