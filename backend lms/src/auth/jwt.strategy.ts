import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'kelma',
    });
  }

  async validate(payload: any) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });
    console.log(user,"user");
    
    if (!user) {
      throw new HttpException('invalid token', HttpStatus.UNAUTHORIZED);
    } else {
      return user;
    }
  }
}