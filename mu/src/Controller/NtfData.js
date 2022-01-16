import * as https from "https";

export function getAllNftObjects() {
    let addressIDs = [
        { address: "0xe4605d46fd0b3f8329d936a8b258d69276cba264", id: "123" },
        { address: "0xe4605d46fd0b3f8329d936a8b258d69276cba264", id: "100" },
        { address: "0xe4605d46fd0b3f8329d936a8b258d69276cba264", id: "1" },
        { address: "0xe4605d46fd0b3f8329d936a8b258d69276cba264", id: "21" },
        { address: "0xa05563ccEf87ff9cA1e770270D9F1a26916D9c48", id: "468" },
        { address: "0xFdB3e529814Afc5DF5A5faF126989683B17DaEf9", id: "3684" },
        { address: "0x67D9417C9C3c250f61A83C7e8658daC487B56B09", id: "2397" },
        { address: "0xe4605d46Fd0B3f8329d936a8b258D69276cBa264", id: "468" },
        { address: "0xe4605d46Fd0B3f8329d936a8b258D69276cBa264", id: "368" },
        { address: "0x57E9a39aE8eC404C08f88740A9e6E306f50c937f", id: "813" },
        { address: "0xa05563ccEf87ff9cA1e770270D9F1a26916D9c48", id: "468" }
    ];

    let allPromises = [];
    addressIDs.forEach((addressId) => {
        let loopIds = new Promise((resolve, reject) => {
            getNFTObject(addressId.address, addressId.id)
                .then((nftObject) => {
                   resolve(nftObject);
                })
                .catch(() => {
                    resolve([]);
                });
        });
        allPromises.push(loopIds);
    });

    return new Promise((resolve) => {
        Promise.all(allPromises).then((nftObjects) => {
            let result = [];
            for (let nftObject of nftObjects) {
                result = result.concat(nftObject);
            }
            resolve(result);
        });
    });
}

export function getNFTObject(contractAddress, tokenID) {
    let encoded = "https://api.covalenthq.com/v1/1/tokens/" + contractAddress + "/nft_metadata/" + tokenID + "/?key=ckey_99de0aa6e5c74c6aa3a6162f503";

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
                    let externalData = data.data.items[0].nft_data[0].external_data;

                    let nftObject = {
                        name: externalData.name,
                        collection: data.data.items[0].contract_name,
                        token_id: tokenID,
                        contract_address: contractAddress,
                        image: externalData.image,
                        owner: data.data.items[0].nft_data[0].original_owner,
                    };

                    resolve([nftObject]);
                } catch (error) {
                    reject(new Error("Error: Request Failed "))
                }
            });
        });
    });
}