import Joi from 'joi';

export const addToCartSchema = Joi.object({
  sessionId: Joi.string().min(1).max(100).required(),
  productId: Joi.number().integer().positive().required(),
  quantity: Joi.number().integer().positive().max(100).required(),
});

export const updateCartItemSchema = Joi.object({
  quantity: Joi.number().integer().min(0).max(100).required(),
});

export const sessionIdParamSchema = Joi.object({
  sessionId: Joi.string().min(1).max(100).required(),
});

export const cartItemIdParamSchema = Joi.object({
  cartItemId: Joi.number().integer().positive().required(),
});