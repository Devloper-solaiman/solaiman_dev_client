"use client";
import { getSingleBlog } from '@/service/blogService/blogService';
import { TBlog } from '@/types';
import React, { useEffect, useState } from 'react';

export default function BlogDetailsPage({ params }: { params: { blogId: string } }) {
    const [blog, setBlog] = useState<TBlog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlog() {
            try {
                const data = await getSingleBlog(params.blogId);
                setBlog(data?.data as TBlog);
            } catch (error) {
                console.error("ব্লগ লোড করতে সমস্যা হয়েছে:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchBlog();
    }, [params.blogId]);

    if (loading) return <h1>লোড হচ্ছে...</h1>;

    return (
        <div>
            <h1>Blog page {blog?._id}</h1>
        </div>
    );
}
