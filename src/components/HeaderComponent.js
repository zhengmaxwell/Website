import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavbarToggler, Collapse, NavItem, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';


export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isDropdownOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.mouseOverDropdown = this.mouseOverDropdown.bind(this);
        this.mouseLeaveDropdown = this.mouseLeaveDropdown.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    mouseOverDropdown() {
        this.setState({
            isDropdownOpen: true
        });
    }

    mouseLeaveDropdown() {
        this.setState({
            isDropdownOpen: false
        });
    }

    render() {
        return (
            <React.Fragment>
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
                                    <Dropdown className="d-inline-block" onMouseOver={this.mouseOverDropdown} onMouseLeave={this.mouseLeaveDropdown} isOpen={this.state.isDropdownOpen} nav inNavbar>
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
            </React.Fragment>
        )
    }
}