
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongRequest } from './entity';
import { SongRequestService } from './service';
import { SongRequestController } from './controller';

@Module({
  imports: [TypeOrmModule.forFeature([SongRequest])],
  providers: [SongRequestService],
  controllers: [SongRequestController],
})
export class SongRequestModule { }
