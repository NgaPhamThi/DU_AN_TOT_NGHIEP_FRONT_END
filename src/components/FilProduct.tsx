// import React from "react";

const FilProduct = () => {
  return (
    <div className="grid grid-cols-2 justify-end">
      <div>
        <h2 className="text-2xl font-bold ml-5">Tất cả sản phẩm</h2>
      </div>
      <div className="flex gap-10 justify-end ">
        <div>
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Kích cỡ</option>
            <option value="">Size 1</option>
            <option value="">Size 2</option>
          </select>
        </div>
        <div>
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Màu sắc</option>
            <option value="">Size 1</option>
            <option value="">Size 2</option>
          </select>
        </div>
        <div>
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Giá</option>
            <option value="">Size 1</option>
            <option value="">Size 2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilProduct;
