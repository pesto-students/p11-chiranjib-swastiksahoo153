import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function RecommendationsListSkeleton() {
  return (
    <Box>
      {[1, 2, 3, 4].map((e) => (
        <Skeleton sx={{ height: 70 }} />
      ))}
    </Box>
  );
}
