import React, { FunctionComponent } from 'react';
import { Card,  Col, Row } from 'antd';
import './Style.scss';
import type { ITicket } from "../models";
// interface OwnProps {
//     id: number,
//     cost: number,
//     timeThere: number,
//     timeBack: number,
//     transfer?: string,
//     [key: string]: any
// }


type Props = ITicket;

const Cards: FunctionComponent<Props> = props => {
    const {id, cost, timeThere, timeBack, transfer} = props;
  return (
      <Card className="card">
        <Row className="card-header" gutter={[8, 8]}>
          <Col span={8} >   <span>{cost} </span>   </Col>
          <Col span={8} />
          <Col span={8} > <img src={require('../s7.png')} width="150" alt=""/>  </Col>
        </Row>

        <Row className="card-title" gutter={[8, 8]}>
          <Col span={8} > <span>MOW-HKT</span>  </Col>
          <Col span={8} > <span>В ПУТИ</span> </Col>
          <Col span={8} > <span>2 ПЕРЕСАДКИ</span> </Col>
        </Row>
        <Row className="card-result" gutter={[8, 8]}>
          <Col span={8} > <span>10:45-08:00</span>  </Col>
          <Col span={8} > <span>{timeThere}ч 00м</span> </Col>
          <Col span={8} > <span>{transfer}</span> </Col>
        </Row>
        {/*<Row className="card-title" gutter={[8, 8]}>*/}
        {/*  <Col span={8} > <span>MOW-HKT</span> </Col>*/}
        {/*  <Col span={8} > <span>В ПУТИ</span> </Col>*/}
        {/*  <Col span={8} > <span>1 ПЕРЕСАДКА</span> </Col>*/}
        {/*</Row>*/}
        {/*<Row className="card-result" gutter={[8, 8]}>*/}
        {/*  <Col span={8} > <span>11:20-00:50</span>  </Col>*/}
        {/*  <Col span={8} > <span>{timeBack} 00м</span> </Col>*/}
        {/*  <Col span={8} > <span>HKG</span> </Col>*/}
        {/*</Row>*/}
      </Card>

  );
};

export default Cards;
