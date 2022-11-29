import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function TitleSearch() {

    return (
        <Grid item sm={3}>
            <Typography variant="subtitle1">
                Resultados para <b>{new URLSearchParams(window.location.search).get('search')}</b> :
            </Typography>
        </Grid>
    );
}