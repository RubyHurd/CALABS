import React from "react";
import { Redirect, Link } from 'react-router-dom';

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			userType: "",
			loggedIn: false
		};
	}
	render() {
		if (this.props.loggedIn) {
			if (this.props.userType) {
				if (this.props.userType === "manager") {
					return (
						<div>
							<Redirect to="/ManagerHome" />
						</div>
					)
				}
				else if (this.props.userType === "employee") {
					return (
						<div>
							<Redirect to="/EmployeeHome" />
						</div>
					)
				}
			}
		}
		return (
			<div className="row">
				<div className="section no-pad-bot" id="index-banner">
					<div className="container">
						<br></br>
						<h1 className="header center light-blue-text"><img src="./assets/images/calabs_logo_250.png" ></img></h1>
						<div className="row center">
							<h5 className="header col s12 light">Keeping your labs covered with ease.</h5>
						</div>
						<div className="row center">
							<Link to="/signup" id="signup-btn" className="btn-large waves-effect waves-light light-blue">
								Get Started
				</Link>
						</div>
						<br></br>
					</div>
				</div>
				<div className="container">
					<div className="section">
						<div className="row">
							<div className="col s12 m4">
								<div className="icon-block">
									<h2 className="center light-blue-text"><i className="material-icons home">event</i></h2>
									<h5 className="center">Quick Scheduling</h5>
									<p className="light"> An easy-to-use online shift scheduling management app with announcement feature to keep everyone informed of updates. </p>
								</div>
							</div>
							<div className="col s12 m4">
								<div className="icon-block">
									<h2 className="center light-blue-text"><i className="material-icons home">supervisor_account</i></h2>
									<h5 className="center">Real-Time Updating</h5>
									<p className="light">Managers can Add, Remove or Update employees, and their schedules, also managers can add an announcement to all employees. CALABS automatically shows all changes in real time.</p>
								</div>
							</div>
							<div className="col s12 m4">
								<div className="icon-block">
									<h2 className="center light-blue-text"><i className="material-icons home">touch_app</i></h2>
									<h5 className="center">Simple to Use</h5>
									<p className="light">With the CALABS scheduler App, Managers can quickly see who’s working, who is scheduled and who is available. </p>
								</div>
							</div>
						</div>
					</div>
					<br></br>
				</div>
				<footer className="page-footer black">

					<div className="footer-copyright">
						<div className="container">
							<div className="col  s12 white-text credits">
								Created by <a href="https://github.com/margaritag17" target="_blank" >Margarita</a> | <a href="https://github.com/RubyHurd" target="_blank" >Ruby</a> | <a href="https://github.com/susieotto" target="_blank" >Susie</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
export default Main;
