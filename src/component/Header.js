import React , {useContext} from 'react'
import logoImg from '../assets/images/logo.png';
import closeImg from '../assets/images/close.png';
import { Link } from 'react-router-dom';
import { Context } from "../context/context";


export default function Header() {
    const { mobileOpen , setMobileOpen , setSidebarOpen } = useContext(Context);

    return (
        <div class={`dashboard-nav ${mobileOpen ? 'mobile-show' : ''}`}>
            <header>
                <a href="#sec" class="brand-logo">
                    <img src={logoImg} alt="logo" className='mr-3' height="50" width="50" />
                    <span>PinkSale</span>
                </a>
                <a href='#sec' class="menu-toggle" onClick={()=> { 
                    setSidebarOpen(false);
                    setMobileOpen(!mobileOpen);
                }}>
                    <img src={closeImg} alt="close" height={25} width={25} />
                </a>
            </header>
            <nav class="dashboard-nav-list">
                <Link to="/" class="dashboard-nav-item active">
                    <i class="fas fa-home"></i>
                    Home
                </Link>
                <div class='dashboard-nav-dropdown'>
                    <a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle">
                        <i class="fas fa-rocket"></i> Launchpads
                    </a>

                    <div class='dashboard-nav-dropdown-menu'>
                        <Link to="/launchpad/create" class="dashboard-nav-dropdown-item">
                            <i class="fas fa-location-arrow mr-1"></i>Create launchpad
                        </Link>
                        <a href="#sec" class="dashboard-nav-dropdown-item">
                            <i class="fas fa-location-arrow mr-1"></i>Create Private Sale
                        </a>
                        <a href="#sec" class="dashboard-nav-dropdown-item">
                            <i class="fas fa-location-arrow mr-1"></i>Create fair launch
                        </a>
                        <Link to="/launchpad/create_token" class="dashboard-nav-dropdown-item">
                            <i class="fas fa-location-arrow mr-1"></i>Create token
                        </Link>
                        <Link to="/launchpad/launchpad_list" class="dashboard-nav-dropdown-item">
                            <i class="fas fa-location-arrow mr-1"></i>Launchpad list
                        </Link>
                    </div>
                </div>

                <div class='dashboard-nav-dropdown'>
                    <a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle">
                        <i class="fas fa-lock"></i> PinkLock
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <Link to="/pink_lock/create_lock" class="dashboard-nav-dropdown-item">
                            <i class="fas fa-location-arrow mr-1"></i>Create Lock
                        </Link>
                        <Link to="/pink_lock/token" class="dashboard-nav-dropdown-item">
                            <i class="fas fa-location-arrow mr-1"></i>Token
                        </Link>
                        <Link to="/pink_lock/liquidity" class="dashboard-nav-dropdown-item">
                            <i class="fas fa-location-arrow mr-1"></i>Liquidity
                        </Link>
                    </div>
                </div>

                <Link to="/multi_sender" class="dashboard-nav-item">
                    <i class="fas fa-arrows-alt"></i> Multi-Sender
                </Link>
                <a href="#!" class="dashboard-nav-item">
                    <i class="fas fa-inbox"></i> Docs
                </a>
                {/* <a href="#sec" class="dashboard-nav-item">
                    <i class="fas fa-file-upload"></i>
                    Upload
                </a>
                <div class='dashboard-nav-dropdown'>
                    <a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle">
                        <i class="fas fa-photo-video"></i> Media
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <a href="#sec" class="dashboard-nav-dropdown-item">All</a>
                        <a href="#sec" class="dashboard-nav-dropdown-item">Recent</a>
                        <a href="#sec" class="dashboard-nav-dropdown-item">Images</a>
                        <a href="#sec" class="dashboard-nav-dropdown-item">Video</a>
                    </div>
                </div>
                <div class='dashboard-nav-dropdown'>
                    <a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                        class="fas fa-users"></i> Users </a>
                    <div class='dashboard-nav-dropdown-menu'><a href="#sec"
                        class="dashboard-nav-dropdown-item">All</a><a
                            href="#sec" class="dashboard-nav-dropdown-item">Subscribed</a><a
                                href="#sec"
                                class="dashboard-nav-dropdown-item">Non-subscribed</a><a
                                    href="#sec" class="dashboard-nav-dropdown-item">Banned</a><a
                                        href="#sec" class="dashboard-nav-dropdown-item">New</a></div>
                </div>
                <div class='dashboard-nav-dropdown'>
                    <a href="#!" class="dashboard-nav-item dashboard-nav-dropdown-toggle">
                        <i class="fas fa-money-check-alt"></i>
                        Payments
                    </a>
                    <div class='dashboard-nav-dropdown-menu'>
                        <a href="#sec" class="dashboard-nav-dropdown-item">All</a>
                        <a href="#sec" class="dashboard-nav-dropdown-item">Recent</a>
                        <a href="#sec" class="dashboard-nav-dropdown-item"> Projections</a>
                    </div>
                </div>
                <a href="#sec" class="dashboard-nav-item">
                    <i class="fas fa-cogs"></i>
                    Settings
                </a>
                <a href="#sec" class="dashboard-nav-item">
                    <i class="fas fa-user"></i>
                    Profile
                </a>
                <div class="nav-item-divider"></div>
                <a href="#sec" class="dashboard-nav-item">
                    <i class="fas fa-sign-out-alt"></i>
                    Logout
                </a> */}
            </nav>
        </div >
    )
}
