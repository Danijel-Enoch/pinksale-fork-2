import React from 'react';
import AppHeader from '../component/AppHeader';
import { Typography, Tabs, Input, Select, Card } from 'antd';
const { Title } = Typography;

export default function LaunchpadList() {
    return (
        <div class='dashboard-app'>
            <AppHeader />
            <div class='dashboard-content'>
                <div class='container'>
                <div className='section'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <Title>Current Presales</Title>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-12'>
                            <Tabs defaultActiveKey="1">
                                <Tabs.TabPane tab="All launchpads" key="1">
                                <div className='row'>
                                    <div className='col-md-8'>
                                    <Input placeholder="Enter token name or token symbol" />
                                    </div>
                                    <div className='col-md-4'>
                                    <Select
                                        defaultValue="All Status"
                                        style={{ width: 120 }}
                                        allowClear
                                        options={[
                                            {
                                            value: 'All Status',
                                            label: 'All Status',
                                            },
                                            {
                                            value: 'KYC',
                                            label: 'KYC',
                                            },
                                            {
                                            value: 'Upcoming',
                                            label: 'Upcoming',
                                            },
                                            {
                                            value: 'Inprogress',
                                            label: 'Inprogress',
                                            },
                                            {
                                            value: 'Filled',
                                            label: 'Filled',
                                            },
                                            {
                                            value: 'Ended',
                                            label: 'Ended',
                                            },
                                            {
                                            value: 'Canceled',
                                            label: 'Canceled',
                                            },
                                        ]}
                                    />

                                    <Select
                                        defaultValue="No Filter"
                                        style={{ width: 120 }}
                                        allowClear
                                        options={[
                                            {
                                            value: 'No Filter',
                                            label: 'No Filter',
                                            },
                                            {
                                            value: 'Hard Cap',
                                            label: 'Hard Cap',
                                            },
                                            {
                                            value: 'Soft Cap',
                                            label: 'Soft Cap',
                                            },
                                            {
                                            value: 'LP percent',
                                            label: 'LP percent',
                                            },
                                            {
                                            value: 'Start time',
                                            label: 'Start time',
                                            },
                                            {
                                            value: 'End time',
                                            label: 'End time',
                                            },
                                        ]}
                                    />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-md-4'>
                                        <div className="site-card-border-less-wrapper">
                                            <Card
                                            title="Card title"
                                            bordered={false}
                                            style={{
                                                width: 300,
                                            }}
                                            >
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            </Card>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="site-card-border-less-wrapper">
                                            <Card
                                            title="Card title"
                                            bordered={false}
                                            style={{
                                                width: 300,
                                            }}
                                            >
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            </Card>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="site-card-border-less-wrapper">
                                            <Card
                                            title="Card title"
                                            bordered={false}
                                            style={{
                                                width: 300,
                                            }}
                                            >
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Advanced Mode" key="2">
                                    Advanced Mode
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="My Contributions" key="3">
                                    My Contributions
                                </Tabs.TabPane>
                            </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
