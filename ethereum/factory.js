import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// next app reference to env variables through next.config file 
// here the address is the deployed address of the contract

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  process.env.DEPLOYED_ADDRESS
);

export default instance;
