export interface Account {
    id: string,
    firstName: string,
    lastName: string,
    avatar: string,
    tag: string
}

export interface LogMessage {
    type: string,
    message: string
}

export interface IconAttributes {
    src: string,
    alt: string
}