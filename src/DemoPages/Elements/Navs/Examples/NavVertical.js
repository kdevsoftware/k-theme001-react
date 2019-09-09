import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  Dropdown,
  DropdownMenu
} from 'reactstrap';

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavsVertical extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Row>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Vertical Menu</CardTitle>
                  <Row>
                    <Col>
                      <Nav vertical>
                        <NavItem>
                          <NavLink href="#">Link</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">
                            Link
                            <div className="ml-auto badge badge-success">
                              New
                            </div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">
                            Another Link
                            <div className="ml-auto badge badge-warning">
                              512
                            </div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink disabled href="#">
                            Disabled Link
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col>
                      <Nav vertical>
                        <NavItem>
                          <NavLink href="#">
                            <i className="nav-link-icon lnr-inbox"> </i>
                            <span>Inbox</span>
                            <div className="ml-auto badge badge-pill badge-secondary">
                              86
                            </div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">
                            <i className="nav-link-icon lnr-book"> </i>
                            <span>Book</span>
                            <div className="ml-auto badge badge-pill badge-danger">
                              5
                            </div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">
                            <i className="nav-link-icon lnr-picture"> </i>
                            <span>Picture</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink disabled href="#">
                            <i className="nav-link-icon lnr-file-empty"> </i>
                            <span>File Disabled</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                  </Row>
                  <div className="divider" />
                  <div className="text-center">
                    <UncontrolledButtonDropdown direction="down">
                      <DropdownToggle
                        caret
                        className="mb-2 mr-2"
                        color="primary"
                      >
                        Dropdown Basic
                      </DropdownToggle>
                      <DropdownMenu>
                        <Nav vertical>
                          <NavItem>
                            <NavLink href="#">Link</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">
                              Link
                              <div className="ml-auto badge badge-success">
                                New
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">
                              Another Link
                              <div className="ml-auto badge badge-warning">
                                512
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink disabled href="#">
                              Disabled Link
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <Dropdown
                      direction="down"
                      className="d-inline-block"
                      onMouseOver={this.onMouseEnter}
                      onMouseLeave={this.onMouseLeave}
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggle}
                    >
                      <DropdownToggle
                        caret
                        color="primary"
                        className="mb-2 mr-2"
                      >
                        Dropdown Hover
                      </DropdownToggle>
                      <DropdownMenu>
                        <Nav vertical>
                          <NavItem>
                            <NavLink href="#">
                              <i className="nav-link-icon lnr-inbox"> </i>
                              <span>Inbox</span>
                              <div className="ml-auto badge badge-pill badge-secondary">
                                86
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">
                              <i className="nav-link-icon lnr-book"> </i>
                              <span>Book</span>
                              <div className="ml-auto badge badge-pill badge-danger">
                                5
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">
                              <i className="nav-link-icon lnr-picture"> </i>
                              <span>Picture</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink disabled href="#">
                              <i className="nav-link-icon lnr-file-empty"> </i>
                              <span>File Disabled</span>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default NavsVertical;
