import Image from "next/image";

const customLoader = ({ src }) => {
  return src;
};

export default function Images(props) {
  return <Image {...props} loader={customLoader} />;
}
