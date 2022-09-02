export class CreateEmemoDto {
    name: string;
    departmentId: number;
    jobTitle: string;
    companyId: number;
    createdOn: Date;
    updatedOn: Date;
    createdById: number;
    updatedById: number;
    deletedById: number;
    deletedOn: Date;
    status: "ACTIVE" | "DELETED";
    approvals: {
        order: number;
        memoStatus: "PENDING";
    }[];
    memos: {
        addressTo: string;
        from: string;
        createdOn: Date;
        updatedOn: Date;
        submittedOn: Date;
        subject: string;
        content: string;
        executiveChairman: boolean;
    }[];
    memocc: {

    }[];
    
}
