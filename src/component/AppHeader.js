import React , {useContext} from 'react';
import Connect from '../component/Connect';
import { Context } from "../context/context";
import {isMobile} from 'react-device-detect';

export default function AppHeader() {
    const { setSidebarOpen , sidebarOpen , setMobileOpen , mobileOpen } = useContext(Context);
    return (
        <header class='dashboard-toolbar d-flex justify-content-between'>
            <a href='#sec'  class="menu-toggle" onClick={()=> {
                if(isMobile){   
                    setSidebarOpen(false);
                    setMobileOpen(!mobileOpen);
                }
                else{
                    setSidebarOpen(!sidebarOpen);
                    setMobileOpen(false);
                }
            }} >
                <i class="fas fa-bars"></i>
            </a>
            <div className='connect-div'>
                <Connect />
            </div>
        </header>
    )
}
