import React, { useContext } from 'react';
import { Card, Form, Input, Button } from 'antd';
import { Context } from "../../context/context";

export default function Step3() {
    const { setLaunchpad, launchpad } = useContext(Context);
    const { TextArea } = Input;
    
    return (
        <Card>
            <Form layout="vertical">
                <div className='row'>
                    <div className="col-md-6">
                        <Form.Item label="Logo URL*">
                            <Input name="logoUrl" placeholder="Ex: https://..." />
                            <p>URL must end with a supported image extension png, jpg, jpeg or gif. You can upload your image at https://upload.pinksale.finance/</p>
                            {/* <span className='text-danger'>*invalid amount</span> */}
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item label="Website*">
                            <Input name="tokenAddess" placeholder="Ex: https://..." />
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-6">
                        <Form.Item label="Facebook">
                            <Input name="facebook" placeholder="Ex: https://facebook.com/..." />
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item label="Twitter">
                            <Input name="twitter" placeholder="Ex: https://twitter.com/..." />
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-6">
                        <Form.Item label="Github">
                            <Input name="github" placeholder="Ex: https://github.com/..." />
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item label="Telegram">
                            <Input name="telegram" placeholder="Ex: https://t.me/..." />
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-6">
                        <Form.Item label="Instagram">
                            <Input name="instagram" placeholder="Ex: https://instagram.com/..." />
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item label="Discord">
                            <Input name="discord" placeholder="Ex: https://discord.com/..." />
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                        <Form.Item label="Reddit">
                            <Input name="Reddit" placeholder="Ex: https://reddit.com/..." />
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                        <Form.Item label="Youtube Video">
                            <Input name="youtubeVideo" placeholder="Ex: https://www.youtube.com/watch?v=xxxxxxxxx" />
                            <span>Input your youtube URL, or youtube video ID.</span>
                        </Form.Item>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                        <Form.Item label="Youtube Video">
                            <TextArea rows={4} placeholder="Ex: This is the best project..." maxLength={6} />
                        </Form.Item>
                    </div>
                </div>
                
                <Form.Item className='has-text-centered'>
                    <Button type="primary" className='next-btn' onClick={() => {
                        setLaunchpad({ ...launchpad, 'step': 3 });
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
