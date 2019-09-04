import react from 'react';
import Link from 'next/link';
import './navbar.css';
import { Box, Image } from 'rebass';
import { navbarItems } from './navbar.json';

class navbar extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            hidden: !this.state.hidden
        });
    };

    render() {
        return (
            <div>
                <div className='mobile-header'>
                    <img onClick={this.toggleNavbar} className='show-navbar' src='https://icon.now.sh/burger/E3E9F4/30' alt='+' />
                    <p>Remix<strong>CS</strong></p>
                </div>
                <div className={this.state.hidden ? 'navbar-wrapper-hidden' : 'navbar-wrapper-visible'}>
                    <p className='remix-name'>Remix<strong>CS</strong></p>
                    <div className='navbar'>
                        <img className='hide-navbar' onClick={this.toggleNavbar} src='https://icon.now.sh/x/E3E9F4/30' alt='X' />
                        {
                            navbarItems.map(({ name, link }) => (
                                <div key={name} className='navbar-link'>
                                    <Link href={link} ><a className='navbar-link-name'>{name}</a></Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default navbar;