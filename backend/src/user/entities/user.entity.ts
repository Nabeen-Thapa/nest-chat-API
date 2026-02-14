import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id!: string;
  
  // @PrimaryKey({ type: 'uuid' })
  // id: string = crypto.randomUUID();
  
  @Property()
  name!: string;

  @Property({ unique: true })
  email!: string;

  @Property()
  phone!: string;

  @Property()
  password!: string;

  @Property({ nullable: true })
  profileImage?: string;

  @Property({ onCreate: () => new Date() })
  createdAt?: Date;
}
