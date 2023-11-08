import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
};

const uploadImages = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/avatar');
    },
    filename: (req, file, cb) => {
      const ext = (MIME_TYPE_MAP as any)[file.mimetype];
      cb(null, uuidv4() + '.' + ext);
    },
  }),
});

export default uploadImages;
