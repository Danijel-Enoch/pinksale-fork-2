import React, { useContext } from 'react';
import { Card, Form, Input, Radio, Space, Alert, Button } from 'antd';
import { Context } from "../../context/context";

export default function Step4() {
    const { setLaunchpad, launchpad } = useContext(Context);
    
    
    return (
        <Card>
            <Form layout="vertical">            
                <Alert
                    message="Error"
                    description="Cannot submit by following the errors. Start time needs to be after now"
                    type="error"
                    showIcon
                />

                <div className='row'>
                    <div className="col-md-12">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Total token</td>
                                <td className="text-right">25.225 $DLC</td>
                            </tr>
                            <tr>
                                <td>Factory Address</td>
                                <td className="text-right">0xd7c97627807Ee783a160Ae95681B53b0D7D2261d</td>
                            </tr>
                            <tr>
                                <td>Token name</td>
                                <td className="text-right">Development Life Club</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>

                <Alert message="For tokens with burns, rebase or other special transfers please ensure that you have a way to whitelist multiple addresses or turn off the special transfer events (By setting fees to 0 for example for the duration of the presale)." type="warning" className='text-center' />
                <Form.Item className='has-text-centered'>
                    <Button type="primary" className='next-btn' onClick={() => {
                        setLaunchpad({ ...launchpad, 'step': 4 });
                    }}>
                        Next
                    </Button>
                </Form.Item>
            </Form>

        </Card>
    )
}
