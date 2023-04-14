import { ApiPath, ContentType, HttpMethod } from 'common/enums/enums';
import {
  CommentCreateRequestDto,
  CommentResponseDto,
} from 'common/types/types';
import { Http } from 'services/http/http.service';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class CommentApi {
  #http: Http;

  #apiPrefix: string;

  public constructor({ apiPrefix, http }: Constructor) {
    this.#apiPrefix = apiPrefix;
    this.#http = http;
  }

  public create({
    postId,
    text,
  }: CommentCreateRequestDto): Promise<CommentResponseDto> {
    return this.#http.load<CommentResponseDto>(
      `${this.#apiPrefix}/${ApiPath.POSTS}/${postId}/${ApiPath.COMMENTS}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify({ text }),
      },
    );
  }
}

export { CommentApi };
