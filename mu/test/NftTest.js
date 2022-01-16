import { strict as assert } from 'assert';
import {NftData} from "../src/controller/NftData.js";

describe ("NftData", function() {
   describe ("getAllContractAddresses", function() {
       it ("Should return all collections", async function() {
           let nftData = new NftData();
           return nftData.getAllContractAddresses().then((result) => {

           });
               // .then((result) => nftData.writeData(result))
               // .then((result) => assert.equal(result, "Successfully written into file"));
       });
   });
});