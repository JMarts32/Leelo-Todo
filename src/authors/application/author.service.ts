import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/application/prisma.service';

@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaService) {}
}
