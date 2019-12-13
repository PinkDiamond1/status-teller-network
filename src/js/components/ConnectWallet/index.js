import React from "react";
import WalletIcon from "../../../images/wallet.svg";
import RoundedIcon from "../../ui/RoundedIcon";
import PropTypes from 'prop-types';
import { Button } from "reactstrap";
import {withTranslation} from "react-i18next";

const ConnectWallet = ({t, enableEthereum}) => (
  <div className="text-center">
    <RoundedIcon image={WalletIcon} className="mb-3" bgColor="blue" />
    <h2 className="mb-3">{t('connectWallet.title')}</h2>
    <Button color="primary" onClick={enableEthereum}>
      {t('connectWallet.connect')}
    </Button>
  </div>
);

ConnectWallet.propTypes = {
  t: PropTypes.func,
  enableEthereum: PropTypes.func
};

export default withTranslation()(ConnectWallet);
