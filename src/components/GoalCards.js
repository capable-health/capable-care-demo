import { useNavigate } from "react-router-dom";
import useCRMContent from "../fetchDataHooks/useCRMContent";
import useTarget from "../fetchDataHooks/useTarget";
import {
  Box,
  CardContent,
  LinearProgress,
  Typography,
  Divider,
} from "@mui/material";
import StyledCard from "./StyledCard";
import Recurrence from "./Recurrence";
import Observation from "./Observation";

// Helper to build a string to display the number of completed goals.
const progressString = (goalList) => {
  const goalCount = goalList.length;
  const goalsCompleted = goalList.filter(
    (goal) => goal.achievement_status == "achieved"
  ).length;
  return `${goalsCompleted}/${goalCount} Complete`;
};

// Returns the latest observation for a goal.
const latestObservation = (goal) => {
  if (goal.observations.length < 1) {
    return;
  }
  return goal.observations.reduce((o1, o2) =>
    new Date(o1.observed_date) > new Date(o2.observed_date) ? o1 : o2
  );
};

// Renders the most recent observation for a goal if it has any.
const LastLog = ({ observation }) => {
  const { targetData } = useTarget(observation.target_id);
  if (!targetData) return <></>;

  return (
    <>
      <Divider sx={{ marginY: 2 }} />

      <Typography color="grey.900" variant="eyebrow">
        LAST LOG
      </Typography>

      <Observation observation={observation} target={targetData} />
    </>
  );
};

// Renders a Goal card. Also modifies the goal with data from Contentful.
// See the useCRMContent function for more details.
const GoalCard = (props) => {
  const navigate = useNavigate();
  // NOTE: We modify the goal object with content from Contentful here. If you
  //       have forked this app, you most likely will **not** need to do this.
  const { data: goal } = useCRMContent(props.goal);
  const observation = latestObservation(props.goal);

  return (
    <StyledCard
      key={goal.id}
      onClick={() => navigate("/goal", { state: { goal: goal } })}
      sx={{ marginBottom: "1rem", marginTop: 0, padding: 0, cursor: "pointer" }}
    >
      {/*
        This progress bar is currently fixed to 100. In the future it
        should be calculated.
      */}
      <LinearProgress variant="determinate" value={100} />
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography variant="subtitle" sx={{ letterSpacing: "0.01rem" }}>
          {goal.name}
        </Typography>
        {goal.cron_expression && (
          <Recurrence cron_expression={goal.cron_expression} />
        )}

        {observation && <LastLog observation={observation} />}
      </CardContent>
    </StyledCard>
  );
};

// Renders a list of Goals, each on a card.
const GoalCards = ({ goals }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 0.5rem",
        }}
      >
        <Typography variant="subtitle">Goals</Typography>

        <Typography
          variant="subtitle"
          sx={{ display: "flex", gap: 1, fontSize: "0.88rem" }}
        >
          {progressString(goals)}
        </Typography>
      </Box>

      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </>
  );
};

export default GoalCards;
