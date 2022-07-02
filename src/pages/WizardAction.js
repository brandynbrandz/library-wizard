import React from "react";
import { connect } from "react-redux";
import AddSubgenrePage from "./AddSubgenrePage";
import GenrePage from "./GenrePage";
import InformationPage from "./InformationPage";
import SubGenrePage from "./SubGenrePage";
import SuccessPage from "./SuccessPage";

const WizardAction = ({ registration_state }) => {
  switch (registration_state.pages) {
    case 1:
      return <GenrePage />;
    case 2:
      return <SubGenrePage />;
    case 3:
      return <AddSubgenrePage />;
    case 4:
      return <InformationPage />;
    case 5:
      return <SuccessPage />;
    default:
      break;
  }
};

export default connect((state) => ({
  registration_state: state.wizardReducer,
}))(WizardAction);
