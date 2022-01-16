import * as fs from "fs";

export function writeData(id, nftObjects) {
    let path = "./data/" + id + ".json";
    try {
        fs.writeFileSync(path, JSON.stringify({nftObjects: nftObjects}));
        return Promise.resolve("Successfully added");
    } catch (error) {
        return Promise.reject(new Error("Error: Unable to write into the file"));
    }
}