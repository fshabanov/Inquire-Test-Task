import { ApiPath, ContentType, HttpMethod } from 'common/enums/enums';
import {
  PostCreateRequestDto,
  PostResponseDto,
  PostUpdateRequestDto,
  PostWithCommentsResponseDto,
} from 'common/types/types';
import { Http } from 'services/http/http.service';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class PostApi {
  #http: Http;

  #apiPrefix: string;

  public constructor({ apiPrefix, http }: Constructor) {
    this.#apiPrefix = apiPrefix;
    this.#http = http;
  }

  public getAll(): Promise<PostResponseDto[]> {
    return this.#http.load<PostResponseDto[]>(
      `${this.#apiPrefix}/${ApiPath.POSTS}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public getById(id: number): Promise<PostWithCommentsResponseDto> {
    return this.#http.load<PostWithCommentsResponseDto>(
      `${this.#apiPrefix}/${ApiPath.POSTS}/${id}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public create(body: PostCreateRequestDto): Promise<PostResponseDto> {
    return this.#http.load<PostResponseDto>(
      `${this.#apiPrefix}/${ApiPath.POSTS}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(body),
      },
    );
  }

  public update({
    id,
    title,
    content,
  }: PostUpdateRequestDto): Promise<PostResponseDto> {
    return this.#http.load<PostResponseDto>(
      `${this.#apiPrefix}/${ApiPath.POSTS}/${id}`,
      {
        method: HttpMethod.PATCH,
        contentType: ContentType.JSON,
        payload: JSON.stringify({ title, content }),
      },
    );
  }

  public delete(id: number): Promise<PostResponseDto> {
    return this.#http.load<PostResponseDto>(
      `${this.#apiPrefix}/${ApiPath.POSTS}/${id}`,
      {
        method: HttpMethod.DELETE,
      },
    );
  }
}

export { PostApi };
