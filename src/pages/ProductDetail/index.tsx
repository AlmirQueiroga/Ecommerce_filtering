import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../models";
import { ProductsContext } from "../../providers/products";
import { Container, Image } from "./style";

const ProductDetail = () => {
    const { productId } = useParams();
    const { getOneProduct } = useContext(ProductsContext);
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        if (productId) {
          setProduct(getOneProduct(productId));
        }
      }, [getOneProduct, productId]);
      
    return(
        
        <Container>
            <h1>{product?.name}</h1>
                <div className="informationContainer">
                    <Image src={product?.images[0].asset.url} alt={product?.images[0].alt} />
                        <div className="descriptionContainer">
                            <h2>{product?.category.name}</h2>
                            <h2>{(product?.shortDescription)}</h2>
                        </div>
                </div>
        </Container>
        
    )
};

export default ProductDetail;