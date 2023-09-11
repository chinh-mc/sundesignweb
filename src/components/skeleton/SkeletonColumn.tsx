// @mui
import { Stack, Skeleton, Box, Paper } from '@mui/material';

// ----------------------------------------------------------------------

export default function SkeletonColumn() {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {[...Array(4)].map((_, index) => (
        <Paper variant="outlined" key={index} sx={{ p: 2.5, width: 310 }}>
          <Stack spacing={2}>
            <Skeleton variant="rectangular" sx={{ paddingTop: '75%', }} />
            <Skeleton variant="rectangular" sx={{ paddingTop: '25%' }} />
            <Skeleton variant="rectangular" sx={{ paddingTop: '25%' }} />
          </Stack>
        </Paper>
      ))}
    </Box>
  );
}
