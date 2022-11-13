import { createContext, useState } from 'react';

export const Context = createContext();

export const launchpad_default = {
    step : 0, 
    maxStep : 4,
    tokenAddress : "",
    tokenSymbol : "",
    tokenName : "",
    tokenDecimal : "",
    feesType : 1,
    isApprove : false,
    presalerate : 0,
    whitelist : 2,
    softcap : 0,
    hardcap : 0,
    minbuy : 0 ,
    maxbuy : 0,
    refund : 1,
    routeraddress : "",
    liquidity : 0,
    listingrate : 0,
    starttime : new Date(),
    endtime : new Date(),
    llockup : 0,
    isVesting : false,
    firstrelease : 0,
    cycle : 0,
    eachcycleper : 0,
    logourl : "",
    website : "",
    facebook : "",
    twitter : "",
    github : "",
    telegram : "",
    instagram : "",
    discord : "",
    reddit : "",
    youtube : "",
    brief : "",
    partnerAddress : [],
    kyc : false,
    audit : false,
    totalCost : 0,
    totaltoken : 0,
    usermail : '',
    auditlink : '',
    kyclink : '',
}


export const ContextProvider = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [launchpad,setLaunchpad] = useState(launchpad_default);
   
    return (
        <Context.Provider
            value={{
                mobileOpen,
                sidebarOpen,
                launchpad,
                setMobileOpen,
                setSidebarOpen,
                setLaunchpad
            }}
        >{children}</Context.Provider>
    )
}

