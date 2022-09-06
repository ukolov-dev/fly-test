import React, { FunctionComponent } from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import { Layout, Col, Row } from 'antd';
import { TicketCard, Filter, SortButton } from './components';
import { observer } from 'mobx-react-lite';
import { RootStore } from './store/store';
import { Instance } from 'mobx-state-tree';
const { Header } = Layout;

interface IRootStore extends Instance<typeof RootStore> {}
interface Props {
    store: IRootStore;
}
const App: FunctionComponent<Props> = observer(({ store }) => {
    return (
        <div className="App wrapper">
            <Layout className="layout">
                <Header className="header">
                    <div className="logo" />
                </Header>
                <Layout>
                    <Row className="content">
                        <Col span={8}>
                            <Filter store={store} />
                        </Col>
                        <Col span={16}>
                            <SortButton store={store} />
                            {store.useFilter.map(ticket => (
                                <TicketCard {...ticket} />
                            ))}
                        </Col>
                    </Row>
                </Layout>
            </Layout>
        </div>
    );
});

export default App;
