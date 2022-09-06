import React, { FunctionComponent } from 'react';
import { Card, Col, Row } from 'antd';
import './Style.scss';
import type { ITicket } from '../models';

type Props = ITicket;

export const TicketCard: FunctionComponent<Props> = props => {
    const { id, cost, timeThere, timeBack, transfer } = props;
    return (
        <Card key={id} className="ticket">
            <Row className="ticket-header" gutter={[8, 8]}>
                <Col span={8}>
                    {' '}
                    <span>{cost} </span>{' '}
                </Col>
                <Col span={8} />
                <Col span={8}>
                    {' '}
                    <img src={require('../s7.png')} width="150" alt="" />
                </Col>
            </Row>

            <Row className="ticket-row-title" gutter={[8, 8]}>
                <Col span={8}>
                    {' '}
                    <span>MOW-HKT</span>{' '}
                </Col>
                <Col span={8}>
                    {' '}
                    <span>В ПУТИ</span>{' '}
                </Col>
                <Col span={8}>
                    {' '}
                    <span>
                        {transfer.split(',').length} ПЕРЕСАДК
                        {transfer.split(',').length === 1 ? 'А' : 'И'}
                    </span>
                </Col>
            </Row>
            <Row className="ticket-row-result" gutter={[8, 8]}>
                <Col span={8}>
                    {' '}
                    <span>10:45-08:00</span>{' '}
                </Col>
                <Col span={8}>
                    {' '}
                    <span>{timeThere}ч 00м</span>{' '}
                </Col>
                <Col span={8}>
                    {' '}
                    <span>{transfer}</span>{' '}
                </Col>
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
