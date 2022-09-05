import React, {FunctionComponent, useState} from 'react';
import { Checkbox } from 'antd';
import './Style.scss';
interface OwnProps {}

type Props = OwnProps;
//import type { IFilterTransfer } from "../models";
// type Props = IFilterTransfer[];

const CheckboxGroup = Checkbox.Group;
const filterOptions = [
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
const SideFilter: FunctionComponent<Props> = ( props ) => {

    // @ts-ignore
    const arr: IOwnProps[] = props.filter
    const [checkedList, setCheckedList] = useState(filterOptions.map((i)=>i.value));
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(true);

    const onChange = (list: any) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < filterOptions.length);
        setCheckAll(list.length === filterOptions.length);
    };

    const onCheckAllChange = (e: any) => {
        setCheckedList(e.target.checked ? filterOptions.map((item)=>item.value) : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    return (
      <div className="side-filter">
          <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
              Все
          </Checkbox>
          <br/>
          <CheckboxGroup options={filterOptions}  value={checkedList} onChange={onChange} />
      </div>

  );
};

export default SideFilter;
