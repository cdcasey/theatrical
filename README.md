# TheatriCAL Group Project Proposal

* 1 member from your team will need to fork this repo and update this README file with your proposal.
* Make sure to preview your proposal in a markdown preview and [use valid markdown syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
  * Unformatted/unreadable proposals will be rejected

## Team Name
Team A

## Group Members
Hunter Jefferson, Tim Barnes, Chris Casey

## Project/Application Name
TheatriCAL

## Project Description
Theatre rehearsals are notoriously difficult to schedule. Actors typically submit black-out dates on paper, email, or via google forms. Regardless of the method, theatre directors need to manually collate the information in order to schedule rehearsals. TheatriCAL puts all of the information necessary to schedule rehearsals in one place. Scheduling rehearsals has never been easier.

## Who uses it?
Anyone trying to organize or be involved in a community theatre production.

## What outputs do they need?
A finalized rehearsal schedule that can be sent out to all members of a production.

## What inputs are needed to generate those outputs?
Information about plays, productions, and actors, specifically black out dates.

## What technologies do you plan to use?
* List libraries/frameworks you plan to use
* Javascript/HTML/CSS
* Node
* Express
* Knex
* PostgreSQL

## Feature list
* List all features in priority order (including stretch features)
* A user can create an account so that they can log in
* A user can log in to view production information
* A director can create a production, specifying a play & production dates
* A director can view a list of their productions
* A director can edit production info
* A director can create a new play
* A director can add actors to their production
* An actor can fill out their black-out dates
* An actor can view production info and rehearsal calendar
* A director can schedule a rehearsal based on actor availability
* A director can make changes to the rehearsal schedule
* A director can send out SMS notifications to actors as needed



##Development notes

4/13/2018
The team worked on project ideas. We laid out what ideas we had, and what the main design features would be. We all agreed on building an app that would help directors manage their rehearsal dates amongst their cast members. We got the basic files started for the framework, and got our server file running.

4/14/2018
The database schema was drawn out and seed data was populated into the database.We also got a basic front end design together so we could start adding routes and views to our application.

4/15/2018
Chris and Hunter met up and started to put together the database and front end. They got a few routes working to show the seed data from the database.

4/16/2018
We got our login system working and started creating routes for data manipulation. We had to reformat the database schema several times to be able to take the new data we wanted to pass it. This allowed us to start adding productions to user accounts and to allow users to edit their profile information.

4/17/2018
Added a calendar to the production admin page, and a cast list section. Started working on a button to add dates and cast members to the production page. Also, started adding a session cookie to the user session so we could more easily keep track of the user ID as it was passed around to different views.

4/18/2018
we got the calendar to work, drop down menu work, and allows people to switch between productions while on the production admin page. We had .CSV file uploading as a goal, but found it to be rather difficult to implement and be able to standardize the format. We considered supplying people with a .CSV form they could fill in so we would know how the data was going to need to be parsed, but opted to just go with a submission form for adding a cast member.

4/19/2018
We have put together the main functionally of the in app interface, and links. We have CRUD actions on most data entities except for events right now. 
