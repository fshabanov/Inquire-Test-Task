import Joi from 'joi';

import { PostValidationCustomMessage } from '~/common/enums/enums';
import { PostUpdateRequestDto } from '~/common/types/types';
import { getNameOf } from '~/helpers/helpers';

const postUpdate = Joi.object({
  [getNameOf<PostUpdateRequestDto>('title')]: Joi.string().required().messages({
    'any.required': PostValidationCustomMessage.TITLE_REQUIRED,
    'string.empty': PostValidationCustomMessage.TITLE_REQUIRED,
  }),
  [getNameOf<PostUpdateRequestDto>('content')]: Joi.string()
    .required()
    .messages({
      'any.required': PostValidationCustomMessage.CONTENT_REQUIRED,
      'string.empty': PostValidationCustomMessage.CONTENT_REQUIRED,
    }),
});

export { postUpdate };
