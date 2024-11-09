import { ApiProperty } from '@nestjs/swagger';

export class JokeDto {
  id: number;
  @ApiProperty({ description: 'Type of the joke (e.g., dad, knock-knock)' })
  type: string;

  @ApiProperty({ description: 'Content of the joke' })
  content: string;
}
