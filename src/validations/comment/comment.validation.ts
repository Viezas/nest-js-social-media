import Joi = require('joi');

const commentValidator = Joi.object({
  user_id: Joi.number().integer().positive().required(),
  post_id: Joi.number().integer().positive().required(),
  body: Joi.string().required(),
});

export default commentValidator;
