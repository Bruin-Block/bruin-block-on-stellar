const account = new PasskeyKit({
    rpcUrl: env.PUBLIC_rpcUrl,
    networkPassphrase: env.PUBLIC_networkPassphrase,
    factoryContractId: env.PUBLIC_factoryContractId,
});
var StellarSdk = require('@stellar/stellar-sdk');