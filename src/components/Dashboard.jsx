import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
      <div>
      <h1>Notes Application</h1>
      <p>This is a note application which uses the following api end-points.</p>

      <table>
        <thead>
          <tr>
            <th>API ENDPOINT</th>
            <th>REQUEST TYPE</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>/notes</td>
            <td>GET</td>
            <td>Fetches a single resource</td>
          </tr>

          <tr>
            <td>/notes/:id</td>
            <td>GET</td>
            <td>Fetches a single note/resource</td>
          </tr>

          <tr>
            <td>/notes</td>
            <td>POST</td>
            <td>Creates a new note/resource based on the request data</td>
          </tr>

          <tr>
            <td>/notes/:id</td>
            <td>PUT</td>
            <td>Replaces the entire identified note/resource with the request data</td>
          </tr>

          <tr>
            <td>/notes/:id</td>
            <td>DELETE</td>
            <td>Deletes the identified note/resource</td>
          </tr>
        </tbody>
      </table>

      <div>
        <h3>The Notes application has the following features:</h3>
        <ul>
          <li>Users can create a new note</li>
          <li>Users can view all notes</li>
          <li>Users can select a single note and edit/update it!</li>
          <li>Users can delete a note at a time</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard;