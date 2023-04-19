import Joi = require('joi');

const userValidator = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  pfp_url: Joi.string()
    .uri({
      scheme: [/https?/],
    })
    .required(),
});

export default userValidator;
