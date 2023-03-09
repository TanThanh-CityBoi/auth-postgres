import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { isEmpty } from 'lodash';

export class CreateUserDto {
  @Expose()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @Expose()
  @Length(10, 20)
  password: string;

  firstName: string;

  lastName: string;

  @Expose()
  @Transform(({ obj }) =>
    isEmpty(obj.firstName && obj.lastName)
      ? null
      : `${obj.firstName} ${obj.lastName}`,
  )
  fullName: string;
}
