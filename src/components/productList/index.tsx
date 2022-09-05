import { ProductListProps } from "../../models";
import ProductContainer from "../productContainer";
import { Container } from "./styles";

const ProductList = ({ props }: ProductListProps) => {
  return (
    <Container>
      {props?.map((product) => (
        <ProductContainer key={product.id} props={product}></ProductContainer>
      ))}
    </Container>
  );
};
export default ProductList;