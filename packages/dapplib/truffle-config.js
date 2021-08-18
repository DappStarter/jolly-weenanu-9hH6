require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture student razor noble slow hover praise army gesture'; 
let testAccounts = [
"0xed2e55f6cd2b32bb37cd7213ba8d7e01cde23e4879d8d7bb0b5a2bd989f833b4",
"0xe71d5435a483bd8a54ffde5244c80725be3c339b19cdef0cc44abbe11abe83a9",
"0x2ca52b56525c5b6ba6dbdcdd17d809189edb1ffa1e0c7bbdea1cb94d819716ed",
"0x922bcbe95df9808f26ba271065b4666b2bdb78f665d64e57e3b3e0f1b8f72b4d",
"0x1b5324bc13c7b36229da21735d72127d63cbb35335d0937ff014af1a3e45bb71",
"0x2c20fb46b31fa02310ae7c772fccf0535d7398c889e466629f05e286a3d69db9",
"0x224909462c545bccdd9fe484f521e1ec776988692ff9e395d179705e7b568e87",
"0x9a12e408b4c1a79097a043a4844153f0735c04e8ae14d6451780814e8d42a138",
"0x04ee3d20e03c78bb106cf62d9d807b43a02b354bfa5f3d1f0278ee5633ab4363",
"0xebb9545493279476c1ff93ed0116906fa99282525d278266282b01acc2c13da1"
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
            version: '^0.8.0'
        }
    }
};

