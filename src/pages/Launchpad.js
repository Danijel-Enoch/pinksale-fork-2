import React, { useContext } from 'react';
import AppHeader from '../component/AppHeader';
import { Steps } from 'antd';
import { Context } from "../context/context";
import Step1 from '../component/lauchpadStep/Step1';
import Step2 from '../component/lauchpadStep/Step2';
import Step3 from '../component/lauchpadStep/Step3';
import Step4 from '../component/lauchpadStep/Step4';

const { Step } = Steps;

export default function Launchpad() {
    const { launchpad } = useContext(Context);

    return (
        <div class='dashboard-app'>
            <AppHeader />
            <div class='dashboard-content'>
                <div class='container'>
                    <Steps current={launchpad.step}>
                        <Step title="Verify Token" description='Enter the token address and verify' />
                        <Step title="DeFi Launchpad Info" description="Enter the launchpad information that you want to raise , that should be enter all details about your presale" />
                        <Step title="Add Additional Info" description="Let people know who you are" />
                        <Step title="Finish" description="Review your information" />
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
                                {launchpad.step === 2 &&
                                    <Step3 />
                                }
                                {launchpad.step === 3 &&
                                    <Step4 />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
