import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SortMenu() {

    return (
        <Box display='flex'>
            <Box sx={{ marginLeft: 'auto', mr:1 }}>
                <Paper sx={{ px: 2, py: 1, display: 'flex', color: 'black', alignItems: 'center', cursor: 'pointer' }}>
                    <Typography sx={{ flex: 1, mr: 3 }} variant="subtitle2"><b>Ordenar por: destacados</b></Typography>
                    <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
                </Paper>
            </Box>
        </Box>
    );
}