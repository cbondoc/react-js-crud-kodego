import loginPictture from '../assets/images/undraw_remotely_2j6y.svg';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap';
import logoUrl from '../assets/images/logo.png';
import { React, Component } from "react";
import axios from "axios";

class Login extends Component {
    state = {
        form: { id: '', employee_id: '', first_name: '', last_name: '', email: '', password: '', privilege: '' },
    };

    //Note: Linked to the input fields of firstName, lastName and email
    handleChange = event => {
        const { name, value } = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({ form });
    }

    getLogin = (event) => {
        console.log("trigger")
        this.props.onFormLogin(this.state.form)
        event.preventDefault();
    };

    isEmpty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && !this.isEmpty(this.props.login)) {
            this.setState({
                form: { ...this.props.login, isEdit: true },
            });
            //console.log("Update");
        }
    }

    render() {
        const { id, employee_id, first_name, last_name, email, password, privilege } = this.props.login;
        return (
            <>
                <Container>
                    <Row className="d-none d-md-block mt-2 pt-2">
                    </Row>
                    <Row className="d-none d-md-block mt-2 pt-2">
                    </Row>
                    <Row className="d-none d-md-block mt-2 pt-2">
                    </Row>
                    <Row className="">
                        <Col xs={12} md={{ span: 8, offset: 2 }} className="contents text-center">
                            <h3>
                                <a className="navbar-brand">
                                    <img src={logoUrl} height="100" alt="SPEDI Logo" />
                                </a>
                                SPEDI Construction, Inc
                            </h3>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col lg={{ span: 4, offset: 2 }} className="d-none d-md-none d-lg-block">
                            <img src={loginPictture} alt="Login Picture" className="img-fluid" width={350} />
                        </Col>
                        <Col md={12} lg={{ span: 4 }} className="contents">
                            <Row className="justify-content-center">
                                <Col md={{ span: 10 }} className="contents">
                                    <h5>Attendance Monitoring System</h5>
                                    <p className="mb-4">For all your technical concerns, kindly email the support team at <a href="mailto:support@spediph.com">support@spediph.com</a>.</p>
                                    <Form>

                                        <FloatingLabel
                                            controlId="floatingInputEmployeeID"
                                            label="Company Email Address"
                                            className="mb-1"
                                        >
                                            <Form.Control
                                                type="text"
                                                name="email"
                                                placeholder='Company Email Address'
                                                onChange={this.handleChange}
                                                value={this.state.form.email}
                                            />
                                        </FloatingLabel>


                                        <FloatingLabel
                                            controlId="floatingInputEmployeeID"
                                            label="Password"
                                            className="mb-1"
                                        >
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Company Password"
                                                onChange={this.handleChange}
                                                value={this.state.form.password}
                                            />
                                        </FloatingLabel>



                                        <div className="d-grid mt-3 mb-3">
                                            <button type="button"
                                                className="btn btn-outline-info"
                                                onClick={this.getLogin}>
                                                Sign In
                                            </button>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

}
export default Login;


