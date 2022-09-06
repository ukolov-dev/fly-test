import React, { FunctionComponent, useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import './Style.scss';
import { observer } from 'mobx-react-lite';
import { Instance } from 'mobx-state-tree';
import { RootStore } from '../store/store';

interface IRootStore extends Instance<typeof RootStore> {}
interface Props {
    store: IRootStore;
}

const CheckboxGroup = Checkbox.Group;

export const Filter: FunctionComponent<Props> = observer(props => {
    const filterOptions = props.store.getFilters;
    const [checkedList, setCheckedList] = useState(
        filterOptions.map(i => i.value)
    );
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(true);

    const onChange = (list: any) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < filterOptions.length);
        setCheckAll(list.length === filterOptions.length);
        props.store.updateFilter(list);
    };

    const onCheckAllChange = (e: any) => {
        setCheckedList(
            e.target.checked ? filterOptions.map(item => item.value) : []
        );
        setIndeterminate(false);
        setCheckAll(e.target.checked);
        props.store.setFilterAll(e.target.checked);
    };
    return (
        <div className="main-filter">
            <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
            <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
            >
                Все
            </Checkbox>
            <br />
            <CheckboxGroup
                options={filterOptions as any}
                value={checkedList}
                onChange={onChange}
            />
        </div>
    );
});
