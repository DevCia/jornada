import { Router } from 'express';
import {
  edit,
  find,
  index,
  remove,
  store,
} from '../controllers/contactsController';
import uploadImages from '../service/uploadImages';
import removeOldFile from '../service/removeOldFile';

const route = Router();
route.get('/', index);
route.get('/:id', find);
route.post('/', uploadImages.single('avatar'), store);
route.put('/:id', uploadImages.single('avatar'), removeOldFile, edit);
route.delete('/:id', remove);

export { route as default };
