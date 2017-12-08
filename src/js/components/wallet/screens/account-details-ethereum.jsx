import PropTypes from 'prop-types';
import React from 'react'
import {connect} from 'redux_state/utils'
import Presentation from '../presentation/account-details-ethereum'

@connect({
  props: ['wallet.money'],
  actions: ['wallet/ether-tabs:closeAccountDetails']
})
export default class AccountDetailsEthereum extends React.Component {
  static propTypes = {
    closeAccountDetails: PropTypes.func,
    money: PropTypes.object
  }

  render() {
    return (
      <Presentation
        onClose={this.props.closeAccountDetails}
        wallet={this.props.money} />
    )
  }
}
