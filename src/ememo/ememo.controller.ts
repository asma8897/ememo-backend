import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmemoService } from './ememo.service';
import { CreateEmemoDto } from './dto/create-ememo.dto';
import { UpdateEmemoDto } from './dto/update-ememo.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateMemoTypeDto } from './dto/create-memo-type.dto';
import { UpdateMemoTypeDto } from './dto/update-memo-type.dto';
import { CreateMemoDto } from './dto/create-memo.dto';
import { UpdateMemoDto } from './dto/update-memo.dto';
import { CreateMemoApprovalDto } from './dto/create-memo-approval.dto';
import { UpdateMemoApprovalDto } from './dto/update-memo-approval.dto';
import { CreateMemoAttachmentDto } from './dto/create-memo-attachment.dto';
import { UpdateMemoAttachmentDto } from './dto/update-memo-attachment.dto';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group-dto';
import { CreateMemoCCUserDto } from './dto/create-memo-cc-user.dto';
import { UpdateMemoCCUserDto } from './dto/update-memo-cc-user.dto';
import { CreateMemoCommentDto } from './dto/create-memo-comment.dto';
import { UpdateMemoCommentDto } from './dto/update-memo-comment.dto';

@Controller('ememo')
export class EmemoController {
  constructor(private readonly ememoService: EmemoService) {}

