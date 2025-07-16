import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonPost() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={"70vw"} height={"20vh"} />
      <Skeleton variant="rectangular" width={"70vw"} height={"20vh"} />
      <Skeleton variant="rectangular" width={"70vw"} height={"20vh"} />
      <Skeleton variant="rectangular" width={"70vw"} height={"20vh"} />
    </Stack>
  );
}
