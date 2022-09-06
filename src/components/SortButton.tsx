import React, { FunctionComponent, useState } from 'react';
import { Radio } from 'antd';
import { Instance } from 'mobx-state-tree';
import { RootStore } from '../store/store';
interface IRootStore extends Instance<typeof RootStore> {}
interface Props {
    store: IRootStore;
}

export const SortButton: FunctionComponent<Props> = props => {
    const [value, setValue] = useState<string>(props.store.getMode);

    const onChange = ({ target: { value } }: any) => {
        setValue(value);
        props.store.setMode(value);
    };
    return (
        <Radio.Group
            className="main-sort"
            options={props.store.getSortMode as any}
            onChange={onChange}
            value={value}
            optionType="button"
            buttonStyle="solid"
        />
    );
};
