import React, { useContext } from 'react';
import { Card, Form, Radio, Space, Button, } from 'antd';
import { Context } from "../../context/context";

export default function Step2() {
    const { setLaunchpad, launchpad } = useContext(Context);
    return (
        <Card>
            <Form layout="vertical">
                <div className='row'>
                    <div className="col-md-12">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Total address</td>
                                <td className="text-right">25.225 $DLC</td>
                            </tr>
                            <tr>
                                <td>Total amount to send</td>
                                <td className="text-right">30 $DLC</td>
                            </tr>
                            <tr>
                                <td>Number of transaction</td>
                                <td className="text-right">1</td>
                            </tr>
                            <tr>
                                <td>Your token balance</td>
                                <td className="text-right">5,000 $DLC</td>
                            </tr>
                            <tr>
                                <td>Token to send</td>
                                <td className="text-right">$DLC</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="col">Address</th>
                                <th scope="col">Amount</th>
                            </tr>
                            <tr>
                                <td>0x389ce97651e71dc1571963dee62165c41194b253</td>
                                <td className="text-right">10</td>
                            </tr>
                            <tr>
                                <td>0xAcaEc9605e6F66f29824875532F2BB8719C64920</td>
                                <td className="text-right">20</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
                
                <Form.Item label="Send options">
                    <Radio.Group defaultValue={1}>
                        <Space direction="horizontal">
                            <Radio value={1}>Safe mode</Radio>
                            <Radio value={0}>Unsafe mode</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>

                <Form.Item className='has-text-centered'>
                    <Button type="primary" className='next-btn' onClick={() => {
                        setLaunchpad({ ...launchpad, 'step': 4 });
                    }}>
                        Next
                    </Button>
                </Form.Item>

                <div className='row'>
                    <div className="col-md-12">
                        <p className='text-center'>Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.</p>
                    </div>
                </div>
            </Form>
        </Card>
    )
}
