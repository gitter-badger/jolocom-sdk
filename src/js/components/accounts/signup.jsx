import React from 'react'
import Reflux from 'reflux'
import Radium from 'radium'
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import {RaisedButton} from 'material-ui'
import {History, Link} from 'react-router'

import Availability from 'actions/availability'
import AvailabilityStore from 'stores/availability'

import Account from 'actions/account'
import AccountStore from 'stores/account'

let Signup = React.createClass({
  mixins: [
    History,
    Reflux.connect(AvailabilityStore, 'available'),
    Reflux.connect(AccountStore, 'account')
  ],
  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  errorMessages: {
    alphaNumeric: 'Please only use letters and numbers',
    email: 'Please provide a valid email',
    name: 'Please enter a valid name',
    unavailable: 'This username is already taken'
  },

  getInitialState() {
    return {
      disabledSubmit: true
    }
  },

  componentWillMount() {
    if (this.state.account && this.state.account.username)
      this.history.pushState(null, '/graph')
  },

  signup() {
    let signupData = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email ,
			password: this.state.password
    } 

    Account.signup(signupData)
  },

  componentDidUpdate() {
    if (this.state.account && this.state.account.username) {
      this.history.pushState(null, '/graph')
    }
  },

  enableSubmit() {
    this.setState({disabledSubmit: false})
  },

  disableSubmit() {
      this.setState({disabledSubmit: true})
  },

  _onUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
    Availability.check(e.target.value)
  },

  _onNameChange(e) {
    this.setState({
      name: e.target.value
    })
  },

  _onEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  },

  _onPasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  },

  getStyles() {
    let {muiTheme} = this.context
    let styles = {
      container: {
        textAlign: 'center',
        background: '#f1f1f1',
        height: '100%',
        overflowY: 'auto'
      },
      header: {
        padding: '40px'
      },
      logo: {
        fontSize: '18px',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '24px',
        textTransform: 'uppercase'
      },
      logoImg: {
        width: '32px',
        height: '32px',
        verticalAlign: 'middle'
      },
      title: {
        fontWeight: '200',
        fontSize: '20px'
      },
      content: {
        width: '300px',
        maxWidth: '90%',
        padding: '20px',
        margin: '0 auto 20px auto',
        boxSizing: 'border-box'
      },
      button: {
        width: '100%'
      },
      help: {
        color: muiTheme.jolocom.gray1
      },
      link: {
        color: muiTheme.palette.accent1Color,
        fontWeight: 'bold'
      }
    }

    return styles
  },

  handleClick() {
    Account.signup()
  },

	render() {
	let styles = this.getStyles()
	return (
		<div style={styles.container}>
			<div style={styles.logo}><img src="/img/logo.png" style={styles.logoImg}/> Jolocom</div>
			<div style={styles.content}>
				<Formsy.Form
					onValid={this.enableSubmit}
					onInvalid={this.disableSubmit}
					onValidSubmit={this.signup}
					>
					<div style={{marginBottom: '20px'}}>
						<FormsyText name="username"
							floatingLabelText="Username"
							validations="isAlphanumeric"
							validationError={this.errorMessages.alphaNumeric}
							onChange={this._onUsernameChange}
							/>
						<FormsyText name="password"
							floatingLabelText="Password"
							onChange={this._onPasswordChange}
							/>
						<FormsyText name="name"
							floatingLabelText="Name"
							validations="isWords"
							validationError={this.errorMessages.name}
							onChange={this._onNameChange}
							/>
						<FormsyText name="email"
							floatingLabelText="Email"
							validations="isEmail"
							validationError={this.errorMessages.email}
							onChange={this._onEmailChange}
							/>
					</div>

					<RaisedButton type="submit" secondary={true} disabled={this.state.disabledSubmit} style={styles.button} label="Sign up"/>
				</Formsy.Form>
			</div>

			<p style={styles.help}>Already have an account? <Link to="/login" style={styles.link}>login instead</Link>.</p>
		</div>
	)
}
})

export default Radium(Signup)
