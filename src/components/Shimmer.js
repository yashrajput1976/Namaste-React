const ShimmerCard = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line short"></div>
          </div>
        ))}
    </div>
  );
};

export const ShimmerButton = () => {
  return <div className="shimmer-btn"></div>;
};
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <ShimmerButton />
      <ShimmerCard />
    </div>
  );
};
export default Shimmer;
