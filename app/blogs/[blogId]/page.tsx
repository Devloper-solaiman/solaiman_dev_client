import { getSingleBlog } from '@/service/blogService/blogService';
import { TBlog } from '@/types';
import React from 'react';

export default async function BlogDetailsPage({ params }: { params: { blogId: string } }) {
    try {
        const data = await getSingleBlog(params?.blogId);
        const blog = data?.data as TBlog;

        if (!blog) {
            return <h1>ব্লগ পাওয়া যায়নি</h1>;
        }

        return (
            <div>
                <h1>Blog page {blog._id}</h1>
            </div>
        );
    } catch (error) {
        console.error("ব্লগ ফেচ করতে সমস্যা হয়েছে:", error);
        return <h1>কিছু সমস্যা হয়েছে</h1>;
    }
}
