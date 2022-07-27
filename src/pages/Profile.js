import { useState } from "react";
import {
  Avatar,
  Container,
  Typography,
  List,
  Divider,
  DialogActions,
  Alert,
  Snackbar,
} from "@mui/material";
import { StyledCard, IconListLink, ListLink, BasicModal } from "../components";
import {
  OnlineIcon,
  OfflineIcon,
  AllergiesIcon,
  MedicationsIcon,
  PreferencesIcon,
  VitalsIcon,
  WellnessIcon,
  RocketIcon,
} from "../components/icons";
import { useCurrentPatient } from "../fetchDataHooks";
import gravatar from "../utils/gravatar";
import auth from "../capableApi/auth";
import { useNavigate } from "react-router-dom";
import PrimaryHeader from "../components/PrimaryHeader";

function Header() {
  // Ignoring any errors because it's just for the avatar URL / memberSince
  // and we'll be graceful about it.
  const { currentPatient } = useCurrentPatient();
  const firstName = currentPatient?.name;
  const memberSince = currentPatient?.joinedAt || "2021"; // hardcode default for demo.

  let avatarUrl;
  if (currentPatient) {
    avatarUrl =
      currentPatient.avatar_url ||
      (currentPatient.email && gravatar(currentPatient.email));
  }

  return (
    <PrimaryHeader>
      <Avatar src={avatarUrl} sx={{ height: 112, width: 112, marginY: 2 }} />

      <Typography
        marginBottom={0.5}
        color="common.white"
        variant="h4"
        component="h1"
      >
        {firstName}
      </Typography>

      <Typography variant="small" component="small">
        Member since {memberSince}
      </Typography>
    </PrimaryHeader>
  );
}

function CareTeamItem({ avatarSrc, practitionerName, isOnline, onClick }) {
  return (
    <StyledCard
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Avatar src={avatarSrc} sx={{ height: 48, width: 48 }} />

      <Typography variant="h6" component="div" marginLeft={1} width="100%">
        {practitionerName}
      </Typography>

      {isOnline ? <OnlineIcon /> : <OfflineIcon />}
    </StyledCard>
  );
}

function ModalContent({ copy }) {
  return (
    <DialogActions
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: 2,
      }}
    >
      <Typography variant="modal" component="h2">
        {copy}
      </Typography>
    </DialogActions>
  );
}

function copyToken(setShowAlert) {
  auth.getAccessToken().then((token) => {
    navigator.clipboard.writeText(token);
    setShowAlert(true);
  });
}

export default function Profile({ signOut }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setmodalContent] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = (content) => {
    setmodalContent(<ModalContent copy={content} />);
    setOpenModal(true);
  };
  const handleLogout = () => {
    // reset the route before signout
    navigate("/");
    signOut();
  };
  const MyInformation = ({ usageMode, surveyId }) => {
    const components = [];
    if (surveyId !== "") {
      components.push(
        <IconListLink
          icon={<WellnessIcon />}
          text="Wellness Profile"
          onClick={() => navigate("/survey")}
        />
      );
    }
    if (usageMode === "demo") {
      components.push(
        <IconListLink
          icon={<AllergiesIcon />}
          text="Allergies"
          onClick={() =>
            handleOpenModal("This section may be populated by intake survey")
          }
        />
      );
      components.push(
        <IconListLink
          icon={<MedicationsIcon />}
          text="Current Medications"
          onClick={() =>
            handleOpenModal(
              "This section may be populated by observations recorded by patient"
            )
          }
        />
      );
      components.push(
        <IconListLink
          icon={<VitalsIcon />}
          text="Vitals & Trends"
          onClick={() =>
            handleOpenModal(
              "This section may be populated by observations recorded by patient"
            )
          }
        />
      );
      components.push(
        <IconListLink
          icon={<PreferencesIcon />}
          text="Care preferences"
          onClick={() =>
            handleOpenModal("This section may launch a questionnaire")
          }
        />
      );
    }
    if (components.length !== 0) {
      return (
        <Container sx={{ marginTop: 3 }}>
          <Typography variant="h6" component="h2">
            My Information
          </Typography>

          <StyledCard sx={{ paddingY: 0 }}>
            <List>
              {components.reduce((prev, curr) => [prev, <Divider />, curr])}
            </List>
          </StyledCard>
        </Container>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <BasicModal
        children={modalContent}
        open={openModal}
        handleClose={handleCloseModal}
      />

      <Header />

      <Container sx={{ marginTop: 3 }}>
        <Typography variant="h6" component="h2">
          My Care Team
        </Typography>

        <CareTeamItem
          avatarSrc={require("../assets/profile-member-03.png")}
          practitionerName="Dr. Lauren Potapova"
          isOnline={false}
        />
        <CareTeamItem
          onClick={() =>
            handleOpenModal(
              "Tapping this camera icon may begin a video call with a member of the patient's care team"
            )
          }
          avatarSrc={require("../assets/profile-member-02.png")}
          practitionerName="Floyd Miles"
          isOnline={true}
        />
      </Container>

      <MyInformation
        usageMode={process.env.REACT_APP_USAGE_MODE}
        surveyId={process.env.REACT_APP_WELLNESS_SURVEY_ID}
      />

      <Container sx={{ marginTop: 3 }}>
        <StyledCard sx={{ paddingY: 0 }}>
          <ListLink
            onClick={() => {
              copyToken(setShowAlert);
            }}
            text="Copy Token"
          />
          <Divider />
          <ListLink
            textColor="error.main"
            onClick={handleLogout}
            text="Logout"
          />
        </StyledCard>
      </Container>

      <Snackbar
        open={showAlert}
        autoHideDuration={4000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        // Adding a little margin to raise the alert over the Nav bar
        sx={{ marginBottom: "3.5rem" }}
      >
        <Alert icon={false} severity="success">
          Token copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}
