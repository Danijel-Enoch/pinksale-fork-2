import React from 'react';
import { Card } from 'antd';
import AppHeader from '../component/AppHeader';

export default function Home() {
    return (
        <div class='dashboard-app'>
            <AppHeader/>
            <div class='dashboard-content'>
                <div class='container'>
                    <section class="hero">
                        <div class="hero-body">
                            <div class="has-text-centered">
                                <h1 class="ant-typography">The Launchpad Protocol for Everyone!</h1>
                            </div>
                            <p class="custom-subtitle has-text-centered">PinkSale helps everyone to create their own tokens and token sales in few seconds.</p>
                            <p class="custom-subtitle has-text-centered">Tokens created on PinkSale will be verified and published on explorer websites.</p>
                        </div>
                        <div class="custom-hero-buttons">
                            <a className='mr-3' href="/launchpad/create?chain=BSC">Create Now</a>
                            <a class="learn" href="https://docs.pinksale.finance" target="_blank" rel="noreferrer nofollow">Learn more</a>
                        </div>
                        <div className='section'>
                            <div className='row'>
                                <div className='col-6 col-sm-3 col-xl-3'>
                                    <Card className='stat-box'>
                                        <p class="title">$437.7M</p>
                                        <p class="heading">Total Liquidity Raised</p>
                                    </Card>
                                </div>
                                <div className='col-6 col-sm-3 col-xl-3'>
                                    <Card className='stat-box'>
                                        <p class="title">13602</p>
                                        <p class="heading">Total Projects</p>
                                    </Card>
                                </div>
                                <div className='col-6 col-sm-3 col-xl-3'>
                                    <Card className='stat-box'>
                                        <p class="title">1.4M</p>
                                        <p class="heading">Total Participants</p>
                                    </Card>
                                </div>
                                <div className='col-6 col-sm-3 col-xl-3'>
                                    <Card className='stat-box'>
                                        <p class="title">$267.3M</p>
                                        <p class="heading">Total Values Locked</p>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div class="hero-body">
                            <div class="has-text-centered">
                                <h1 class="ant-typography">A Suite of Tools for Token Sales.</h1>
                            </div>
                            <p class="custom-subtitle has-text-centered">A suite of tools were built to help you create your own tokens and launchpads in a fast, simple and cheap way, with no prior code knowledge required and 100% decentralized!</p>
                        </div>
                        <div class="hero-body">
                            <div class="has-text-centered">
                                <h1 class="ant-typography">A Growing Protocol Ecosystem.</h1>
                            </div>
                            <p class="custom-subtitle has-text-centered">We build a suite of tools for the world of decentralized finance. PinkMoon, PinkSale, PinkElon PinkLock, PinkSwap, we Pink everything!</p>
                        </div>
                    </section>
                </div>
            </div>
            <footer class="page-footer font-small blue">
                <div class="footer-copyright text-center py-3">
                    Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.
                </div>
            </footer>
        </div>
    )
}
