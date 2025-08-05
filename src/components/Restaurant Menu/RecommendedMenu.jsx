// import { useState } from "react";
import ItemsList from "./ItemsList";

const RecommendedMenu = ({ data, showItems, setShowIndex }) => {
//   const [showItems, setShowItems] = useState(false);

  const handleShowItems = () => {
    setShowIndex();
  };

  return (
    <>
      <div className="category-section">
        <div>
        <li>{data?.title}</li>
        <span onClick={handleShowItems} >👇</span>
        </div>

        {showItems ? <ItemsList key={data?.card?.info?.id} data={data.itemCards} /> : null}

      </div>

    </>
  );
};

export default RecommendedMenu;
