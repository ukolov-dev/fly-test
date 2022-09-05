import React, { FunctionComponent, useState } from 'react';
import { Radio } from 'antd';
interface OwnProps {}

type Props = OwnProps;
const optionsWithDisabled = [
  {
    label: 'САМЫЙ ДЕШЕВЫЙ',
    value: '1',
  },
  {
    label: 'САМЫЙ БЫСТРЫЙ',
    value: '2',
  }
];



const TopFilter: FunctionComponent<Props> = (props) => {

  const [value, setValue] = useState<string | number>('1');

  const onChange = ({ target: { value } }: any) => {
    console.log('radio4 checked', value);
    setValue(value);
  };
  return (
      <Radio.Group
          className="top-filter"
          options={optionsWithDisabled}
          onChange={onChange}
          value={value}
          optionType="button"
          buttonStyle="solid"
      />
  );
};

export default TopFilter;
