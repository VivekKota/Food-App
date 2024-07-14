const shimmer = () => {
  return (
    <div className="restaurantList">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="ShimmerCard"></div>
        ))}
    </div>
  );
};

export default shimmer;
