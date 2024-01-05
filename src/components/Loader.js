import "../utilis/loadercss.css";

const Loader = () => {
  return (
    <div className="flex items-center w-30 md:w-48 p-4 rounded-lg m-2">
      <div className="loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
    </div>
  );
};

export default Loader;
