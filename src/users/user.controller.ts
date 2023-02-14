import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  @UsePipes(new ValidationPipe())
  @Post('login')
  getProfile(@Body() user: UserDto): UserDto {
    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.deletedAt = new Date();
    return UserDto.plainToClass(user);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
