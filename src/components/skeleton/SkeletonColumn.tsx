// @mui
import { Stack, Skeleton, Box, Paper } from '@mui/material';

// ----------------------------------------------------------------------

export default function SkeletonColumn() {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: 'repeat(1, 1fr)',
        paddingBottom: 2
      }}
    >
      {[...Array(3)].map((_, index) => (
        <Paper variant="outlined" key={index} sx={{ width: 1, height: 30 }}>
          <Skeleton variant="rectangular" height={30} />
        </Paper>
      ))}
    </Box>
  );
}
