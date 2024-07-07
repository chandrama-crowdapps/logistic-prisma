import { ApiProperty } from '@nestjs/swagger';
export class CreateAdminDto {
    @ApiProperty()
    username: string;
  
    @ApiProperty({ required: false })
    email: string;
  
    @ApiProperty()
    password: string;
  
}
