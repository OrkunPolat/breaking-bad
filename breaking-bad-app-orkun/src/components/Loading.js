import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <Loader
      type="Puff"
      color="#4775"
      height={200}
      width={200}
      timeout={3000} //3 secs
    />
  );
};
export default Loading;
