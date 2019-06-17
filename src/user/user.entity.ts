import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('user')
export class UserEntity {
  @PrimaryColumn()
  id: string

  @Column('varchar')
  username: string

  @Column('int')
  age: number
}
