import Joi from 'joi';

import { PostValidationCustomMessage } from '~/common/enums/enums';
import { PostCreateRequestDto } from '~/common/types/types';
import { getNameOf } from '~/helpers/helpers';

const postCreate = Joi.object({
  [getNameOf<PostCreateRequestDto>('title')]: Joi.string().required().messages({
    'any.required': PostValidationCustomMessage.TITLE_REQUIRED,
    'string.empty': PostValidationCustomMessage.TITLE_REQUIRED,
  }),
  [getNameOf<PostCreateRequestDto>('content')]: Joi.string()
    .required()
    .messages({
      'any.required': PostValidationCustomMessage.CONTENT_REQUIRED,
      'string.empty': PostValidationCustomMessage.CONTENT_REQUIRED,
    }),
});

export { postCreate };
