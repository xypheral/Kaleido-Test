const axios = require('axios');
const abi = require('ethereumjs-abi');

const rpcEndpoint = 'https://a0xbwc6zz9-a0evxo8yvh-rpc.au0-aws.kaleido.io/';
const username = 'a0tgyoyvye';
const password = 'BvxnWTKoSDkHE31LQfPD_2nX3jZpoAtLpkN6CSwy5Ag';

async function registerUser(name, phoneNumber) {
  const encodedFunctionCall = abi.simpleEncode('registerUser(string,uint256)', name, phoneNumber);
  
  const data = {
    jsonrpc: '2.0',
    method: 'eth_sendTransaction',
    params: [{
      from: '0x5674416ed9a520d871453365fe98bd5bcbf95193',
      to: '0x910cc0c5bde3a8ec5093c613874fd3413387a020',
      data: '0x' + encodedFunctionCall.toString('hex')
    }],
    id: 1
  };

  const response = await axios.post(rpcEndpoint, data, {
    auth: {
      username: username,
      password: password
    }
  });

  console.log(response.data);
}

registerUser('Sherman', '99887744');