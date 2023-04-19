import Joi = require('joi');

const categoryValidator = Joi.object({
  name: Joi.string().required(),
});

export default categoryValidator;
