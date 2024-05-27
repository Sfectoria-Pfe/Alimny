import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
    PassportModule,
    JwtModule.register({
      secret:'kelma',
      signOptions:{
        expiresIn:'600000000s'
      }
      
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,PrismaService,JwtStrategy],
})
export class AuthModule {}
