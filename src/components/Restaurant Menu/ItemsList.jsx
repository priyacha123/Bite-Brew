import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemsList = ({ data }) => {
const dispatch = useDispatch();

const handleAddItem = (item) => {
  // dispatch an action
  dispatch(addItem(item))
}

  return (
    <>
      {data?.map((item) => (
        <div>
            {item?.card?.info?.name}
            <button
            onClick={
              () => handleAddItem(item)}
            >Add</button>
        </div>
      ))}
    </>
  );
};

export default ItemsList;
