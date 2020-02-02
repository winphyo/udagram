import fs from 'fs';
import Jimp = require('jimp');

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string, fileName: string): Promise<string>{
    return new Promise( async resolve => {
        const photo = await Jimp.read(inputURL);
        //const outpath = '/tmp/filtered.'+Math.floor(Math.random() * 2000)+'.jpg';
        await photo
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write(__dirname+fileName, (img)=>{
            resolve(__dirname+fileName);
        });
    });
}

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
export async function deleteLocalFiles(files:Array<string>){
    const testFolder =__dirname +"/tmp/";
    for( let file of files) {
        console.log("Deleting.."+testFolder+file);
        fs.unlinkSync(testFolder+file);
    }
}

//generate file name randomly
export function generateFileName(s:string)
{
    var outpath= '/tmp/filtered.'+Math.floor(Math.random() * 2000)+'.jpg';
    return outpath;
}