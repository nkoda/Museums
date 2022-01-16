import * as https from "https";
import * as fs from "fs";

export class NftData {

    // constructor() {
    //     this.collection = null;
    // }

    // Returns JSON object including most updated date and array of NFT collections
    getAllContractAddresses() {
        let encoded = "https://api.covalenthq.com/v1/137/tokens/tokenlists/all/?key=ckey_99de0aa6e5c74c6aa3a6162f503";

        return new Promise((resolve, reject) => {
            https.get(encoded, (res) => {
                let {statusCode} = res;
                if (statusCode !== 200) {
                    res.resume();
                    reject(new Error("Error: Status Code is not 200"));
                }
                res.setEncoding("utf8");
                let rawData = "";
                res.on("data", (chunk) => {
                    rawData += chunk;
                });
                res.on("end", () => {
                   try {
                       let data = JSON.parse(rawData);
                       let items = data.data.items;
                       let addresses = [];
                       for (let i = 0; i < items.length; i++) {
                           addresses.push(items[i].contract_address);
                       }
                       resolve(addresses);
                   } catch (error) {
                       reject(new Error("Error: Error in parsing"));
                   }
                }).on("error", () => {
                    reject(new Error("Error: Request Failed"));
                });
            });
        });
    }

    getTokenID(address) {
        let encoded = "";
    }

    writeData(data) {
        let path = "./data/" + data.updated_at + ".json";
        try {
            fs.writeFileSync(path, JSON.stringify(data.items));
            return Promise.resolve("Successfully written into file");
        } catch (error) {
            return Promise.reject(new Error("Error: Unable to write into file"));
        }
    }
}