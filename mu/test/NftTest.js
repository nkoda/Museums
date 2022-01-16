import { strict as assert } from 'assert';
import {getAllNftObjects, getNFTObject} from "../src/controller/NftData.js";
import {writeData} from "../src/controller/DataManager.js";
// 0x7f36182dee28c45de6072a34d29855bae76dbe2f --- 7781

describe ("NftData", function() {
   describe ("getNftObject", function() {
       it ("Should return a Nft Object", async function() {
           return getNFTObject("0xFdB3e529814Afc5DF5A5faF126989683B17DaEf9", "3684")
               .then((result) => { assert.deepStrictEqual(result, {
                   name: 'Doodlesaur #3684',
                   collection: 'Doodlesaurs',
                   token_id: '3684',
                   contract_address: '0xFdB3e529814Afc5DF5A5faF126989683B17DaEf9',
                   image: 'https://storage.googleapis.com/doodlesaurs/images/eqa51q3375az.png',
                   owner: '0xb654c2002896268e6048680ad3110ef1717208ef'
               })
               });
       });
   });

   describe("getAllNftObjects", function() {
      it ("Should return an array of Nft Objects", async function() {
          return getAllNftObjects()
              .then((result) => console.log(result));
      }).timeout(10000);
   });

   describe("writeData", function() {
       it ("Should write into file", async function() {
          return getAllNftObjects()
              .then((result) => writeData("nftObjects", result))
              .then((result) => console.log(result));
       }).timeout(10000);
   })
});