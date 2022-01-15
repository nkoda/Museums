import * as https from "https";
export default class NftData {

    private nftObjects: any[];

    public getAllCollections(): Promise<any> {
        let encoded = "https://api.covalenthq.com/v1/137/tokens/tokenlists/all/?key=ckey_99de0aa6e5c74c6aa3a6162f503"
        return new Promise<any> ((resolve, reject) => {
            https.get(encoded, (result) => {
                let {statusCode} = result;
                if (statusCode != 200) {
                    result.resume();
                    reject(new Error("Error: Request Failed"));
                }
                result.setEncoding("utf8");
                let rawData = "";
                result.on("data", (chunk) => {
                    rawData += chunk;
                });
                result.on("end", () => {
                    try {
                        let parsedData = JSON.parse(rawData);
                        resolve(parsedData);
                    } catch (error) {
                        reject(new Error("Error: Parsing Failed"));
                    }
                }).on ("error", () => {
                    reject(new Error("Error: Request Failed"));
                });
            });
        });
    }
}