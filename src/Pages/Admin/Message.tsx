import React, { useEffect, useState } from 'react'
import { Comments } from '../../interfaces/comment';
import { getComment } from '../../api/comment';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../interfaces/product';
import { getById } from '../../api/product';



const Message = () => {
    const [comments, setComments] = useState<Comments[]>([]);
    const { productId } = useParams();
    const fetchComment = async () => {
        if (productId) {
            const { data } = await getComment(productId)
            console.log(data);
            setComments(data.comments)

        }
    }
    useEffect(() => {
        fetchComment()
    }, [])

    return (
        <body className="bg-gray-100">

            <div className="container mx-auto mt-10 p-4 bg-white rounded shadow-xl">
                <div className="">
                    <input type="text" placeholder="Tìm kiếm bình luận..." className="w-full p-2 border rounded" />

                    <div className="flex mt-2 space-x-4">

                        <input type="date" className="p-2 border rounded" />
                        <span>đến</span>
                        <input type="date" className="p-2 border rounded" />
                    </div>
                    <button onClick={fetchComment}>Tìm kiếm</button>
                </div>

                <table className="mt-4 w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="border p-2">ID</th>
                            <th className="border p-2">Tên sản phẩm</th>
                            <th className="border p-2">Tên người gửi</th>
                            <th className="border p-2">Nội dung</th>
                            <th className="border p-2">Ngày gửi</th>
                            <th className="border p-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>

                        {comments.map((comment, index) => (
                            <tr className='text-center' key={comment._id}>
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2">Sản phẩm A</td>
                                <td className="border p-2">{typeof comment.userId === 'object' && 'username' in comment.userId
                                    ? (comment.userId as { username: string }).username
                                    : 'Unknown'}</td>
                                <td className="border p-2">{comment.content}</td>
                                <td className="border p-2">{comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : "Không rõ"}</td>
                                <td className="border p-2 text-center">
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">Xóa</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

                <div className="mt-4 flex justify-center">

                    <button className="bg-blue-500 text-white px-4 py-2 rounded">1</button>
                    <button className="bg-white text-blue-500 px-4 py-2 rounded ml-2">2</button>

                </div>
            </div>

        </body>
    )
}

export default Message