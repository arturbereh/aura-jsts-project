import type { CreatePostRequest } from "../types/post";

export const POST_DATA: CreatePostRequest = {
    title: 'Testuano post title field',
    body: 'Liberati post body field',
    userId: 7,
};

export const SECOND_POST_DATA: CreatePostRequest = {
    title: 'title another post data',
    body: 'body another post data',
    userId: 7,
};

export const POSTS_DATA = [POST_DATA, SECOND_POST_DATA];