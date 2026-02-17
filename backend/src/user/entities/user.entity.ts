import { Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { FriendRequest } from '../../friend-request/entities/friend-request.entity';

@Entity()
export class User {
  @PrimaryKey()
  id!: string;

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

  @OneToMany(() => FriendRequest, fr => fr.sender)
  sendRequests = new Collection<FriendRequest>(this);
  
  @OneToMany(() => FriendRequest, fr => fr.receiver)
  receiveRequests = new Collection<FriendRequest>(this)
}
