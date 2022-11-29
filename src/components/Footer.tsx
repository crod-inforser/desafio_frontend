import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Footer() {
    return (
        <Grid p={2} pt={1} sx={{ backgroundColor: 'rgb(245,245,245)' }}>
            <Paper sx={{ px: 3, py: 2, display: 'flex', color: 'rgb(24,119,208)', alignItems: 'center', cursor: 'pointer' }}>
                <Typography sx={{ flex: 1 }} variant="subtitle2"><b>Ver informacion legal</b></Typography>
                <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
            </Paper>
        </Grid>
    );
}