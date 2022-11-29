import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import SortMenu from '../components/SortMenu';
import TitleSearch from '../components/TitleSearch';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

import { searchProductThunk } from '../redux/reducers/product/thunk';
import { IRootState } from '../redux/reducers';
import { AppDispatch } from '../redux/store'
import { Typography } from '@mui/material';

export default function ButtonAppBar() {
    const dispatch = useDispatch<AppDispatch>();

    const { products } = useSelector((a: IRootState) => a.product)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('search'))
            dispatch(searchProductThunk({ payload: { search: params.get('search') } }));
    }, [dispatch])

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', color: 'rgb(82,89,115)' }}>
            <Navbar />
            <Grid container p={2} pb={1} sx={{ backgroundColor: 'rgb(245,245,245)', flex: 1 }}>
                <TitleSearch />
                <Grid item sm={9} >
                    <Box display="flex" flexDirection="column" height='100%'>
                        <SortMenu />
                        <Grid container sx={{ flex: 1 }}>
                            {
                                products?.length
                                    ? products.map((product, k) => <ProductCard product={product} key={k} />)
                                    : <Typography sx={{ mt: 3 }} variant="h5">No hay productos que coincidan con la búsqueda.</Typography>
                            }
                        </Grid>
                        <Pagination />
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </ Box>
    );
}