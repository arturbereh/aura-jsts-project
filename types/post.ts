export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type CreatePostRequest = {
    title: string;
    body: string;
    userId: number;
};

export type UpdatePostRequest = {
    title: string;
    body: string;
    userId: number;
};