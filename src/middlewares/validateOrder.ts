import { Request, Response, NextFunction } from 'express';

const validationOrder = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  
  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  
  if (!productsIds.length) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  
  return next();
};

export default validationOrder;