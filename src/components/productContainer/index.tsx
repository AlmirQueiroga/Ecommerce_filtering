import { useNavigate } from "react-router-dom";
import { ProductContainerProps } from "../../models";
import { Container } from "./style";

const ProductContainer = ({ props }: ProductContainerProps) => {
    
    const navigate = useNavigate();

    return(
        <Container onClick={() => navigate(`/product_details/${props.id}`)}>
            <h3>{props.name}</h3>
            <img src={props.images[0].asset.url} />
        </Container>
    );
};

export default ProductContainer;