  @Post('/createUser')
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.ememoService.createUser(CreateUserDto);
  }

  @Get('/findAllUser')
  findAllUser() {
    return this.ememoService.findAllUser();
  }

  @Get(':id/findOneUser')
  findOneUser(@Param('id') id: string) {
    return this.ememoService.findOneUser({ id: +id });
  }

  @Patch(':id/updateUser')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.ememoService.updateUser({ id: +id }, updateUserDto);
  }

  @Delete('user/:id')
  removeUser(@Param('id') id: string) {
    return this.ememoService.removeUser({ id: +id });
  }

  @Post('/createDepartment')
  createDepartment(@Body() CreateDepartmentDto: CreateDepartmentDto) {
    return this.ememoService.createDepartment(CreateDepartmentDto);
  }

  @Get('/findAllDepartment')
  findAllDepartment() {
    return this.ememoService.findAllDepartment();
  }

  @Get(':id/findOneDepartment')
  findOneDepartment(@Param('id') id: string) {
    return this.ememoService.findOneDepartment({ id: +id });
  }

  @Patch(':id/updateDepartment')
  updateDepartment(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.ememoService.updateDepartment({ id: +id }, updateDepartmentDto);
  }

  @Delete(':id/removeDepartment')
  removeDepartment(@Param('id') id: string) {
    return this.ememoService.removeDepartment({ id: +id });
  }

  @Post('/createCompany')
  createCompany(@Body() CreateCompanyDto: CreateCompanyDto) {
    return this.ememoService.createCompany(CreateCompanyDto);
  }

  @Get('/findAllCompany')
  findAllCompany() {
    return this.ememoService.findAllCompany();
  }

  @Get(':id/findOneCompany')
  findOneCompany(@Param('id') id: string) {
    return this.ememoService.findOneCompany({ id: +id });
  }

  @Patch(':id/updateCompany')
  updateCompany(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.ememoService.updateCompany({ id: +id }, updateCompanyDto);
  }

  @Delete(':id/removeCompany')
  removeCompany(@Param('id') id: string) {
    return this.ememoService.removeCompany({ id: +id });
  }

  @Post('/createProject')
  createProject(@Body() CreateProjectDto: CreateProjectDto) {
    return this.ememoService.createProject(CreateProjectDto);
  }

  @Get('/findAllProject')
  findAllProject() {
    return this.ememoService.findAllProject();
  }

  @Get(':id/findOneProject')
  findOneProject(@Param('id') id: string) {
    return this.ememoService.findOneProject({ id: +id });
  }

  @Patch(':id/updateProject')
  updateProject(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.ememoService.updateProject({ id: +id }, updateProjectDto);
  }

  @Delete(':id/removeProject')
  removeProject(@Param('id') id: string) {
    return this.ememoService.removeProject({ id: +id });
  }

  @Post('/createMemoType')
  createMemoType(@Body() CreateMemoTypeDto: CreateMemoTypeDto) {
    return this.ememoService.createMemoType(CreateMemoTypeDto);
  }

  @Get('/findAllMemoType')
  findAllMemoType() {
    return this.ememoService.findAllMemoType();
  }

  @Get(':id/findOneMemoType')
  findOneMemoType(@Param('id') id: string) {
    return this.ememoService.findOneMemoType({ id: +id });
  }

  @Patch(':id/updateMemoType')
  updateMemoType(@Param('id') id: string, @Body() updateMemoTypeDto: UpdateMemoTypeDto) {
    return this.ememoService.updateMemoType({ id: +id }, updateMemoTypeDto);
  }

  @Delete(':id/removeMemoType')
  removeMemoType(@Param('id') id: string) {
    return this.ememoService.removeMemoType({ id: +id });
  }

  @Post('/createMemo')
  createMemo(@Body() CreateMemoDto: CreateMemoDto) {
    return this.ememoService.createMemo(CreateMemoDto);
  }

  @Get('/findAllMemo')
  findAllMemo() {
    return this.ememoService.findAllMemo();
  }

  @Get(':id/findOneMemo')
  findOneMemo(@Param('id') id: string) {
    return this.ememoService.findOneMemo({ id: +id });
  }

  @Patch(':id')
  updateMemo(@Param('id') id: string, @Body() updateMemoDto: UpdateMemoDto) {
    // return this.ememoService.updateMemo({ id: +id }, updateMemoDto);
  }

  @Delete(':id/removeMemo')
  removeMemo(@Param('id') id: string) {
    return this.ememoService.removeMemo({ id: +id });
  }

  @Post('/createMemoApproval')
  createMemoApproval(@Body() CreateMemoApprovalDto: CreateMemoApprovalDto) {
    return this.ememoService.createMemoApproval(CreateMemoApprovalDto);
  }

  @Get('/findAllMemoApproval')
  findAllMemoApproval() {
    return this.ememoService.findAllMemoApproval();
  }

  @Get(':id/findOneMemoApproval')
  findOneMemoApproval(@Param('id') id: string) {
    return this.ememoService.findOneMemoApproval({ id: +id });
  }

  @Patch(':id/updateMemoApproval')
  updateMemoApproval(@Param('id') id: string, @Body() updateMemoApprovalDto: UpdateMemoApprovalDto) {
    return this.ememoService.updateMemoApproval({ id: +id }, updateMemoApprovalDto);
  }

  @Delete(':id/removeMemoApproval')
  removeMemoApproval(@Param('id') id: string) {
    return this.ememoService.removeMemoApproval({ id: +id });
  }

  @Post('/createMemoAttachment')
  createMemoAttachment(@Body() CreateMemoAttachmentDto: CreateMemoAttachmentDto) {
    return this.ememoService.createMemoAttachment(CreateMemoAttachmentDto);
  }

  @Get('/findAllMemoAttachment')
  findAllMemoAttachment() {
    return this.ememoService.findAllMemoAttachment();
  }

  @Get(':id/findAllMemoAttachment')
  findOneMemoAttachment(@Param('id') id: string) {
    return this.ememoService.findOneMemoAttachment({ id: +id });
  }

  @Patch(':id/updateMemoAttachment')
  updateMemoAttachment(@Param('id') id: string, @Body() updateMemoAttachmentDto: UpdateMemoAttachmentDto) {
    return this.ememoService.updateMemoAttachment({ id: +id }, updateMemoAttachmentDto);
  }

  @Delete(':id/removeMemoAttachment')
  removeMemoAttachment(@Param('id') id: string) {
    return this.ememoService.removeMemoAttachment({ id: +id });
  }

  @Post('/createGroup')
  createGroup(@Body() CreateGroupDto: CreateGroupDto) {
    return this.ememoService.createGroup(CreateGroupDto);
  }

  @Get('/findAllGroup')
  findAllGroup() {
    return this.ememoService.findAllGroup();
  }

  @Get(':id/findOneGroup')
  findOneGroup(@Param('id') id: string) {
    return this.ememoService.findOneGroup({ id: +id });
  }

  @Patch(':id/updateGroup')
  updateGroup(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.ememoService.updateGroup({ id: +id }, updateGroupDto);
  }

  @Delete(':id/removeGroup')
  removeGroup(@Param('id') id: string) {
    return this.ememoService.removeGroup({ id: +id });
  }

  @Post('/createMemoCcUser')
  createMemoCcUser(@Body() CreateMemoCCUserDto: CreateMemoCCUserDto) {
    return this.ememoService.createMemoCcUser(CreateMemoCCUserDto);
  }

  @Get('/findAllMemoCcUser')
  findAllMemoCcUser() {
    return this.ememoService.findAllMemoCcUser();
  }

  @Get(':id/findOneMemoCcUser')
  findOneMemoCcUser(@Param('id') id: string) {
    return this.ememoService.findOneMemoCcUser({ id: +id });
  }

  @Patch(':id/updateMemoCcUser')
  updateMemoCcUser(@Param('id') id: string, @Body() updateMemoCCUserDto: UpdateMemoCCUserDto) {
    // return this.ememoService.updateMemoCcUser({ id: +id }, updateMemoCCUserDto);
  }

  @Delete(':id/removeMemoCcUser')
  removeMemoCcUser(@Param('id') id: string) {
    return this.ememoService.removeMemoCcUser({ id: +id });
  }
  
  @Post('/createMemoComment')
  createMemoComment(@Body() CreateMemoCommentDto: CreateMemoCommentDto) {
    return this.ememoService.createMemoComment(CreateMemoCommentDto);
  }

  @Get('/findAllMemoComment')
  findAllMemoComment() {
    return this.ememoService.findAllMemoComment();
  }

  @Get(':id/findOneMemoComment')
  findOneMemoComment(@Param('id') id: string) {
    return this.ememoService.findOneMemoComment({ id: +id });
  }

  @Patch(':id/updateMemoComment')
  updateMemoComment(@Param('id') id: string, @Body() updateMemoCommentDto: UpdateMemoCommentDto) {
    return this.ememoService.updateMemoComment({ id: +id }, updateMemoCommentDto);
  }

  @Delete(':id/removeMemoComment')
  removeMemoComment(@Param('id') id: string) {
    return this.ememoService.removeMemoComment({ id: +id });
  }

  // @Post()
  // create(@Body() createEmemoDto: CreateEmemoDto) {
  //   return this.ememoService.create(createEmemoDto);
  // }

  // @Get()
  // findAll() {
  //   return this.ememoService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ememoService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmemoDto: UpdateEmemoDto) {
  //   return this.ememoService.update(+id, updateEmemoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ememoService.remove(+id);
  // }
}
