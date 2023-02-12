import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingLines
      strokeColor="tomato"
      strokeWidth="5"
      animationDuration="0.75"
      width="20"
      visible={true}
    />
  );
};