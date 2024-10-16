import { Injectable, NotFoundException } from '@nestjs/common';
import { Context } from 'src/context';
import { RegisterUserDto } from './dto/create-user.dto';


@Injectable()
export class UserService {
  async register(dto: RegisterUserDto, ctx: Context) {
    try {
      const user = await ctx.prisma.user.findOne({ 
        where: {
        name:dto.name
      }
       });
      
       if(user){
        throw new NotFoundException("Name is required")
       }
      const res = await ctx.prisma.user.create({ data: user });
      if(res){
        return 'user sucsseful create'
      }
    } catch (e) {
     throw new NotFoundException(e)
    }
  }  
  async login(dto: RegisterUserDto, ctx: Context) {
    try {
    
    } catch (e) {
      throw new NotFoundException(e)
     }
}
}