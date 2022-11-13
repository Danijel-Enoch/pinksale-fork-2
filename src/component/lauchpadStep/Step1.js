import React, { useContext } from 'react';
import { Card, Form, Input, Radio, Space, Alert, Button, Descriptions } from 'antd';
import { Context } from "../../context/context";

export default function Step1() {
    const { setLaunchpad, launchpad } = useContext(Context);


    return (
        <Card>
            <Form layout="vertical">
                <Form.Item label="Token address*">
                    <Input name="tokenAddess" placeholder="ex. 0xc748673057861a797275CD8A068AbB95A902e8de" value="0x1e737b6217dd3b4d8b33b3cd21609d564b8dd34d" />
                    <p>Pool creation fee: 1 BNB</p>
                    <span className='text-danger'>*invalid amount</span>
                </Form.Item>
                <Descriptions
                    title="Name"
                    size="small"
                    bordered={false}
                    style={{"margin" : "5px" , "borderBottom" : "none"}}
                    extra={<span type="primary">BUSD Token</span>}
                >
                </Descriptions>
                <Form.Item label="Currency">
                    <Radio.Group defaultValue={1}>
                        <Radio value={1}>BNB</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Fee Options">
                    <Radio.Group defaultValue={1}>
                        <Space direction="vertical">
                            <Radio value={1}>5% BNB raised only<span className='text-center'>(Recommended)</span></Radio>
                            <Radio value={2}>2% BNB raised + 2% token sold</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
                <Alert message="After you finalize the pool your token will be auto listed on DEX." type="warning" className='text-center' />
                <Form.Item className='has-text-centered'>
                    <Button type="primary" className='next-btn' onClick={() => {
                        setLaunchpad({ ...launchpad, 'step': 1 });
                    }}>
                        Next
                    </Button>
                </Form.Item>
            </Form>

        </Card>
    )
}
