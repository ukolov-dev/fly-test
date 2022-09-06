import { Instance, types } from 'mobx-state-tree';

export const FilterTransfer = types.model({
    value: types.number,
    label: types.string,
    show: types.boolean,
});
export type IFilterTransfer = Instance<typeof FilterTransfer>;
