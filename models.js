const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;

this.bizNetworkConnection = new BusinessNetworkConnection();
this.CONNECTION_PROFILE_NAME = config.get('connectionProfile');
this.businessNetworkIdentifier = config.get('businessNetworkIdentifier');


/*Hyperledger Composer Runtime*/
this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, participantId, participantPwd)
.then((result) => {
  this.businessNetworkDefinition = result;
});

/*Adding assets*/
this.bizNetworkConnection.getAssetRegistry('net.biz.digitalPropertyNetwork.LandTitle')
.then((result) => {
    this.titlesRegistry = result;
});

