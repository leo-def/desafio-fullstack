import React from "react";
import { render } from "@testing-library/react";
import Home from "./page";

describe("Home Component", () => {
  it("renders the header with correct title and description", () => {
    const { getByText } = render(<Home />);
    const titleElement = getByText("Growdev Mentor Management System");
    const descriptionElement = getByText(
      "Efficiently manage and allocate mentors to training programs."
    );

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders the list of features", () => {
    const { getByText } = render(<Home />);
    const featuresSection = getByText("Features");
    expect(featuresSection).toBeInTheDocument();
  });

  it("renders the user stories section with correct title and scenarios", () => {
    const { getByText } = render(<Home />);
    const userStoriesSection = getByText("User Stories");
    const manageMentorsTitle = getByText("Manage Mentors");

    expect(userStoriesSection).toBeInTheDocument();
    expect(manageMentorsTitle).toBeInTheDocument();
  });

  it("renders the acceptance criteria for each scenario", () => {
    const { getByText } = render(<Home />);
    const listRegisteredMentorsScenario = getByText("Scenario: List Registered Mentors");
    const addNewMentorScenario = getByText("Scenario: Add New Mentor");
    const editMentorRegistrationScenario = getByText("Scenario: Edit Mentor Registration");
    const deleteMentorRegistrationScenario = getByText("Scenario: Delete Mentor Registration");

    expect(listRegisteredMentorsScenario).toBeInTheDocument();
    expect(addNewMentorScenario).toBeInTheDocument();
    expect(editMentorRegistrationScenario).toBeInTheDocument();
    expect(deleteMentorRegistrationScenario).toBeInTheDocument();
  });
});
