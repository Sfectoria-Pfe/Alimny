import { Module } from '@nestjs/common';
import { MysessionService } from './mysession.service';
import { MysessionController } from './mysession.controller';

@Module({
  controllers: [MysessionController],
  providers: [MysessionService],
})
export class MysessionModule {}
