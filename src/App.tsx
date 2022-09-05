import React, {FunctionComponent} from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import { Layout,Col, Row } from 'antd';
import SideFilter from "./components/SideFilter";
import TopFilter from "./components/TopFilter";
import Cards from "./components/Cards";
import { observer } from 'mobx-react-lite'
import {RootStore, store} from "./store/store";
import {Instance} from "mobx-state-tree";
import { values } from "mobx";
const { Header } = Layout;

interface IRootStore extends Instance<typeof RootStore> {}
interface Props {
    store: IRootStore;
}
const App: FunctionComponent<Props> = observer(({ store }) => {

  return (
    <div className="App wrapper">
        <Layout className="layout" >
            <Header className="header">
                <div className="logo"/>
            </Header>
            <Layout>
                <Row className="content">
                    <Col span={8}>
                        <SideFilter />
                    </Col>
                    <Col span={16}>
                        <TopFilter />
                        {values(store.tickets).map((ticket) => (
                            <Cards  { ...ticket } />
                        ))}
                    </Col>
                </Row>
            </Layout>
        </Layout>
    </div>
  );
});

export default App;
