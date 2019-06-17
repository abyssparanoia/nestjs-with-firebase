import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  readonly id: string
  @IsNotEmpty()
  readonly username: string
  @IsNotEmpty()
  readonly age: number
}
