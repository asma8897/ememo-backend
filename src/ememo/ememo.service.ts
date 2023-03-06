import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateMemoTypeDto } from './dto/create-memo-type.dto';
import { CreateMemoDto } from './dto/create-memo.dto';
import { CreateMemoApprovalDto } from './dto/create-memo-approval.dto';
import { CreateMemoAttachmentDto } from './dto/create-memo-attachment.dto';
import { CreateGroupDto } from './dto/create-group.dto';
import { CreateMemoCCUserDto } from './dto/create-memo-cc-user.dto';
import { CreateMemoCommentDto } from './dto/create-memo-comment.dto';
import { CreateMemoStatusDto } from './dto/create-memo-status.dto';

@Injectable()
export class EmemoService {
  constructor(private prisma: PrismaService) {}

  // async createEmemo(dto: CreateEmemoDto) {
  //   return await this.prisma.user.create({
  //     data: {
  //       name: dto.name,
  //       jobTitle: dto.jobTitle,
  //       department: {connect: {id: +dto.departmentId}},
  //       company: {connect:{id:+dto.companyId}}
  //     }
  //   })
  // }

  async createUser(dto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        uid: dto.uid,
        name: dto.name,
        jobTitle: dto.jobTitle,
        email: dto.email,
        password: dto.password,
        department: {connect:{id: +dto.departmentId}},
        company: {connect:{id: +dto.companyId}},
        groups: {
          connect: dto.groupId.map(grpId => ({id: grpId}))
          // connect: [{id: 1}, {id: 2}]
        },
      },
    });
  }

  findAllUser() {
    return this.prisma.user.findMany({
      include: {
        department: true,
        company: true,
        groups: true,
        memoCreatedByUser: true,
        memoUserLoopTo: true,
      },
    });
  }

  findOneUser(UserWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: UserWhereUniqueInput,
      include: {
        department: true,
        company: true,
        groups: true,
      },
    });
  }

  updateUser(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      data,
      where,
    });
  }

  removeUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where,
    });
  }

  async createDepartment(dto: CreateDepartmentDto) {
    return await this.prisma.department.create({
      data: {
        name: dto.name,
      },
    });
  }

  findAllDepartment() {
    return this.prisma.department.findMany({
      include: {
        users: true,
        memoType: true,
        memo: true,
      },
    });
  }

  findOneDepartment(DepartmentWhereUniqueInput: Prisma.DepartmentWhereUniqueInput) {
    return this.prisma.department.findUnique({
      where: DepartmentWhereUniqueInput,
      include: {
        users: true,
      },
    });
  }

  updateDepartment(where: Prisma.DepartmentWhereUniqueInput, data: Prisma.DepartmentUpdateInput) {
    return this.prisma.department.update({
      data,
      where,
    });
  }

  removeDepartment(where: Prisma.DepartmentWhereUniqueInput) {
    return this.prisma.department.delete({
      where,
    });
  }

  async createCompany(dto: CreateCompanyDto) {
    return await this.prisma.company.create({
      data: {
        name: dto.name,
      },
    });
  }

  findAllCompany() {
    return this.prisma.company.findMany({
      include: {
        users: true,
      },
    });
  }

  findOneCompany(CompanyWhereUniqueInput: Prisma.CompanyWhereUniqueInput) {
    return this.prisma.company.findUnique({
      where: CompanyWhereUniqueInput,
      include: {
        users: true,
      },
    });
  }

  updateCompany(where: Prisma.CompanyWhereUniqueInput, data: Prisma.CompanyUpdateInput) {
    return this.prisma.company.update({
      data,
      where,
    });
  }

  removeCompany(where: Prisma.CompanyWhereUniqueInput) {
    return this.prisma.company.delete({
      where,
    });
  }

  async createProject(dto: CreateProjectDto) {
    return await this.prisma.project.create({
      data: {
        name: dto.name,
      },
    });
  }

  findAllProject() {
    return this.prisma.project.findMany();
  }

  findOneProject(ProjectWhereUniqueInput: Prisma.ProjectWhereUniqueInput) {
    return this.prisma.project.findUnique({
      where: ProjectWhereUniqueInput
    });
  }

  updateProject(where: Prisma.ProjectWhereUniqueInput, data: Prisma.ProjectUpdateInput) {
    return this.prisma.project.update({
      data,
      where,
    });
  }

  removeProject(where: Prisma.ProjectWhereUniqueInput) {
    return this.prisma.project.delete({
      where,
    });
  }

  async createMemoType(dto: CreateMemoTypeDto) {
    return await this.prisma.memoType.create({
      data: {
        name: dto.name,
        department: {connect: { id: +dto.departmentId}},
      },
    })
  }

  findAllMemoType() {
    return this.prisma.memoType.findMany({
      include: {
        department: true,
      },
    });
  }

  findOneMemoType(MemoTypeWhereUniqueInput: Prisma.MemoTypeWhereUniqueInput) {
    return this.prisma.memoType.findUnique({
      where: MemoTypeWhereUniqueInput,
    });
  }

  updateMemoType(where: Prisma.MemoTypeWhereUniqueInput, data: Prisma.MemoTypeUpdateInput) {
    return this.prisma.memoType.update({
      data,
      where,
    });
  }

  removeMemoType(where: Prisma.MemoTypeWhereUniqueInput) {
    return this.prisma.memoType.delete({
      where,
    });
  }

  async createMemo(dto: CreateMemoDto) {
    return await this.prisma.memo.create({
      data: {
        addressTo: dto.addressTo,
        from: dto.from,
        subject: dto.subject,
        content: dto.content, 
        department: {connect:{ id: +dto.departmentId}},
        company: {connect:{ id: +dto.companyId }},
        memoType: {connect:{ id: +dto.memoTypeId }},
        projects: {
          connect: dto.projectId.map(prjId => ({id: prjId}))
        },
        status: {connect: { id: +dto.memoStatusId}},
        createdBy: {connect: { id: +dto.userId}},
        approvals: {
          create: [
            {
              order: 1,
              approvedByUser: {connect:{ id: +dto.userId }},
              groupApproval: {
                // connect: dto.groupId.map(grpId => ({id: grpId}))
                connect: { id: +dto.groupId}
              },
            },
          ],
        },


        // memoCreatedByUser: {
        //   connect: dto.createdByUserId.map(crtId => ({id: crtId}))
        // },
        // approvals: {
        //   connect: dto.approvalId.map(apprId => ({id: apprId}))
        // },
        // memoAttachments: {
        //   connect: dto.attachmentId.map(attId => ({id: attId}))
        // },
        // memoSelectedCcUser: {
        //   connect: dto.ccUserId.map(ccId => ({id: ccId}))
        // },

        // ccusers: {
        //   connect: dto,
        // }

        // approvals: {
        //   create: dto.approvals.map(app => ({...app}))
        // },
        // memocc: {
        //   create: dto.memocc.map(mc => ({...mc}))
        // },
        // attachments: {
        //   create: dto.attachments.map(att => ({...att}))
        // },
        // ccusers: {
        //   create: dto.ccusers.map(cu => ({...cu}))
        // }

        // approvals: {
        //   create: [
        //     {
        //       group: {connect: {id: +dto.groupId}},
        //       order: dto.order
        //     }
        //   ]
        // },
        // memocc: {
        //   create: dto.memocc.map(mcc => ({...mcc }))
        // },
        // attachments: {
        //   create: 
        // }
        // approvals: {
        //   create: [
        //     {
        //       group: {connect: {id: +dto.groupId}},
        //       order: dto.order,
        //     },
        //     {
        //       group: {connect: {id: +dto.groupId}},
        //       order: dto.order,
        //     }
        //   ]
        // }
      },
      include: {
        approvals: true,
      }
    });
  }

  findAllMemo() {
    return this.prisma.memo.findMany({
      include: {
        department: true,
        company: true,
        projects: true,
        memoType: true,
        status: true,
        createdBy: true,
        approvals: true,
        attachments: true,
        ccUser: true,
      }
    });
  }

  findOneMemo(MemoWhereUniqueInput: Prisma.MemoWhereUniqueInput) {
    return this.prisma.memo.findUnique({
      where: MemoWhereUniqueInput,
      include: {
        department: true,
        company: true,
        projects: true,
        memoType: true,
        status: true,
        createdBy: true,
        approvals: true,
        attachments: true,
        ccUser: true,
      }
    });
  }

  updateMemo(where: Prisma.MemoWhereUniqueInput, data: Prisma.MemoUpdateInput) {
    return this.prisma.memo.update({
      data,
      where,
    });
  }

  removeMemo(where: Prisma.MemoWhereUniqueInput) {
    return this.prisma.memo.delete({
      where,
    });
  }

  async createMemoApproval(dto: CreateMemoApprovalDto) {
    return await this.prisma.memoApproval.create({
      data: {
        // memoApprovedBy: {
        //   connect: dto.approvedByUserId.map(appBy => ({id: appBy}))
        // },
        // memos: {
        //   connect: dto.memoId.map(mmId => ({id: mmId}))
        // },
        // groups: {
        //   connect: dto.groupId.map(grpId => ({id: grpId}))
        // },
        order: dto.order,
        // memoStatus: {connect:{ id: +dto.memoStatusId }},
        approvedByUser: {connect: { id: +dto.userId }},
        groupApproval: {
          connect: dto.groupId.map(grpId => ({ id: grpId}))
        },
        memo: {connect: { id: +dto.memoId}},
        // memos: {connect: {id: dto.memoId}},
        createdOn: dto.createdOn,
      },
    });
  }

  findAllMemoApproval() {
    return this.prisma.memoApproval.findMany(
      // include: {
      //   memos: true,
      // }
    );
  }

  findOneMemoApproval(MemoApprovalWhereUniqueInput: Prisma.MemoApprovalWhereUniqueInput) {
    return this.prisma.memoApproval.findUnique({
      where: MemoApprovalWhereUniqueInput
      // include: {
      //   memos: true,
      // }
    });
  }

  updateMemoApproval(where: Prisma.MemoApprovalWhereUniqueInput, data: Prisma.MemoApprovalUpdateInput) {
    return this.prisma.memoApproval.update({
      data,
      where,
    });
  }

  removeMemoApproval(where: Prisma.MemoApprovalWhereUniqueInput) {
    return this.prisma.memoApproval.delete({
      where,
    });
  }

  async createMemoAttachment(dto: CreateMemoAttachmentDto) {
    return await this.prisma.memoAttachment.create({
      data: {
        // memos: {
        //   connect: dto.memoId.map(mmId => ({id: mmId}))
        // },
        // attachmentCreatedByUser: {
        //   connect: dto.createdByUserId.map(crtdBy => ({id: crtdBy}))
        // },
        url: dto.url,
        gspath: dto.gspath,
        fileName: dto.fileName,
        memo: {connect: { id: +dto.memoId}},
        createdByUser: {connect: { id: +dto.userId}},
      },
    });
  }

  findAllMemoAttachment() {
    return this.prisma.memoAttachment.findMany();
  }

  findOneMemoAttachment(MemoAttachmentWhereUniqueInput: Prisma.MemoAttachmentWhereUniqueInput) {
    return this.prisma.memoAttachment.findUnique({
      where: MemoAttachmentWhereUniqueInput,
    });
  }

  updateMemoAttachment(where: Prisma.MemoAttachmentWhereUniqueInput, data: Prisma.MemoAttachmentUpdateInput) {
    return this.prisma.memoAttachment.update({
      data,
      where,
    });
  }

  removeMemoAttachment(where: Prisma.MemoAttachmentWhereUniqueInput) {
    return this.prisma.memoAttachment.delete({
      where,
    });
  }

  async createGroup(dto: CreateGroupDto) {
    return await this.prisma.group.create({
      data: {
        name: dto.name,
      },
    });
  }

  findAllGroup() {
    return this.prisma.group.findMany({
      include: {
        users: true,
        memoApproval: true,
      },
    });
  }

  findOneGroup(GroupWhereUniqueInput: Prisma.GroupWhereUniqueInput) {
    return this.prisma.group.findUnique({
      where: GroupWhereUniqueInput,
      include: {
        users: true,
        memoApproval: true,
      },
    });
  }

  updateGroup(where: Prisma.GroupWhereUniqueInput, data: Prisma.GroupUpdateInput) {
    return this.prisma.group.update({
      data,
      where,
    });
  }

  removeGroup(where: Prisma.GroupWhereUniqueInput) {
    return this.prisma.group.delete({
      where,
    });
  }

  async createMemoCcUser(dto: CreateMemoCCUserDto) {
    return await this.prisma.memoCcUser.create({
      data: {
        // memos: {
        //   connect: dto.memoId.map(mmId => ({id: mmId}))
        // },
        // memoUserLoop: {
        //   connect: dto.userId.map(ccId => ({id: ccId}))
        // },
        memo: {connect: { id: +dto.memoId}},
        userLoop: {connect: { id: +dto.userId}},
      },
    });
  }

  findAllMemoCcUser() {
    return this.prisma.memoCcUser.findMany();
  }

  findOneMemoCcUser(MemoCcUserWhereUniqueInput: Prisma.MemoCcUserWhereUniqueInput) {
    return this.prisma.memoCcUser.findUnique({
      where: MemoCcUserWhereUniqueInput
    });
  }

  updateMemoCcUser(where: Prisma.MemoCcUserWhereUniqueInput, data: Prisma.MemoCcUserUpdateInput) {
    return this.prisma.memoCcUser.update({
      data,
      where,
    });
  }

  removeMemoCcUser(where: Prisma.MemoCcUserWhereUniqueInput) {
    return this.prisma.memoCcUser.delete({
      where,
    });
  }

  async createMemoComment(dto: CreateMemoCommentDto) {
    return await this.prisma.memoComment.create({
      data: {
        comments: dto.comments,
        commentedByUser: {connect: { id: +dto.userId}},
      },
    });
  }

  findAllMemoComment() {
    return this.prisma.memoComment.findMany();
  }

  findOneMemoComment(MemoCommentWhereUniqueInput: Prisma.MemoCommentWhereUniqueInput) {
    return this.prisma.memoComment.findUnique({
      where: MemoCommentWhereUniqueInput
    });
  }

  updateMemoComment(where: Prisma.MemoCommentWhereUniqueInput, data: Prisma.MemoCommentUpdateInput) {
    return this.prisma.memoComment.update({
      data,
      where,
    });
  }

  removeMemoComment(where: Prisma.MemoCommentWhereUniqueInput) {
    return this.prisma.memoComment.delete({
      where,
    });
  }

  async createMemoStatus(dto: CreateMemoStatusDto) {
    return await this.prisma.memoStatus.create({
      data: {
        name: dto.name
      },
    });
  }

  findAllMemoStatus() {
    return this.prisma.memoStatus.findMany();
  }

  findOneMemoStatus(MemoStatusWhereUniqueInput: Prisma.MemoStatusWhereUniqueInput) {
    return this.prisma.memoStatus.findUnique({
      where: MemoStatusWhereUniqueInput
    });
  }

  updateMemoStatus(where: Prisma.MemoStatusWhereUniqueInput, data: Prisma.MemoStatusUpdateInput) {
    return this.prisma.memoStatus.update({
      data,
      where,
    });
  }

  removeMemoStatus(where: Prisma.MemoStatusWhereUniqueInput) {
    return this.prisma.memoStatus.delete({
      where,
    });
  }

  // findAll() {
  //   return this.prisma.ememo.findMany({
  //     include: {

  //     }
  //   })
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} ememo`;
  // }

  // update(id: number, updateEmemoDto: UpdateEmemoDto) {
  //   return `This action updates a #${id} ememo`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} ememo`;
  // }
}
