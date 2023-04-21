import Joi = require('joi');

const postValidator = Joi.object({
  user_id: Joi.number().integer().positive().required(),
  category_id: Joi.number().integer().positive().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  video_url: Joi.string()
    .uri({
      scheme: [/https?/],
    })
    .required(),
});

export default postValidator;
