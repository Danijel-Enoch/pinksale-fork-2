import React, { useContext } from 'react';
import { Card, Form, Input, Radio, Space, Alert, Button , Select, Checkbox, DatePicker } from 'antd';
import type { DatePickerProps } from 'antd/es/date-picker';
import { Context } from "../../context/context";

export default function Step2() {
    const { setLaunchpad, launchpad } = useContext(Context);

    const onChange = (
    value: DatePickerProps['value'],
    dateString: [string, string] | string,
    ) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    };

    const onOk = (value: DatePickerProps['value']) => {
    console.log('onOk: ', value);
    };

    return (
        <Card>
            <Form layout="vertical">
                <Form.Item label="Presale rate*">
                    <Input type="number" name="presaleRate" placeholder="100" value={0} />
                    <p>If I spend 1 BNB how many tokens will I receive?</p>
                    {/* <span className='text-danger'>*invalid amount</span> */}
                </Form.Item>
                <Form.Item label="Whitelist">
                    <Radio.Group defaultValue={1}>
                        <Space direction="vertical">
                            <Radio value={1}>Disable</Radio>
                            <Radio value={2}>Enable</Radio>
                        </Space>
                    </Radio.Group>
                    <p>You can enable/disable whitelist anytime</p>
                </Form.Item>
                <div className='row'>
                    <div className="col-md-6">
                        <Form.Item label="Softcap (BNB)*">
                            <Input type="number" name="softCap" placeholder="Ex: 10" value={0}/>
                            <p>Softcap must be >= 50% of Hardcap!</p>
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item label="HardCap (BNB)*">
                            <Input type="number" name="presaleRate" placeholder="Ex: 10" value={0} />
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-6">
                        <Form.Item label="Minimum buy (BNB)*">
                            <Input type="number" name="softCap" placeholder="0.1 BNB" value={0}/>
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item label="Maximum buy (BNB)*">
                            <Input type="number" name="presaleRate" placeholder="0.2 BNB" value={0} />
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-6">
                    <Form.Item label="Refund type">
                        <Select onChange={(value) => {alert(value)}} name="refundType">
                            <option value="0">Refund</option>
                            <option value="1">Burn</option>
                        </Select>
                    </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item label="Router">
                            <Select onChange={(value) => {alert(value)}} name="refundType">
                                <option value="" disabled="">---Select Router Exchange---</option>
                                <option value="0xD99D1c33F9fC3444f8101754aBC46c52416550D1">Pancakeswap</option>
                                <option value="0xBBe737384C2A26B15E23a181BDfBd9Ec49E00248">PinkSwap Testnet</option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-6">
                        <Form.Item label="liquidity (%)*">
                            <Input type="number" name="liquidity" placeholder="Ex: 52" value={0}/>
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item label="listing rate*">
                            <Input type="number" name="listingRate" placeholder="Ex: 500" value={0} />
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                        <span>Enter the percentage of raised funds that should be allocated to Liquidity on (Min 51%, Max 100%)</span><br/>
                        <span>If I spend 1 BNB on how many tokens will I receive? Usually this amount is lower than presale rate to allow for a higher listing price on</span>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                        <strong>Select start time & end time (UTC)*</strong>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-6">
                        <label class="label" for="startTime">Start time (UTC)<sup class="has-text-danger">*</sup></label><br/>
                        <Space direction="vertical" size={24}>
                            <DatePicker showTime onChange={onChange} onOk={onOk} />
                        </Space>
                    </div>

                    <div className="col-md-6">
                        <label class="label" for="endTime">End time (UTC)<sup class="has-text-danger">*</sup></label><br/>
                        <Space direction="vertical" size={24}>
                            <DatePicker showTime onChange={onChange} onOk={onOk} />
                        </Space>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                        <Form.Item label="Liquidity lockup (minutes)*">
                            <Input type="number" name="liquidityLockTime" placeholder="30 days" value={0}/>
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                        <Checkbox onChange={(value) => {alert(value)}}>Using Vesting Contributor?</Checkbox>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                        <br/>
                            <Alert message="Vesting Contributor does not support rebase tokens." type="warning" className='text-left' />
                        <br/>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                        <Form.Item label="First release for presale (percent)*">
                            <Input type="number" name="contributorFirstTokenReleasePercent" placeholder="Ex: 40%" value={0}/>
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-6">
                        <Form.Item label="Vesting period each cycle (minutes)*">
                            <Input type="number" name="contributorVestingPeriod" placeholder="Enter (minutes). Ex: 3" value={0}/>
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item label="Presale token release each cycle (percent)*">
                            <Input type="number" name="contributorPercentUnlockPerPeriod" placeholder="Ex: 20%" value={0} />
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                    <br/>
                        <p className='text-center'>Need 0 Battle to create launchpad.</p>
                    </div>
                </div>

                <Alert message="After you finalize the pool your token will be auto listed on DEX." type="warning" className='text-center' />
                <Form.Item className='has-text-centered'>
                    <Button type="primary" className='next-btn' onClick={() => {
                        setLaunchpad({ ...launchpad, 'step': 2 });
                    }}>
                        Next
                    </Button>
                </Form.Item>
            </Form>

        </Card>
    )
}
