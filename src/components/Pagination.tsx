import Paper from "@mui/material/Paper";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export default function Pagination() {
    return (
        <Paper sx={{ mx: 1, mt: 2, p: 2, display: 'flex', justifyContent: 'center', alignItems:'center' }}>
            <IconButton>
                <ArrowBackIosNewIcon sx={{ fontSize: 10 }} />
            </IconButton>
            <Badge badgeContent={1} color="info" sx={{mx:2, cursor:'pointer'}} />
            <IconButton>
                <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
            </IconButton>
        </Paper>
    )
}