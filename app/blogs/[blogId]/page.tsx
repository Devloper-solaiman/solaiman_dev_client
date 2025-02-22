import { getSingleBlog } from '@/service/blogService/blogService';
import { TBlog } from '@/types';
import React from 'react'

export default async function BlogDetailsPage({params}:{ params: { blogId: string }} ){ 
    const data = await getSingleBlog(params?.blogId);
    const blog = data?.data as TBlog;
    console.log(blog)
    return(
        <div>
            <h1>Blog page {blog?._id} </h1>
        </div>
        )}