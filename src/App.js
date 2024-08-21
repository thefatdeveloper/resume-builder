import Grid from "@mui/material/Grid";
import MultiStepper from "./Components/MultiStepper";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import EmployeeInfo from "./Components/EmployeeInfo";
import ShowTemplate from "./Components/ShowTemplate";
import EmployeeSkills from "./Components/EmployeeSkills";
import EmployeeExperience from "./Components/EmployeeExperience";
import Resume from "./Components/Resume";

// Task 9: Add employee work import here

import EmployeeEducation from "./Components/EmployeeEducation";

// Task 13: Add employee skills import here

import EmployeeInterests from "./Components/EmployeeInterests";

// Task 16: Add import here

function App() {
  const { activeStep } = useSelector((store) => store.stepper);

  // function to render all the froms
  function renderForms(activeStep) {
    switch (activeStep) {
      case 0:
        return <EmployeeInfo />;
      case 1:
        return <EmployeeExperience />;
      case 2:
        return <EmployeeEducation />;
      case 3:
        return <EmployeeSkills />;
      case 4:
        return <EmployeeInterests />;
      default:
        break;
    }
  }

  return (
    <div className="App">
      {/* final template here.*/}
      <Container label={'margin="none"'} sx={{ mt: 10, mb: 10 }}>
        <MultiStepper sx={{ mt: 6 }} />
        {activeStep < 5 ? (
          <Grid container>
            <Grid item md={8} lg={8} sm={12}>
              {renderForms(activeStep)}
            </Grid>
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <ShowTemplate />
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <Resume />
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default App;
