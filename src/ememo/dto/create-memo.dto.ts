export class CreateMemoDto {
    addressTo: string;
    from: string;
    departmentId: number;
    companyId: number;
    projectId: number[];
    memoTypeId: number;
    createdOn: Date;
    updatedOn: Date;
    submittedOn: Date;
    memoStatusId: number;
    userId: number;
    subject: string;
    content: string;
    executiveChairman: boolean;
    // approvalId: number[];
    groupId: number[];
    order: number;

    // approvals: {
    //     groupId: number;
    //     order: number;
    //     memoStatus: "PENDING"; 
    //     // memoStatusId: number;
    //     createdOn: Date;
    //     updatedOn: Date;
    //     userId: number;
    // }[];
    // memocc: {
    //     name: string;
    //     groupId: number;
    //     departmentId: number;
    //     jobTitle: string;
    //     companyId: number;
    //     createdOn: Date;
    //     updatedOn: Date;
    //     createdById: number;
    //     updatedById: number;
    //     deletedById: number;
    //     deletedOn: Date;
    //     status: "ACTIVE" | "DELETED";
    // }[];
    // attachments : {
    //     userId: number;
    //     url: string;
    //     gspath: string;
    //     fileName: string;
    // }[];
    // ccusers: {
    //     userId: number;
    // }[];
}