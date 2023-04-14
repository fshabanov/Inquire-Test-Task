import { ContentType, HttpHeader, HttpMethod } from 'common/enums/enums';
import { HttpOptions } from 'common/types/types';
import { HttpError } from 'exceptions/exceptions';

class Http {
  public load<T = unknown>(
    url: string,
    options: Partial<HttpOptions>,
  ): Promise<T> {
    const { method = HttpMethod.GET, contentType, payload = null } = options;

    return fetch(url, {
      method,
      headers: this.getHeaders(contentType),
      body: payload,
    })
      .then(this.validateStatus)
      .then((res) => this.parseJSON<T>(res))
      .catch(this.catchError);
  }

  private getHeaders(contentType?: ContentType): Headers {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    return headers;
  }

  private async validateStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      const exception = await response
        .json()
        .catch(() => ({ message: response.statusText }));

      throw new HttpError({
        message: exception?.message,
        status: response.status,
      });
    }

    return response;
  }

  private parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  private catchError(err: Error): never {
    throw err;
  }
}

export { Http };
