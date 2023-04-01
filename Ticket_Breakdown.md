# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
#
### **Ticket 1:** _Create API endpoint for Facilities to save custom Agent ids_
##
***Acceptance Criteria:***
##
- API endpoint created that allows Facilities to save custom ids for Agents they work with
- Custom Agent ids are associated with the Facility
##
**Effort Estimate: 3-5 hours**
##
**Implementation Details:**
##
- Create a new API endpoint that accepts POST requests from Facilities to save custom Agent ids
- Save the custom Agent ids in the database, associated with the Facility and Agent
- Return a success message to the Facility
#
### **Ticket 2:** Update Shifts retrieval function to include custom Agent ids
##
***Acceptance Criteria:***
- Updated getShiftsByFacility function returns the custom Agent id along with other metadata for each Shift
##
**Effort Estimate: 2-3 hours**
##
**Implementation Details:**
##
-  Update the SQL query used by the getShiftsByFacility function to include the custom Agent id field
-  Update the function to return the custom Agent id along with other metadata for each Shift
#
### **Ticket 3:** Update generateReport function to use custom Agent ids
***Acceptance Criteria:***
##
- Updated generateReport function uses the custom Agent id when generating the report for the Facility

##
**Effort Estimate: 2-3 hours**
##
**Implementation Details:**
##

Modify the code in the generateReport function to use the custom Agent id instead of the internal database id when generating the report
Test the updated function to ensure that the report is generated correctly with the custom Agent ids

#
### **Ticket 4:** Update the database schema to support custom Agent ids
***Acceptance Criteria:***
- Database schema is updated to include a new field for custom Agent ids

##
**Effort Estimate: 2-3 hours**
##
**Implementation Details:**
##

- Modify the database schema to include a new field for the custom Agent id
- Modify the code to save the custom Agent id to the new field when it is provided by the Facility

#
### **Ticket 5:** Update the UI to allow Facilities to input custom Agent ids
***Acceptance Criteria:***
##
- UI is updated to allow Facilities to input custom Agent ids for Agents they work with

##
**Effort Estimate: 2-3 hours**
##
**Implementation Details:**
##

- Update the UI to include a new input field for custom Agent ids
- Add validation to ensure that the custom Agent ids are unique for each Facility
- Save the custom Agent ids to the database when submitted by the Facility
