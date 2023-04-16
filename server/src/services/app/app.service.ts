import { Injectable } from 'src/common/decorators/decorators';

@Injectable()
export class AppService {
  public checkHealth(): string {
    return 'Healthy';
  }
}
