/** @format */

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link,
} from "@mui/material";
import ImageCarousel from "./ImageCarousel";

interface Park {
  id: string;
  fullName: string;
  states: string;
  url: string;
  image?: string;
}

interface Props {
  parks: Park[];
}

const ParkCards: React.FC<Props> = ({ parks }) => {
  console.log(parks);

  return (
    <Grid container spacing={3}>
      {parks.map((park, index: number) => (
        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 3,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Line 1 */}
            <CardContent
              sx={{
                pb: 1,
                minHeight: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              {/* Park Name */}
              <Typography variant='h6' fontWeight={600} noWrap sx={{ flex: 1 }}>
                {park.fullName}
              </Typography>

              {/* State (2 chars only) */}
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                }}
              >
                {park.states.slice(0, 2)}
              </Typography>
            </CardContent>

            {/* Line 2 */}
            <ImageCarousel alt={park.name} images={park.images} />

            {/* Line 3 */}
            <Box sx={{ p: 2, mt: "auto" }}>
              <Link href={park.url} target='_blank' underline='hover'>
                Visit website
              </Link>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ParkCards;
