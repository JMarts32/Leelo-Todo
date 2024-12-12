import { Module } from '@nestjs/common';
import { AuthorService } from './application/author.service';

@Module({
  providers: [AuthorService],
  exports: [AuthorService],
})
export class AuthorsModule {}
