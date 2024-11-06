import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesService } from './jokes/jokes.service';
import { JokesController } from './jokes/jokes.controller';

@Module({
  imports: [],
  controllers: [AppController, JokesController],
  providers: [AppService, JokesService],
})
export class AppModule {}
