import Joi from 'joi';

export const productIdParamSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
});