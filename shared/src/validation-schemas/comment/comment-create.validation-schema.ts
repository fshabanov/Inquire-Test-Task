import Joi from 'joi';

import { CommentValidationCustomMessage } from '~/common/enums/enums';
import { CommentCreateFormDto } from '~/common/types/types';
import { getNameOf } from '~/helpers/helpers';

const commentCreate = Joi.object({
  [getNameOf<CommentCreateFormDto>('text')]: Joi.string().required().messages({
    'any.required': CommentValidationCustomMessage.COMMENT_REQUIRED,
    'string.empty': CommentValidationCustomMessage.COMMENT_REQUIRED,
  }),
});

export { commentCreate };
