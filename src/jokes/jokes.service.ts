import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Joke } from './joke.schema';
// import { JOKES } from './jokes.repository';
// import { JokeDto } from './joke.dto';

@Injectable()
export class JokesService {
  constructor(@InjectModel(Joke.name) private jokeModel: Model<Joke>) {}

  // Fetch a random joke, optionally filtered by type
  async getRandomJoke(type?: string): Promise<Joke | null> {
    const match = type ? { type } : {}; // Match filter if type is provided
    const jokes = await this.jokeModel.aggregate([
      { $match: match },
      { $sample: { size: 1 } }, // Randomly select one document
    ]);
    return jokes.length > 0 ? jokes[0] : null;
  }

  // Retrieve all unique joke types
  async getJokeTypes(): Promise<string[]> {
    const types = await this.jokeModel.distinct('type').exec();
    return types;
  }

  // getRandomJoke(type?: string): JokeDto {
  //   const jokes = type ? JOKES.filter((j) => j.type === type) : JOKES;
  //   const randomIndex = Math.floor(Math.random() * jokes.length);
  //   return jokes[randomIndex];
  // }

  // getJokeTypes(): string[] {
  //   return [...new Set(JOKES.map((j) => j.type))];
  // }
}
