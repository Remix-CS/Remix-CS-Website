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
                <Flex id='mobile-header'alignItems='center'>
                    <img onClick={this.toggleNavbar} className='show-navbar' src='../../static/burger.svg' alt='+' width='35px' />
                    <Link href='/#home-page'><p>Remix<strong>CS</strong></p></Link>
                </Flex>
                <Flex className={this.state.hidden ? 'navbar-wrapper-hidden' : 'navbar-wrapper-visible'} justifyContent='space-between' alignItems='center'>
                    <Link href='/#home-page'><a id='remix-name' className='navbar-link-name'>Remix<strong>CS</strong></a></Link>
                    <div className='navbar'>
                        <img className='hide-navbar' onClick={this.toggleNavbar} src='../../static/x.svg' alt='X' width='20px' />
                        {
                            navbarItems.map(({ name, link }) => (
                                <div onClick={this.toggleNavbar} key={name} className='navbar-link'>
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