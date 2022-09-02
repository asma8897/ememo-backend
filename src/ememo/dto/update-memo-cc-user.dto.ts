import { PartialType } from '@nestjs/mapped-types';
import { CreateMemoCCUserDto } from './create-memo-cc-user.dto';

export class UpdateMemoCCUserDto extends PartialType(CreateMemoCCUserDto) {}
