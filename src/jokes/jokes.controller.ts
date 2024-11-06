import { Controller, Get, Query } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Get('random')
  getRandomJoke(@Query('type') type?: string) {
    return this.jokesService.getRandomJoke(type);
  }

  @Get('types')
  getJokeTypes() {
    return this.jokesService.getJokeTypes();
  }
}
