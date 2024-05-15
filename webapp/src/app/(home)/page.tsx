import React from "react";

export default function Home() {
    return (<React.Fragment>
  <div className="container">
    <header className="text-center">
      <h1>Growdev Mentor Management System</h1>
      <p className="lead">Efficiently manage and allocate mentors to training programs.</p>
    </header>

    <section className="features">
      <h2 className="section-title">Features</h2>
      <ul>
        <li>View the list of registered mentors</li>
        <li>Add new mentors</li>
        <li>Edit mentor details</li>
        <li>Delete mentors</li>
        <li>Filter mentors based on various criteria</li>
      </ul>
    </section>

    <section className="user-stories">
      <h2 className="section-title">User Stories</h2>
      <h3>Manage Mentors</h3>
      <p>As an administrative user of Growdev, I want to manage mentor registrations so that I can allocate mentors to training programs.</p>

      <h4>Acceptance Criteria:</h4>
      
      <h5>Scenario: List Registered Mentors</h5>
      <ul>
        <li>Given that I am within the Growdev management system, when I access the mentors menu, then I should be able to view the list of registered mentors in a table format.</li>
        <li>It displays the option to Add Mentor at the top.</li>
        <li>It displays the option to Edit for each mentor.</li>
        <li>It displays the option to Delete for each mentor.</li>
        <li>It displays the option to go back/forward pages.</li>
        <li>It displays the option to change the number of rows.</li>
      </ul>

      <h5>Scenario: Add New Mentor</h5>
      <ul>
        <li>Given that I am on the mentors listing page, when I click on Add Mentor, then it opens the mentor registration page and displays the empty mandatory fields.</li>
        <li>Given that I enter valid data in the fields, when I click Save, then it creates the new mentor in the database and returns a success message.</li>
        <li>Given that I enter invalid data in the fields, when I click Save, then nothing happens and the button should be disabled.</li>
        <li>Given that I enter valid data in the fields, when I click Save and there is an error on the server, then it does not create the mentor and returns a failure message, and does not persist the data recording in the database.</li>
        <li>Given that I enter valid data in the fields, when I click Cancel, then it returns to the mentors listing page and does not persist the data recording in the database.</li>
      </ul>

      <h5>Scenario: Edit Mentor Registration</h5>
      <ul>
        <li>Given that I am on the mentors listing page, when I click Edit, then it opens the mentor registration page and displays the filled registration fields, enables editing of the editable fields, and changes the page title from New Mentor to Edit Mentor.</li>
        <li>Given that I am on the Mentor Registration page, when I click Save, then it saves the editable data in the database.</li>
        <li>Given that I am on the Mentor Registration page, when I click Cancel, then it returns to the mentors listing page and does not persist the data recording.</li>
      </ul>

      <h5>Scenario: Delete Mentor Registration</h5>
      <ul>
        <li>Given that I am on the mentors listing page, when I click Delete, then it displays a delete confirmation modal.</li>
        <li>Given that I am on the delete confirmation modal, when I click Confirm, then it deletes the mentor record.</li>
        <li>Given that I am on the delete confirmation modal, when I click Cancel, then it closes the modal and does not persist the deletion.</li>
      </ul>
    </section>

    <footer className="text-center mt-5">
      <p>&copy; 2024 Growdev. All rights reserved.</p>
    </footer>
  </div>

    </React.Fragment>)
}