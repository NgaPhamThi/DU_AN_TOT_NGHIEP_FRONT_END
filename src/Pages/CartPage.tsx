const CartPage = () => {
  return (
    <div>
      <div className="text-center font-bold text-5xl">Giỏ hàng</div>
      <div>
        <table className="table-auto w-full "style={{marginTop:"50px"}}>
          <thead className="pb-10">
            <tr className="text-left">
              <th className="font-semibold pb-10" style={{paddingLeft: "50px" }}>Sản phẩm</th>
              <th className="font-semibold pb-10 text-center">Số lượng</th>
              <th className="font-semibold pb-10">Đơn hàng</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
