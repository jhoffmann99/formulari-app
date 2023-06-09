export interface CheckReply {
    check: Check,
    completed: boolean,
    data: any,
    email: string,
    firstName: string,
    lastName: string,
    mobilePhone: string,
    salutation: string,
    uid: string,
    answerAt: string,
    createdAt: string
}

export interface Check {
    completed: boolean
    createdAt: string,
    expectedReplies: number,
    lastModifiedAt: string,
    name: string,
    status: any,
    template: Template,
    totalReplies: number,
    transmissionType: string
}

export interface Template {
    name: string,
    createdAt: string,
    uid: string
}