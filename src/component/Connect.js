import React from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
    NoEthereumProviderError
} from "@web3-react/injected-connector";

import { useEffect, useState } from "react";
import { injected, walletconnect, coinbaseWallet } from "../helper/connectors";
import { trimAddress } from '../helper/constant';
import useEagerConnect from '../helper/useWeb3';
import wrongNetwork from '../assets/images/wrong-network.svg';
import metaMask from '../assets/images/meta-mask.png';
import wallet from '../assets/images/wallet.png';
import coinbase from '../assets/images/coinbase.png';
import trust from '../assets/images/trust.png';
import { Modal, Col, Row, Card, Menu, Dropdown, Button } from 'antd';
import bnbImg from '../assets/images/binance-coin.svg';
import localStorage from "local-storage";




export const Connect = function () {
    const context = useWeb3React();
    const { connector, account, activate, deactivate, active, error } = context;
    // const [show, setShow] = useState(false);
    // const [networkshow, setNetworkshow] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [istrust, setIstrust] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(()=>{
        if(account){
            localStorage.set('address' , account);
        }
    },[account])

    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = useState();
    useEagerConnect();
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);


    function getErrorMessage(error) {

        if (error instanceof NoEthereumProviderError) {
            if (istrust) {
                console.log('trust')
                const dappUrl = window.location.href; // TODO enter your dapp URL. 
                let metamaskAppDeepLink = "https://link.trustwallet.com/open_url?coin_id=56&url=" + dappUrl;
                window.open(metamaskAppDeepLink)
            }
            else {
                console.log('metamask')
                const dappUrl = window.location.href; // TODO enter your dapp URL. 
                let metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
                window.open(metamaskAppDeepLink)

            }

        }
        if (error instanceof UnsupportedChainIdError) {
            return <span className="btn-text" onClick={(e) => switchNetwork(56)}>
                <img src={wrongNetwork} alt="wrong-network" height="17px" width="17px" className="mx-2" />Wrong Network</span>;
        }

        deactivate(injected);
    }

    const activating = (connection) => connection === activatingConnector;
    const connected = (connection) => connection === connector;

    const switchNetwork = (networkid) => {
        try {
            // @ts-ignore
            window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${networkid.toString(16)}` }]
            });
        } catch (e) {
            console.error(e);
        }
    }

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a href="#sec" onClick={() => {
                            setActivatingConnector();
                            deactivate(injected);
                            deactivate(walletconnect);
                            deactivate(coinbaseWallet);
                            localStorage.remove('address');

                        }} >
                            logout
                        </a>
                    ),
                }
            ]}
        />
    );

    return (
        <React.Fragment>
            <div class="network">
                <img src={bnbImg} width="24" alt="chain-name" />
                <span class="ml-2 hide-on-mobile">BSC MAINNET</span>
            </div>
            {
                error &&
                <Button type="button" className="connectButton" onClick={() => {
                    setActivatingConnector();
                }}>
                    <span className="btn-text">{getErrorMessage(error)}</span>
                </Button>
            }
            {!error &&
                <>


                    {active && (connected(injected) || connected(walletconnect) || connected(coinbaseWallet)) &&
                        <Dropdown overlay={menu} placement="bottom" arrow>
                            <Button type="primary" shape="round" size="large" className="connectButton" >{account && trimAddress(account)}</Button>
                        </Dropdown>
                    }
                    {!active && (!connected(injected) || !connected(walletconnect) || !connected(coinbaseWallet)) &&
                        <Button type="button" className="connectButton" onClick={(e) => showModal(e)}>
                            {/* <img src={walletarrow} width="14px" alt="wallet connect" className='mx-2' /> */}
                            {(activating(injected) || activating(walletconnect) || activating(coinbaseWallet)) && <span className="btn-text">Connecting...</span>}
                            {(!activating(injected) || !activating(walletconnect) || !activating(coinbaseWallet)) && <span className="btn-text">Connect</span>}
                        </Button>
                    }
                </>
            }

            <Modal title="Connect to a wallet" visible={isModalVisible} onCancel={handleCancel} footer={[]}>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card bordered={false}>
                                <div class="ProviderItem_item__2uvZt" onClick={() => {
                                    activate(injected);
                                    setIsModalVisible(false);
                                    setIstrust(false);
                                }}>
                                    <img src={metaMask} alt="metamask" />
                                    <div class="ProviderItem_title__3NYon">Metamask</div>
                                </div>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card bordered={false}>
                                <div class="ProviderItem_item__2uvZt" onClick={() => {
                                    activate(walletconnect);
                                    setIsModalVisible(false);
                                }}>
                                    <img src={wallet} alt="metamask" />
                                    <div class="ProviderItem_title__3NYon">walletconnect</div>
                                </div>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card bordered={false}>
                                <div class="ProviderItem_item__2uvZt" onClick={() => {
                                    activate(coinbaseWallet);
                                    setIsModalVisible(false);
                                }}>
                                    <img src={coinbase} alt="metamask" />
                                    <div class="ProviderItem_title__3NYon">coinbase wallet</div>
                                </div>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card bordered={false}>
                                <div class="ProviderItem_item__2uvZt" onClick={() => {
                                    activate(injected);
                                    setIsModalVisible(false);
                                    setIstrust(true);
                                }}>
                                    <img src={trust} alt="metamask" />
                                    <div class="ProviderItem_title__3NYon">trustwallet</div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </React.Fragment>
    );
};




export default Connect;