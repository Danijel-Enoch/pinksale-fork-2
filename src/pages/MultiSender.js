import React, { useContext } from 'react';
import AppHeader from '../component/AppHeader';
import { Steps } from 'antd';
import { Context } from "../context/context";
import Step1 from '../component/multiSenderStep/Step1';
import Step2 from '../component/multiSenderStep/Step2';

const { Step } = Steps;

export default function MultiSender() {
    const { launchpad } = useContext(Context);

    return (
        <div class='dashboard-app'>
            <AppHeader />
            <div class='dashboard-content'>
                <div class='container'>
                    <Steps current={launchpad.step}>
                        <Step title="Add Your Allocation" description='Enter your token to be send with allocations' />
                        <Step title="Confirmation" description="Let review your information" />
                    </Steps>
                    <div className='section'>
                        <div className='row'>
                            <div className='col-12'>
                                {launchpad.step === 0 &&
                                    <Step1 />
                                }
                                {launchpad.step === 1 &&
                                    <Step2 />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
