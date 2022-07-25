import {
  Avatar,
  Box,
  Card,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";
import BackButton from "../components/BackButton";
import HeaderImage from "../components/HeaderImage";
import RichText from "../components/RichText";
import { useCRMContent, useCurrentCarePlan } from "../fetchDataHooks";

function CarePlanHeader({ currentPlan }) {
  return (
    <Card sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <BackButton route="/home" />
        </Box>
        <Box sx={{ marginX: "1.5rem", marginY: "1rem" }}>
          <Typography variant="eyebrow" sx={{ color: "white" }}>
            Current Plan
          </Typography>
          <Typography variant="h5" sx={{ color: "white", fontWeight: 500 }}>
            {currentPlan.name}
          </Typography>
        </Box>
      </Box>
      <HeaderImage data={currentPlan} />
    </Card>
  );
}



// Renders the "Last Modified" section.
function LastModified({ date }) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);

  return (
    <Box>
      <Typography variant="small" sx={{ color: "grey.900" }}>
        Last Modified
      </Typography>
      <Typography variant="h6">{formattedDate}</Typography>
    </Box>
  );
}

// Wrapper component that merges in the data from Contentful.
function CurrentPlanWithContent(props) {
  // NOTE: We modify the currentPlan object with content from Contentful here. If you
  //       have forked this app, you most likely will **not** need to do this.
  const { isLoading, data: currentPlan } = useCRMContent(props.currentPlan);
  if (isLoading)
    return <Skeleton variant="rectangular" animation="wave" height={280} />;

  return (
    <>
      <CarePlanHeader currentPlan={currentPlan} />

      <Container sx={{ marginBottom: 5 }}>
        <RichText
          content={currentPlan.description}
          sx={{
            marginBottom: "0rem",
            letterSpacing: "0.015rem",
          }}
        />
        <LastModified date={currentPlan.updated_at} />
      </Container>
    </>
  );
}

export default function CurrentPlan() {
  const { currentPlan, isLoading, isError } = useCurrentCarePlan();

  if (isLoading)
    return <Skeleton variant="rectangular" animation="wave" height={280} />;
  if (isError) return <div>Woops something went wrong...</div>;

  return <CurrentPlanWithContent currentPlan={currentPlan} />;
}
