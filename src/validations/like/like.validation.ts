import Joi = require('joi');

const likeValidator = Joi.object({
  user_id: Joi.number().integer().positive().required(),
  likeable_type: Joi.string().required(),
  likeable_id: Joi.number().integer().positive().required(),
});

export default likeValidator;
