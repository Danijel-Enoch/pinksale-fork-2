import React from 'react';
import AppHeader from '../component/AppHeader';
import {Input, Card, Tabs, Typography, Avatar } from 'antd';

const { Text } = Typography;
export default function Liquidity() {
    return (
        <div class='dashboard-app'>
            <AppHeader />
            <div class='dashboard-content'>
                <div class='container'>
                    <div className='section'>
                        <Card>
                            <div className='row'>
                                <div className="col-md-12">
                                    <Input placeholder="Search by LP token address or token address..." />   
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col-md-12">
                                    <Tabs>
                                        <Tabs.TabPane tab="All" key="item-1">
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">Liquidity token</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="float-left mr-3">
                                                                    <Avatar src="https://www.pinksale.finance/static/media/unknown-token.5e4a517e.png" />   
                                                                </div>
                                                                <div class="float-left mr-3">
                                                                    <Text strong>UniFan</Text><br />
                                                                    <Text>UNIFs</Text>
                                                                </div>
                                                            </td>
                                                            <td>600,000,000 UNIF</td>
                                                            <td>View</td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div class="float-left mr-3">
                                                                    <Avatar src="https://www.pinksale.finance/static/media/unknown-token.5e4a517e.png" />   
                                                                </div>
                                                                <div class="float-left mr-3">
                                                                    <Text strong>UniFan</Text><br />
                                                                    <Text>UNIFs</Text>
                                                                </div>
                                                            </td>
                                                            <td>600,000,000 UNIF</td>
                                                            <td>View</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tabs.TabPane>
                                        <Tabs.TabPane tab="My Lock" key="item-2">
                                        <div class="table-responsive">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">Liquidity token</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="float-left mr-3">
                                                                    <Avatar src="https://www.pinksale.finance/static/media/unknown-token.5e4a517e.png" />   
                                                                </div>
                                                                <div class="float-left mr-3">
                                                                    <Text strong>UniFan</Text><br />
                                                                    <Text>UNIFs</Text>
                                                                </div>
                                                            </td>
                                                            <td>600,000,000 UNIF</td>
                                                            <td>View</td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div class="float-left mr-3">
                                                                    <Avatar src="https://www.pinksale.finance/static/media/unknown-token.5e4a517e.png" />   
                                                                </div>
                                                                <div class="float-left mr-3">
                                                                    <Text strong>UniFan</Text><br />
                                                                    <Text>UNIFs</Text>
                                                                </div>
                                                            </td>
                                                            <td>600,000,000 UNIF</td>
                                                            <td>View</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tabs.TabPane>
                                    </Tabs>
                                </div>
                            </div>
                        </Card>    
                    </div>
                </div>
            </div>
        </div>
    )
}
