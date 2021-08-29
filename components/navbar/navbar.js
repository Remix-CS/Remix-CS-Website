import react from 'react';
import Link from 'next/link';
import './navbar.css';
import { Box, Image, Flex } from 'rebass';
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
            <div style={{display: 'inline-block'}}>
                <Flex className='mobile-header'alignItems='center'>
                    <img onClick={this.toggleNavbar} className='show-navbar' src='../../static/burger.png' alt='+' width='35px' />
                    <p>Remix<strong>CS</strong></p>
                </Flex>
                <Flex className={this.state.hidden ? 'navbar-wrapper-hidden' : 'navbar-wrapper-visible'} justifyContent='space-between' alignItems='center'>
                    <p className='remix-name'>Remix<strong>CS</strong></p>
                    <div className='navbar'>
                        <img className='hide-navbar' onClick={this.toggleNavbar} src='../../static/x.png' alt='X' width='20px' />
                        {
                            navbarItems.map(({ name, link }) => (
                                <div key={name} className='navbar-link'>
                                    <Link href={link} ><a className='navbar-link-name'>{name}</a></Link>
                                </div>
                            ))
                        }
                    </div>
                </Flex>
            </div>
        )
    }
}


export default navbar;