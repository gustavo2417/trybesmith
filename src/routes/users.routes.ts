import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validate from '../middlewares/validationUser';

const router = Router();

const userController = new UserController();

router.post(
  '/', 
  validate.validationFields,
  validate.validationLength,
  validate.validationTypes,
  userController.create,
);

export default router;