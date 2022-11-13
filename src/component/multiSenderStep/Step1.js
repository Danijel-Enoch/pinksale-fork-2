import React, { useContext } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Card, Form, Input, Upload, Alert, Button} from 'antd';
import { Context } from "../../context/context";

export default function Step1() {
    const { setLaunchpad, launchpad } = useContext(Context);
    const { TextArea } = Input;

    return (
        <Card>
            <Form layout="vertical">
                <Form.Item label="Token address">
                    <Input name="tokenAddess" placeholder="ex. 0xc748673057861a797275CD8A068AbB95A902e8de" value="0x1e737b6217dd3b4d8b33b3cd21609d564b8dd34d" />
                    <p>Pink Multi-sender allows you to send ERC20 token in batch by easiest way. You can enter token address to send specific token or leave it blank to send chain token such as BNB....</p>
                </Form.Item>

                <label class="label" for="recipients">Allocations<sup class="has-text-danger">*</sup></label>
                <TextArea label="Token address" rows={12} placeholder="Insert allocation: separate with breaks line. By format: address,amount or address amount
Ex:
0x0000000000000000000000000000000000001000 13.45
0x0000000000000000000000000000000000001000 1.049
0x0000000000000000000000000000000000001000 1" />
            <br />
            <br />
            <Upload>
                <Button icon={<UploadOutlined />}>Or choose from CSV file</Button>
            </Upload>

                <br />
                <br />
                <Alert message="Please exclude 0x5D00661EA3c9b8f095520573b9B940B6fEbcfD8b from fees, rewards, max tx amount to start sending tokens." type="warning" className='text-center' />
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
