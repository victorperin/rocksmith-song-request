import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SongRequestModule } from './song-request/module';

const typeOrmSettings: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  autoLoadEntities: true,
}

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmSettings),
    SongRequestModule
  ],
})
export class AppModule { }
