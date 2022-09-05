import { useContext, useState, useEffect } from "react";
import ProductList from "../../components/productList";
import { ProductsContext } from "../../providers/products";
import { Button, Container, TextInput } from "./style";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const Home = () => {
  const { filteredProduct, filterProducts, categories } = useContext(ProductsContext);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    filterProducts(search, selectedCategory);
  }, [selectedCategory, search]);

    return(
        <Container>

            {categories?.map((category) =>(
                    <Button
                        style={{outline: category == selectedCategory ? '4px solid #FFF' : undefined }}
                        key={category}
                        onClick={() => category == selectedCategory ? setSelectedCategory("") : setSelectedCategory(category)} >
                        {category}
                    </Button>
                ))}

            <div className="filteringInputs">
                <TextInput>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <IconContext.Provider value={{color:'white', style: { marginRight: 10 }}}>
                    <BsSearch />
                </IconContext.Provider>
                </TextInput>
            </div>
            
            <ProductList props={filteredProduct} />
            
        </Container>
    )
};

export default Home;