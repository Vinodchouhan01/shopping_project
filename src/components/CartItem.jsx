import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="bg-white  border-emerald-400 border-b-4 m-10">
      <div className="flex">
        <div className="w-1/4">
          <img src={item.image} alt={item.title} className="w-full" />
        </div>
        <div className="w-3/4 ml-4">
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <h1>{item.description}</h1>
          <div className="flex items-center justify-between">
            <p>{item.price}</p>
            <div onClick={removeFromCart} >
            <MdDelete color="#008000" className="text-3xl mt-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
