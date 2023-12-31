import {
  // IsBoolean,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Username is required',
  })
  username: string;

  @IsString({
    message: 'Email must be a string',
  })
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: '*Gunakan Kata Sandi Kombinasi Huruf Kapital dan Angka ',
  })
  password: string;

  @IsString()
  @IsNotEmpty({
    message: 'Role is required',
  })
  role: string;
}
