import { Injectable } from '@nestjs/common';
import { CreateMysessionDto } from './dto/create-mysession.dto';
import { UpdateMysessionDto } from './dto/update-mysession.dto';

@Injectable()
export class MysessionService {
  create(createMysessionDto: CreateMysessionDto) {
    return 'This action adds a new mysession';
  }

  findAll() {
    return `This action returns all mysession`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mysession`;
  }

  update(id: number, updateMysessionDto: UpdateMysessionDto) {
    return `This action updates a #${id} mysession`;
  }

  remove(id: number) {
    return `This action removes a #${id} mysession`;
  }
}
