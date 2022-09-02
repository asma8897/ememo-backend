import { PartialType } from '@nestjs/mapped-types';
import { CreateMemoCommentDto } from './create-memo-comment.dto';

export class UpdateMemoCommentDto extends PartialType(CreateMemoCommentDto) {}
