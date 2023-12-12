import { ProductList } from "../components/products/ProductList";
import { initialData } from "../database/products";
import { ShopLayout } from "../layout/ShopLayout"
import { Typography } from '@mui/material';


export const HomePage = () => {
  return (
    <ShopLayout>
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

        <ProductList 
          products={ initialData.products }
        />
    

    </ShopLayout>
  )
}
