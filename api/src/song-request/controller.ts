import { Controller, Body, Param } from '@nestjs/common';
import { Get, Delete, Post } from '@nestjs/common/decorators/http';
import { SongRequest } from './entity';
import { databaseErrorHandler } from '../helpers/error-handler';
import { SongRequestService } from './service';
import { DeleteResult } from 'typeorm';

@Controller({ path: '/song-requests' })
export class SongRequestController {
  constructor(private readonly appService: SongRequestService) { }

  @Get('/')
  getAllSongRequests(): Promise<SongRequest[]> {
    return this.appService.getAllSongRequests()
      .catch(databaseErrorHandler)
  }

  @Post('/')
  createSongRequest(
    @Body() songRequest: SongRequest
  ): Promise<SongRequest> {
    return this.appService.createSongRequest(songRequest)
      .catch(databaseErrorHandler)
  }

  @Delete(':id')
  deleteSongRequest(@Param('id') id: string): Promise<DeleteResult> {
    return this.appService.deleteSongRequest(id)
      .catch(databaseErrorHandler)
  }
}
