import { Controller, Get } from 'src/common/decorators/decorators';
import { AppService } from 'src/services/app/app.service';

@Controller()
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get()
  public checkHealth(): string {
    return this.appService.checkHealth();
  }
}
