# Build Week Project
Welcome to our take on the Anywhere Fitness build week project!
The Front End was designed by Kenneth Mercer, and the Back End was designed by Hannah Brog.

# Starting the Server
Run the 'npm run start' command from within the anywhere-fitness folder.

# Landing Page
Log in using one of the following sets of credentials, either one will work (Or navigate to the Sign Up section and create your own set of credentials.)

Client - Username: Kenneth, Password: Mercer, Token: Token
Instructor - Username: Bloom, Password: Tech, Token: instructor

If you put anything other than instructor as your token when creating an account, you will create a Client account.

# Classes (Authorization Required)

The List of Classes is pulled direction from Hannah's API, and if you're logged in as an instructor, you can navigate to the bottom and click the Add Class button (Instructor Authorization Required) to add a class to the list.

# Logout

If you click the Log Out button, it will remove the authentication token from localStorage and reroute you back to the login page. This will lock the Classes page, and the ability to add new classes until you log back in.