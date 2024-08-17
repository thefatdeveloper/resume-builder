import Grid from "@mui/material/Grid";
import MultiStepper from "./Components/MultiStepper";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import EmployeeInfo from "./Components/EmployeeInfo";
import ShowTemplate from "./Components/ShowTemplate";

// Task 6: Add employee info import here

// Task 9: Add employee work import here

// Task 11: Add employee education import here

// Task 13: Add employee skills import here

// Task 15: Add employee interests import here

// Task 16: Add import here

function App() {
  const { activeStep } = useSelector((store) => store.stepper);

  // function to render all the froms
  function renderForms(activeStep) {
    switch (activeStep) {
      case 0:
        return <EmployeeInfo />;
      // Task 9: Add employee work case here

      // Task 11: Add employee education case here

      // Task 13: Add employee skills case here

      // Task 15: Add employee interests case here

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
          <Grid container></Grid>
        )}
      </Container>
    </div>
  );
}

export default App;
