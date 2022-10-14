import { ThreeCircles } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
const Loader = (props) => {
  const {width} =props
  console.log("width",width)


  return (
    <ThreeCircles
      height={width?width:"100"}
      width={width?width:"100"}
      color="#4d53a9"
      wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
      className="centr-block"
    />
  );
};
export default Loader;
