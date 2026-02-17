import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';
import { UpdateFriendRequestDto } from './dto/update-friend-request.dto';
import { EntityManager } from '@mikro-orm/postgresql';
import { User } from '../user/entities/user.entity';
import { FriendRequest } from './entities/friend-request.entity';
import { FriendRequestStatus } from './types/friend-request.type';

@Injectable()
export class FriendRequestService {
  constructor(private readonly em: EntityManager) { }
  async send(createFriendRequestDto: CreateFriendRequestDto, senderId: string) {

    const sender = await this.em.findOne(User, { id: senderId })
    const receiver = await this.em.findOne(User, { id: createFriendRequestDto.receiverId })
    if (!sender || !receiver) throw new NotFoundException("Sender or receiver not found");

    const existing = await this.em.findOne(FriendRequest, { sender, receiver })
    if (existing) throw new BadRequestException('you alreadyt send friedn reuqest');

    const newFriendRequest = this.em.create(FriendRequest, {
      sender,
      receiver,
      status: FriendRequestStatus.PENDING,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    await this.em.persistAndFlush(newFriendRequest);
    return {
      message: "Friend request sent successfully",
      requestId: newFriendRequest.id,
    };
  }

  findAll() {
    return `This action returns all friendRequest`;
  }


  remove(id: number) {
    return `This action removes a #${id} friendRequest`;
  }
}
