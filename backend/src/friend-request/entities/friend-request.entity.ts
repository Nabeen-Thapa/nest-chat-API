import { Enum, ManyToOne, OneToMany, PrimaryKey, Property, Rel } from "@mikro-orm/core";
import { User } from "../../user/entities/user.entity";
import { FriendRequestStatus } from "../types/friend-request.type";

export class FriendRequest {
    @PrimaryKey({ type: 'uuid' })
    id: string = crypto.randomUUID();

    @ManyToOne(() => User, {deleteRule: 'cascade',})
    sender!: User;

    @ManyToOne(() => User, {deleteRule: 'cascade',})
    receiver!: User;

    @Enum(()=>FriendRequestStatus)
    @Property({default:  FriendRequestStatus.PENDING})
    status!: FriendRequestStatus;

    @Property()
    createdAt!: Date;

    @Property()
    updatedAt!: Date;
}
