import { Controller, Get, Post, Body, Param, Delete, Req } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';
import { UpdateFriendRequestDto } from './dto/update-friend-request.dto';
import type { Request } from 'express';

@Controller('friend-request')
export class FriendRequestController {
  constructor(private readonly friendRequestService: FriendRequestService) { }

  @Post("send")
  send(@Body() createFriendRequestDto: CreateFriendRequestDto, @Req() req: Request) {
    const senderId = (req.user as any).userId;
    return this.friendRequestService.send(createFriendRequestDto, senderId);
  }

  @Post()
  accept() {
    return this.friendRequestService.findAll();
  }

  @Delete(':id')
  reject(@Param('id') id: string) {
    return this.friendRequestService.remove(+id);
  }

  @Post()
  pending() {
    return this.friendRequestService.findAll();
  }

  @Get()
  sent() {
    return this.friendRequestService.findAll();
  }

  //sender can cancel reuqest
  @Post()
  cancel() {
    return this.friendRequestService.findAll();
  }

  @Get()
  View() {
    return this.friendRequestService.findAll();
  } 
}
