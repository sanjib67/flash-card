import React, { Component } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import classNames from 'classnames';
import { Col, Row  } from 'rsuite';

export default class LandingPage extends Component {
  state = {
    sideBar: this.props.sideBar
  };

  componentDidMount() {
    const sideBar = this.state.sideBar;
    sideBar.forEach((eachParent) => {
      eachParent.active = false;
      eachParent.children.forEach((eachChild) => {
        eachChild.active = false;
      });
    });

    let x = this.state.sideBar
      .map((parent, parentIndex) => {
        return parent.children.map((child, childIndex) => {
          return {
            path: child.path,
            name: child.name,
            parent,
            parentIndex,
            childIndex
          };
        });
      })
      .flat()
      .find((eachChild) => {
        return eachChild.path === window.location.pathname;
      });
    sideBar[x.parentIndex].children[x.childIndex].active = true;
    sideBar[x.parentIndex].active = true;
    this.setState({ sideBar: [...sideBar] });
  }
  
  breadCrumbs = () => {
    let allChildren = this.state.sideBar
      .map((parent, parentIndex) => {
        return parent.children.map((child, childIndex) => {
          return {
            path: child.path,
            name: child.name,
            parent,
            parentIndex,
            childIndex
          };
        });
      })
      .flat();
    const data = allChildren.find((eachChild) => {
      return eachChild.path === window.location.pathname;
    });
    return data;
  };

  next = (present) => {
    let allChildren = this.state.sideBar
      .map((parent, parentIndex) => {
        return parent.children.map((child, childIndex) => {
          return {
            path: child.path,
            name: child.name,
            parent,
            parentIndex,
            childIndex
          };
        });
      })
      .flat();

    const presentIndex = allChildren.findIndex((eachChild) => {
      return eachChild.name === present;
    });
    const nextIndex =
      allChildren.length === presentIndex + 1 ? 0 : presentIndex + 1;
    const nextPath = allChildren[nextIndex].path;
    const nextName = allChildren[nextIndex].name;
    const parentIndex = allChildren[nextIndex].parentIndex;
    const childIndex = allChildren[nextIndex].childIndex;

    return {
      nextIndex,
      nextPath,
      nextName,
      parentIndex,
      childIndex
    };
  };

  onParentClick = (parent, index) => {
    const sideBar = this.state.sideBar;
    sideBar[index].active = !sideBar[index].active;
    this.setState({ sideBar: [...sideBar] });
  };

  onChildClick(index, childIndex) {
    const sideBar = this.state.sideBar;
    sideBar.forEach((eachParent) => {
      eachParent.children.forEach((eachChild) => {
        eachChild.active = false;
      });
    });
    sideBar[index].children[childIndex].active = true;
    this.setState({ sideBar: [...sideBar] });
  }

  render() {
    return (
      <div>
        <section
          hidden={window.location.pathname === '/'}
          className='breadcrumbs-section'>
          <div className='container'>
            <div className='breadcrumbs'>
              <p>
                <span>Support Landing</span>{' '}
                <span>{this.breadCrumbs()?.parent?.name}</span>{' '}
                <a>{this.breadCrumbs()?.name}</a>
              </p>
            </div>
          </div>
        </section>
        <section className='page-section' id='services'>
          <div className='container'>
            <div className='page-content'>
              <div
                hidden={window.location.pathname.indexOf('landing-page') === -1}
                className='col-sidebar'>
                <div className='vertical-menu'>
                  <ul>
                    {this.state.sideBar.map((parent, index) => {
                      return (
                        <li
                          key={parent.name}
                          className={classNames({
                            active: parent.active
                          })}>
                          <a onClick={() => this.onParentClick(parent, index)}>
                            {parent.name}
                          </a>
                          <ul>
                            {parent.children.map((children, childIndex) => {
                              return (
                                <li
                                  key={children.name}
                                  onClick={() =>
                                    this.onChildClick(index, childIndex)
                                  }
                                  className={classNames({
                                    active: children.active
                                  })}>
                                  <Link to={children.path}>
                                    {children.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <Switch>
                <Route exact path='/landing-page'>
                  <Redirect to='/landing-page/overview' />
                </Route>
                {this.state.sideBar.map((parent) => {
                  return parent.children.map((children) => {
                    return (
                      <Route
                        path={children.path}
                        render={() => {
                          return (
                            <div className='col-main-content'>
                              <Row>
                                <Col xs={24} sm={12} md={8}></Col>
                                <Col xs={24} sm={12} md={8}>
                                  <div className='mr-auto'>
                                    {/* <HelpfulButtons /> */}
                                  </div>
                                </Col>
                                <Col xs={24} sm={12} md={8}>
                                  <Row>
                                    <Col xs={24} sm={12} md={12}>
                                      <Link
                                        to={this.next(children.name).nextPath}
                                        onClick={() => {
                                          this.onChildClick(
                                            this.next(children.name)
                                              .parentIndex,
                                            this.next(children.name).childIndex
                                          );
                                        }}
                                        className='btn btn-outline-primary btn-arrow'>
                                        Next
                                      </Link>
                                    </Col>
                                    <Col xs={24} sm={12} md={12}>
                                      <span className='next-page-title'>
                                        {(this.next(children.name).parentIndex===1?'Market Definition ':'')+this.next(children.name).nextName}
                                      </span>
                                    </Col>
                                  </Row>
                                  <div className='next-page'>
                                    <p> </p>
                                  </div>
                                </Col>
                              </Row>
                              <children.component />
                            </div>
                          );
                        }}
                        exact={true}
                      />
                    );
                  });
                })}
              </Switch>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
