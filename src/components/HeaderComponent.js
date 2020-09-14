import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavbarToggler, NavbarBrand, Collapse, NavItem, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
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
        this.affixNav = this.affixNav.bind(this);
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
    
    affixNav() {
        $(document).ready(function() {

            var toggleAffix = function(affixElement, scrollElement, wrapper) {
                var top = wrapper.offset().top;
              
                if (scrollElement.scrollTop() >= top) {
                    affixElement.addClass("sticky");
                    affixElement.removeClass("hidden")
                } else {
                    affixElement.addClass("hidden");
                    affixElement.removeClass("sticky");
                }
            };
            
            $('[data-toggle="sticky"]').each(function() {
                var ele = $(this);
                var wrapper = $('<div></div>');
                ele.before(wrapper);
                $(window).on('scroll resize', function() {
                    toggleAffix(ele, $(this), wrapper);
                });
            });
        });
    }

    render() {
        {this.affixNav()}
        return (
            <React.Fragment>
                <Navbar id="navbar" color="dark" expand="md" data-toggle="sticky">
                    <Container>
                        <NavbarBrand href=".title">MZ</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem className="nav-link">
                                    <NavLink href="#about">About Me</NavLink>
                                </NavItem>
                                <NavItem className="nav-link">
                                    <NavLink href="#education">Education</NavLink>
                                </NavItem>
                                <NavItem className="nav-link">
                                    <Dropdown className="d-inline-block" onMouseOver={this.mouseOverDropdown} onMouseLeave={this.mouseLeaveDropdown} isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown} nav inNavbar>
                                        <DropdownToggle nav caret>Experience</DropdownToggle>
                                        <DropdownMenu className="dropdownMenu">
                                            <DropdownItem>
                                                <NavLink href="#experiences">Industry</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink href="#projects">Projects</NavLink>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                                <NavItem className="nav-link">
                                    <NavLink href="#contact">Contact Me</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar><br/>
            </React.Fragment>
        );
    }
}