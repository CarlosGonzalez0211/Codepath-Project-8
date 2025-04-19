# Web Development Project 7 

Submitted by: Carlos Gonzalez

This web app: **Allows users to create, view, update, and delete custom crewmates with name, power, and color attributes. It uses Supabase for database storage and React for front-end UI.**

Time spent: 3 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The web app contains a page that features a create form to add a new crewmate**
  - [x] Users can name the crewmate
  - [x] Users can set the crewmate’s attributes by clicking on one of several values *(in this case, inputting name, power, and color)*

- [x] **The web app includes a summary page of all the user’s added crewmates**
  - [x] The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  - [x] The summary page is sorted by creation date such that the most recently created crewmates appear at the top

- [x] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - [x] Each crewmate has an edit button that will take users to an update form for the relevant crewmate
  - [x] Users can see the current attributes of their crewmate on the update form
  - [x] After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page 

- [x] **A previously created crewmate can be deleted from the crewmate list**
  - [x] Using the edit form detailed in the previous _crewmates can be updated_ feature, there is a button that allows users to delete that crewmate
  - [x] After deleting a crewmate, the crewmate should no longer be visible in the summary page

- [x] **Each crewmate has a direct, unique URL link to an info page about them**
  - [x] Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
  - [x] The detail page contains extra information about the crewmate not included in the summary page
  - [x] Users can navigate to the edit form from the detail page

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attribute value options
- [ ] A section of the summary page displays summary statistics about a user’s crew on their crew page
- [ ] The summary page displays a custom “success” metric about a user’s crew which changes the look of the crewmate list

The following **additional** features are implemented:

* [x] Polished, responsive UI with styled navigation buttons
* [x] Direct link navigation to create/edit/detail from every view
* [x] Error handling for fetch, update, and delete operations
* [x] Loading states and empty list handling
* [x] Card hover effects and visual enhancements via `App.css`

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='/project8/public/project8.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ...

## Notes

- Supabase case sensitivity was a tricky issue — table names had to match exactly ("Posts" vs "posts").
- Styling and routing logic took care to keep UI consistent across views.
- Extra effort was made to keep user experience intuitive and visually appealing with CSS.

## License

 Copyright 2025 Carlos Gonzalez

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
