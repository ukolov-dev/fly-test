import { Instance, types } from 'mobx-state-tree';

export const SortMode = types.model({
    label: types.string,
    value: types.string,
});
export type IFilterMode = Instance<typeof SortMode>;
