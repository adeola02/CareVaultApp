import Spinner from "../assets/Dual Ring@1x-1.0s-200px-200px (1).svg";
const LoaderStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const Loader = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <div style={LoaderStyle}>
      <img src={Spinner} alt="Spinner" />
    </div>
  );
};

export default Loader;
