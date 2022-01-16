import * as https from "https";
import * as fs from "fs";

export class NftData {

    // constructor() {
    //     this.collection = null;
    // }

    // Returns JSON object including most updated date and array of NFT collections
    getAllCollections() {
        let encoded = "https://api.covalenthq.com/v1/1/nft_market/?key=ckey_99de0aa6e5c74c6aa3a6162f503";
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
                       console.log(data.data);
                       resolve(data);
                       // console.log("getAllCollections: JSON Object (Date and collections) is successfully given");
                       // resolve(data.data.items);
                   } catch (error) {
                       reject(new Error("Error: Error in parsing"));
                   }
                }).on("error", () => {
                    reject(new Error("Error: Request Failed"));
                });
            });
        });
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