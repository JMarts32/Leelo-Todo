import { Module } from '@nestjs/common';
import { AuthorService } from './application/author.service';
import { AuthorController } from './application/author.controller';

@Module({
  providers: [AuthorService],
  controllers: [AuthorController],
  exports: [AuthorService],
})
export class AuthorsModule {}
