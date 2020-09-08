import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavbarToggler, Collapse, NavItem, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron} from 'reactstrap';
import * as $ from 'jquery'


export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isDropdownOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.mouseOverDropdown = this.mouseOverDropdown.bind(this);
        this.mouseLeaveDropdown = this.mouseLeaveDropdown.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleDropdown() {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    }

    mouseOverDropdown() {
        if ($(window).width() > 1200){
            this.setState({
                isDropdownOpen: true
            });
        }
    }

    mouseLeaveDropdown() {
        if ($(window).width() > 1200){
            this.setState({
                isDropdownOpen: false
            });
        }
    }

    render() {
        
        return (
            <div>
                <Navbar color="dark" expand="md">
                    <Container>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem className="nav-link">
                                    <NavLink href="#">Home</NavLink>
                                </NavItem>
                                <NavItem className="nav-link">
                                    <NavLink href="#">About Me</NavLink>
                                </NavItem>
                                <NavItem className="nav-link">
                                    <NavLink href="#">Education</NavLink>
                                </NavItem>
                                <NavItem className="nav-link">
                                    <Dropdown className="d-inline-block" onMouseOver={this.mouseOverDropdown} onMouseLeave={this.mouseLeaveDropdown} isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown} nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Experience
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdownMenu">
                                            <DropdownItem>
                                                Industry
                                            </DropdownItem>
                                            <DropdownItem>
                                                Research
                                            </DropdownItem>
                                            <DropdownItem>
                                                Teams
                                            </DropdownItem>
                                            <DropdownItem>
                                                Projects
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                                <NavItem className="nav-link">
                                    <NavLink href="#">Contact Me</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Jumbotron>
                    <h1>Maxwell Zheng</h1>
                </Jumbotron>
            </div>
        )
    }
}