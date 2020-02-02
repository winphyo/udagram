"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Jimp = require("jimp");
// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
function filterImageFromURL(inputURL, fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const photo = yield Jimp.read(inputURL);
            //const outpath = '/tmp/filtered.'+Math.floor(Math.random() * 2000)+'.jpg';
            yield photo
                .resize(256, 256) // resize
                .quality(60) // set JPEG quality
                .greyscale() // set greyscale
                .write(__dirname + fileName, (img) => {
                resolve(__dirname + fileName);
            });
        }));
    });
}
exports.filterImageFromURL = filterImageFromURL;
// export async function filterImageFromURL(inputURL: string, fileName: string): Promise<string>{
//     //var outpath= '/tmp/filtered.'+Math.floor(Math.random() * 2000)+'.jpg';
//     new Promise( async resolve => {
//         const photo = await Jimp.read(inputURL);
//          await photo
//         .resize(256, 256) // resize
//         .quality(60) // set JPEG quality
//         .greyscale() // set greyscale
//         .write(__dirname+fileName, (img)=>{
//             resolve(__dirname+fileName);
//         });
//     }).then(
//         function(ex) {
//            return fileName;
//             }
//     );
//     return fileName;
// }
// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
function deleteLocalFiles(files) {
    return __awaiter(this, void 0, void 0, function* () {
        const testFolder = __dirname + "/tmp/";
        for (let file of files) {
            console.log("Deleting.." + testFolder + file);
            fs_1.default.unlinkSync(testFolder + file);
        }
    });
}
exports.deleteLocalFiles = deleteLocalFiles;
//generate file name randomly
function generateFileName(s) {
    var outpath = '/tmp/filtered.' + Math.floor(Math.random() * 2000) + '.jpg';
    return outpath;
}
exports.generateFileName = generateFileName;
//# sourceMappingURL=util.js.map