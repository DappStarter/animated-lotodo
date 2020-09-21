require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remember mistake inner kite bridge giant'; 
let testAccounts = [
"0x458fdce9db3b4bf4f572ecf10fa8afaf1afabfea4c08ff4a4a14cc944051e2ce",
"0xb4d066885196ce25f8079d5adb7250c6a78961008a57a93bbc52a7e2c843b53f",
"0x189499ae96de64d157989363eba75e813aba27db3181fd8789ba106382313430",
"0x319ed6b92d1531c47237e502b248fed201703f61e66cf9ad7c2413d8f8277378",
"0x28ecda5b156c29069c1dc750be15277b647b127c8c9fb9eb408943d89545e493",
"0x4ece3a8aecbc1760ebc4b9da78d0d39079977e3bdd8124971216da1f45f0e34e",
"0x531fec6d97338cd79405813d6156e57459b734cbc405a559ae0890e5d957e93c",
"0x9cd84dcd41da2163367111be1edab435c8c9cc44bd068928df0fdcf98ba27460",
"0xb83aa49b17a551730781ed6422764657a0270ebbe6372e450010e480d29ba33b",
"0x0425d0f8838714cb8a2f5c78775d0bf1aa1a0aea59a06ec50edef86d8a72968c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
