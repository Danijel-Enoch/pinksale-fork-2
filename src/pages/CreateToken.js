import React from 'react';
import AppHeader from '../component/AppHeader';
import {Input, Card, Button, Form, Checkbox } from 'antd';

export default function CreateToken() {
    return (
        <div class='dashboard-app'>
            <AppHeader />
            <div class='dashboard-content'>
                <div class='container'>
                    <div className='section'>
                        <Card>
                            <Form layout="vertical">
                                <Form.Item label="Token Type*">
                                    <Input type="text" placeholder="Enter token or LP token address" />
                                    <span>0.2 BNB</span>
                                </Form.Item>

                                <Form.Item label="Name*">
                                    <Input type="text" placeholder="Ex: Ethereum" name="tokenName" />
                                </Form.Item>

                                <Form.Item label="Symbol*">
                                    <Input type="text" placeholder="Ex: ETH" name="tokenSymbol" />
                                </Form.Item>

                                <Form.Item label="Decimals*">
                                    <Input type="number" placeholder="Ex: 18" name="tokenDecimals" />
                                </Form.Item>

                                <Form.Item label="Total supply*">
                                    <Input type="text" placeholder="Ex: 100000000000" name="totalSupply" />
                                </Form.Item>

                                <Form.Item name="remember">
                                    <Checkbox>Implement Pink Anti-Bot System?</Checkbox>
                                </Form.Item>

                                <Form.Item className='has-text-centered'>
                                    <Button type="primary" className='next-btn'>
                                        Create token
                                    </Button>
                                </Form.Item>

                                <div className='row'>
                                    <div className="col-md-12">
                                        <p className='text-center'>Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.</p>
                                    </div>
                                </div>
                            </Form>
                        </Card>    
                    </div>
                </div>
            </div>
        </div>
    )
}
