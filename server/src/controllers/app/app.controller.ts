import { Controller, Get } from 'src/common/decorators/decorators';
import { AppService } from 'src/services/app/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
