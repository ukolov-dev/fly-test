import { types, Instance } from 'mobx-state-tree';
import { Ticket, FilterTransfer } from '../models';
import { values } from 'mobx';
import type { IFilterTransfer } from '../models';
import { SortMode } from '../models/SortMode';
interface IFilter {
    value: number;
    label: string;
    show: boolean;
}

export const RootStore = types
    .model({
        tickets: types.array(Ticket),
        filterTransfer: types.array(FilterTransfer),
        filterMode: types.array(SortMode),
        mode: types.string,
    })
    .views(self => ({
        get useFilter() {
            return filterTickets(
                values(self.tickets),
                values(self.filterTransfer),
                self.mode
            );
        },
        get getFilters() {
            return values(self.filterTransfer);
        },
        get getSortMode() {
            return values(self.filterMode);
        },
        get getMode() {
            return self.mode;
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
        function setFilterAll(check: boolean) {
            values(self.filterTransfer).forEach(item => (item.show = check));
        }
        function setMode(mode: string) {
            self.mode = mode;
        }
        return {
            updateFilter,
            setMode,
            setFilterAll,
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
            cost: 25000,
            timeThere: 14,
            timeBack: 13,
            transfer: 'MSK, VRN',
        },
        {
            id: 3,
            cost: 16000,
            timeThere: 15,
            timeBack: 14,
            transfer: 'MSK, VRN, KZS',
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
            show: true,
        },
        {
            value: 2,
            label: '2 пересадоки',
            show: true,
        },
        {
            value: 3,
            label: '3 пересадоки',
            show: true,
        },
    ],
    filterMode: [
        {
            label: 'САМЫЙ ДЕШЕВЫЙ',
            value: '1',
        },
        {
            label: 'САМЫЙ БЫСТРЫЙ',
            value: '2',
        },
    ],
    mode: '1',
});

/*tbd вынести в отдельный файл*/
function filterTickets<Array>(
    tickets: ReadonlyArray<Array>,
    filterObj: ReadonlyArray<IFilterTransfer>,
    mode: string
) {
    let transfer: IFilter[] = filterObj.filter(i => i.show === true);
    let transferC = transfer.map(i => i.value + 1);
    return tickets
        .filter((ticket: any) =>
            transferC.includes(ticket.transfer.split(',').length)
        )
        .sort((a: any, b: any) => {
            if (mode === '1') {
                return a.cost - b.cost;
            } else {
                return (
                    a.transfer.split(',').length - b.transfer.split(',').length
                );
            }
        });
}
