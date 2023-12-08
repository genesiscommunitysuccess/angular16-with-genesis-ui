import './load.env.mjs';

const convertWsEndpointToHTTP = (endpoint = '', etx = '') => endpoint.replace(/^ws(s)?:\/\//, 'http$1://').replace(`/${etx}`, '');
const socketExt = process.env.SOCKET_EXT || 'gwf';
const target = convertWsEndpointToHTTP(process.env.API_HOST, socketExt);

const genesisProxyConfig = {
  context: [`/${socketExt}/**`, '/sso/**', '/sm/**'],
  target,
  secure: false,
  changeOrigin: true,
  cookieDomainRewrite: 'localhost',
};

export default [
  genesisProxyConfig,
];
