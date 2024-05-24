import { Box, Container, Stack, Typography } from "@mui/material";


const Navbar = () => {
    return (
        <Container>
            <Stack py={2}
            direction='row'
            justifyContent='space-between'>
                <Typography variant="h5" component='h1' fontWeight={600}>
                    O <Box component='span' color='primary.main' >
                        n</Box> line Hospital
                </Typography>
            </Stack>
        </Container>
    );
};

export default Navbar;