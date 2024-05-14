import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto);
  }
  @Post('signup')
  signup(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.singup(createAuthDto);
  }
  // @ApiSecurity('apiKey') // for swagger
  @UseGuards(JwtAuthGuard) // the get don't work without token
  @Get('me')
  async findMe(@Request() req, ) {
    // get all oject of request
    console.log(req,"req");
    
    console.log(req.user,'from me');

    return await this.authService.getMyInfo(
      req.get('Authorization').replace('Bearer ', ''), // just the token without Bearer and space
    );
  }
  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
