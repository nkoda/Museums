import * as https from "https";

export class NftData {

    #collection;

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
                       console.log(rawData);
                       let data = JSON.parse(rawData);
                       this.#collection = data.items;

                       resolve("Successful");
                   } catch (error) {
                       reject(new Error("Error: Error in parsing"));
                   }
                }).on("error", () => {
                    reject(new Error("Error: Request Failed"));
                });
            });
        });
    }
}