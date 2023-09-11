import { Container } from '@mui/material';
import SkeletonColumn from '../skeleton/SkeletonColumn';

const Loading = () => {
  return (
    <Container style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <p style={{ textAlign: "center" }}>Đang tải...</p>
      <SkeletonColumn />
    </Container>
  )
}

export default Loading