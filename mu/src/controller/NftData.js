import * as https from "https";

export class NftData {

    constructor() {
        this.collection = null;
    }

    // Returns JSON object including most updated date and array of NFT collections
    getAllCollections() {
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
                       console.log(data.data);
                       console.log("getAllCollections: JSON Object (Date and collections) is successfully given");
                       resolve(data.data);

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
        // let path = "./data" +
    }
}