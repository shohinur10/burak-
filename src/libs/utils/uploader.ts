import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

/** MULTER IMAGE UPLOADER **/

function getTargetImageStorage(address: any) {
    const uploadPath = `./uploads/${address}`;

    // ✅ Ensure the directory exists
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
    }

    return multer.diskStorage({
        destination: (req, file, cb) => cb(null, uploadPath),
        filename: (req, file, cb) => {
            const extension = path.extname(file.originalname);
            const randomName = uuidv4() + extension;
            cb(null, randomName);
        }
    });
}

const makeUploader = (address: string) => {
    const storage = getTargetImageStorage(address);
    return multer({ storage });
};

export default makeUploader;


// Uncommented and properly structured `uploadProductImage`
// const productStorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./uploads/products");
//     },
//     filename: function (req, file, cb) {
//         console.log(file);
//         const extension = path.extname(file.originalname).ext; // ext bu yuklanyotgan raxm di type aniqleydi  png , jpg va etc 
//         const random_name = v4() + extension;
//         cb(null, random_name);
//     }
// });

// export const uploadProductImage = multer({ storage: productStorage });