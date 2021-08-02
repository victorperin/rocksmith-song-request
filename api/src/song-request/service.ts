import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, QueryFailedError, Repository } from 'typeorm';
import { SongRequest } from './entity';

@Injectable()
export class SongRequestService {
  constructor(
    @InjectRepository(SongRequest)
    private songRequestRepository: Repository<SongRequest>,
  ) { }

  getAllSongRequests(): Promise<SongRequest[]> {
    return this.songRequestRepository.find()
  }

  createSongRequest(songRequest: SongRequest): Promise<SongRequest> {
    return this.songRequestRepository.save(songRequest)
  }

  deleteSongRequest(songRequestId: string): Promise<DeleteResult> {
    return this.songRequestRepository.delete(songRequestId);
  }

}
