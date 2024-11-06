import { Injectable } from '@nestjs/common';
import { JOKES } from './jokes.repository';
import { JokeDto } from './joke.dto';

@Injectable()
export class JokesService {
  getRandomJoke(type?: string): JokeDto {
    const jokes = type ? JOKES.filter((j) => j.type === type) : JOKES;
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }

  getJokeTypes(): string[] {
    return [...new Set(JOKES.map((j) => j.type))];
  }
}
