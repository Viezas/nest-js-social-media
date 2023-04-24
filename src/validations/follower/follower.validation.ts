import Joi = require('joi');

const followerValidator = Joi.object({
  user_id: Joi.number().required(),
  following_id: Joi.number().required(),
  pfp_url: Joi.string()
    .uri({
      scheme: [/https?/],
    })
    .required(),
});

export default followerValidator;
