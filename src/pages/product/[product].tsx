// Dependences
import { FC } from "react";

// Hooks
import { useRouter } from "next/router";


const Product: FC = () => {
  const router = useRouter();

  return (
    <>
      product num: {router.query.product}
    </>
  );
}

export default Product;