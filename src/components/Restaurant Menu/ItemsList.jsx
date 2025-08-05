const ItemsList = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <div>
            {item?.card?.info?.name}
        </div>
      ))}
    </>
  );
};

export default ItemsList;
