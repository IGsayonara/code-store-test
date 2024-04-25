import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  test(): string {
    return 'test';
  }
}
