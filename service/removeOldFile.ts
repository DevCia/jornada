import { NextFunction, Request, Response } from 'express';
import contact from '../models/contact';
import fs from 'fs';

const removeOldFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.file) {
    const data = await contact.findOne({ where: { id: req.params.id } });
    if (!!data?.dataValues.avatar) {
      fs.unlinkSync('public/' + data?.dataValues.avatar);
    }
  }
  next();
};

export default removeOldFile;
