import { Request, Response } from 'express';
import contact from '../models/contact';

export const index = async (req: Request, res: Response) => {
  const result = await contact.findAll();
  res.send(result);
};
export const store = (req: Request, res: Response) => {
  const result = contact.create({
    ...req.body,
    avatar: req.file?.path.replace('public/', ''),
  });
  res.send(result);
};
export const edit = (req: Request, res: Response) => {
  const data = req.file?.path
    ? { ...req.body, avatar: req.file?.path.replace('public/', '') }
    : req.body;

  const result = contact.update(data, { where: { id: req.params.id } });
  res.send(result);
};

export const find = async (req: Request, res: Response) => {
  const result = await contact.findOne({ where: { id: req.params.id } });
  res.send(result);
};
export const remove = (req: Request, res: Response) => {
  const result = contact.destroy({ where: { id: req.params.id } });
  res.send(result);
};
