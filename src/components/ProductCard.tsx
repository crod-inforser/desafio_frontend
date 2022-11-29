import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import { IProduct } from '../redux/initialStates/product'

export default function ProductCard({ product }: { product: IProduct }) {
    return (
        <Grid item sm={4}>
            <Box component={Paper} sx={{ m: 1, p: 1, display: 'flex', flexDirection: 'column' }}>
                <Box component="img" sx={{ maxHeight: '200px', textAlign: 'center', backgroundColor: "rgb(243,243,243)", }} src="https://www.lider.cl/catalogo/images/whiteLineIcon.svg" />

                <Typography variant="subtitle2">
                    <b>{product.brand}</b> {product.description}
                </Typography>
                {
                    product.discount
                        ? (
                            <>
                                <Typography variant="h6">
                                    <b>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format((product.price / 100) * product.discount)}</b>
                                    <Badge color="error" badgeContent={product.discount + "%"} sx={{ ml: 3 }} />
                                </Typography>
                                <Typography variant="caption" sx={{ flex: 1, mb: 5 }}>
                                    <del>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}</del>
                                </Typography>
                            </>
                        )
                        : (
                            <Typography variant="h6" sx={{ flex: 1, mb: 7 }}>
                                <b>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}</b>
                            </Typography>
                        )
                }
                <div>
                    <Button variant="outlined" sx={{ p: 0, px: 0.5, mr: 0.5, fontSize: 10, textTransform: 'none', borderRadius: 10 }}> <LocalShippingOutlinedIcon sx={{ mr: 1, fontSize: 15 }} /> despacho</Button>
                    <Button variant="outlined" color="warning" sx={{ p: 0, px: 0.2, fontSize: 10, textTransform: 'none', borderRadius: 10 }}> <HomeOutlinedIcon sx={{ mr: 0.5, fontSize: 15 }} /> retiro</Button>
                </div>
                <div style={{ textAlign: 'center' }} >
                    <Button variant="outlined" sx={{ textTransform: 'none', textAlign: 'center', py: 0, px: 2, mt: 1, borderRadius: 10, borderColor: 'rgb(245,245,245)', boxShadow: 2 }}>
                        <b>Agregar</b>
                    </Button>
                </div>
            </Box>
        </Grid>
    )
}