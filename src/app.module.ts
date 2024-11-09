import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesService } from './jokes/jokes.service';
import { JokesController } from './jokes/jokes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Joke, JokeSchema } from './jokes/joke.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    MongooseModule.forFeature([{ name: Joke.name, schema: JokeSchema }]),
  ],
  controllers: [AppController, JokesController],
  providers: [AppService, JokesService],
})
export class AppModule {}
