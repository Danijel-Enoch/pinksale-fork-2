import React from 'react';
import AppHeader from '../component/AppHeader';
import {Input, Card, Button, Form, Checkbox, Alert } from 'antd';

export default function CreateLock() {
    return (
        <div class='dashboard-app'>
            <AppHeader />
            <div class='dashboard-content'>
                <div class='container'>
                    <div className='section'>
                        <Card title="Create your lock">
                            <Form layout="vertical">
                                <Form.Item label="Token or LP Token address*">
                                    <Input type="text" placeholder="Enter token or LP token address" />
                                </Form.Item>

                                <Form.Item name="remember">
                                    <Checkbox>use another owner?</Checkbox>
                                </Form.Item>

                                <Form.Item label="Owner">
                                    <Input type="text" placeholder="Enter owner address" name="owner" />
                                    <p>the address you input here will be receive the tokens once they are unlocked</p>
                                </Form.Item>

                                <Form.Item label="Title">
                                    <Input type="text" placeholder="Ex: My Lock" name="title" />
                                </Form.Item>

                                <Form.Item label="Amount*">
                                    <Input type="text" placeholder="Enter amount" name="amount" />
                                </Form.Item>

                                <Form.Item name="remember">
                                    <Checkbox>use vesting?</Checkbox>
                                </Form.Item>

                                <div className='row'>
                                    <div className="col-md-6">
                                        <Form.Item label="TGE Date (UTC time)*">
                                            <Input type="number" placeholder="Select date" name="cycle" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Item label="TGE Percent*">
                                            <Input type="number" placeholder="Ex: 10" name="tgeBps" />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-md-6">
                                        <Form.Item label="Cycle (days)*">
                                            <Input type="number" placeholder="Ex: 10" name="cycle" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Item label="Cycle Release Percent*">
                                            <Input type="number" placeholder="Ex: 10" name="cycleBps" />
                                        </Form.Item>
                                    </div>
                                </div>

                                <Form.Item label="Lock until (UTC time)*">
                                    <Input type="text" placeholder="Select date" name="amount" />
                                </Form.Item>

                                <Alert
                                    description="Please exclude PinkLock's lockup address 0x407993575c91ce7643a4d4cCACc9A98c36eE1BBE from fees, rewards, max tx amount to start locking tokens. We don't support rebase tokens."
                                    type="warning"
                                />

                                <Form.Item className='has-text-centered'>
                                    <Button type="primary" className='next-btn'>
                                        Lock
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
