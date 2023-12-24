import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IBlog } from "../interfaces/blog";
import { getAllBlog } from "../api/blog";
import { FaSearch } from "react-icons/fa";
import { searchBlog } from "../api/search";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchData, setSearchData] = useState<IBlog[]>([]);

  const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength
      ? `${description.slice(0, maxLength)}[...]`
      : description;
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const hanldeSearch = async (e: any) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.trim() !== '') {
      const res = await searchBlog(value);
      const { data } = res;
      setSearchData(data);
    } else {
      setSearchData([]);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getAllBlog();
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="mx-auto px-6">
   <div className="flex flex-col md:flex-row gap-2 md:gap-5 lg:gap-10 items-center mt-4 relative mb-5">
   <h1 className="text-4xl flex-shrink-0 font-mtd-balerno">Góc Tư Vấn Mặc Đẹp</h1>
    <div className="relative ml-auto flex-shrink-0">
    <input
      type="text"
      placeholder="Tìm kiếm blog"
      value={searchValue}
      onChange={(e) => hanldeSearch(e)}
      onBlur={() => {
        if (!searchValue.trim()) {
          setSearchData([]);
        }
      }}
      className="p-2 pl-8 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all"
      autoFocus
    />
    <span className="absolute top-0 left-0 bottom-0 px-2 flex items-center">
      <FaSearch className="text-gray-400" />
    </span>
    {searchValue.trim() && searchData.length > 0 && (
      <div className="absolute z-10 bg-white border border-gray-300 mt-2 mt-auto w-full rounded-md shadow-md right-0">
        {searchData.map((value) => (
          <Link
            key={value._id}
            to={`/blog/${value._id}`}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            <div className="flex items-center">
              <img
                src={value.img}
                alt={value.title}
                className="w-8 h-8 object-cover mr-2"
              />
              <div>
                <div className="text-[#FFB000] text-[13px]">{value.title}</div>
                <div  className="text-[#FF0000] text-[10px]"> {value.date || new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )}
  </div>
</div>
        
            <img
              src="blog.png"
              alt=""
              className="h-auto mx-auto"
            />
        <section>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto ml-4">
    {blogs.map((blog) => (
      <div
        key={blog._id}
        className="rounded shadow-sm p-4 relative group hover:transition-all duration-300 bg-white dark:bg-gray-800"
      >
        <div className="">
          <div className="">
            <Link to={`/blog/${blog._id}`}>
              <img
                src={blog.img}
                className="w-full h-auto object-cover mb-4 transition-transform transform rounded-xl"
                alt=""
              />
            </Link>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-[14px] justify-between mb-3 mr-5">
              <Link to={`/blog/${blog._id}`} className="text-[#FF0000]">
                Ngày Đăng : {blog.date || new Date().toLocaleDateString()}
              </Link>
              <div className="my-2">
                <Link to={`/blog/${blog._id}`} className="text-[#FFB000] text-[20px]">
                  {blog.title}
                </Link>
                <Link to={`/blog/${blog._id}`} className="">
                  <p className="my-2">{truncateDescription(blog.description, 300)}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default BlogPage;
