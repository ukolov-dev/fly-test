import React, { FunctionComponent, useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import './Style.scss';
import type { IFilterTransfer } from '../models';
import { observer } from 'mobx-react-lite';
import { Instance } from 'mobx-state-tree';
import { RootStore } from '../store/store';
import { values } from 'mobx';
interface OwnProps {}

interface IRootStore extends Instance<typeof RootStore> {}
interface Props {
    store: IRootStore;
}

const CheckboxGroup = Checkbox.Group;
// let filterOptions = [
//     {
//         value: 0,
//         label: 'Без пересадок',
//         show: true,
//     },
//     {
//         value: 1,
//         label: '1 пересадока',
//         show: true,
//     },
//     {
//         value: 2,
//         label: '2 пересадоки',
//         show: true,
//     },
//     {
//         value: 3,
//         label: '3 пересадоки',
//         show: true,
//     },
// ];
const SideFilter: FunctionComponent<Props> = observer(props => {
    const filterOptions = props.store.getFilters;
    // @ts-ignore
    const [checkedList, setCheckedList] = useState(
        filterOptions.map(i => i.value)
    );
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(true);
    // useEffect(() => )

    const onChange = (list: any) => {
        console.log(list);
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
    };
    return (
        <div className="side-filter">
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
                options={filterOptions}
                value={checkedList}
                onChange={onChange}
            />
        </div>
    );
});

export default SideFilter;
