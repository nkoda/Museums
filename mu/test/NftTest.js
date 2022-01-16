import { strict as assert } from 'assert';
import {NftData} from "../src/controller/NftData.js";

describe ("NftData", function() {
   describe ("getAllCollections", function() {
       it ("Should return all collections", async function() {
           let nftData = new NftData();
           return nftData.getAllCollections().then((result) => {
               assert.equal(result,"Successful");
           });
       });
   });
});