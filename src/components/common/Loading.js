import { Card, LinearProgress, Typography } from '@mui/material';


const Loading = () => {
    return (
        <Card sx={{
            display: 'flex', width: '100%', my: 1, flexDirection: 'column', p: 3, textAlign: 'center'
        }}>
            <LinearProgress sx={{mx: 3, mt: 3}} color="info" />
            <Typography variant='h6' sx={{mx: 3, mt: 3}}>Loading Data...</Typography>
        </Card>
    )
}

export default Loading