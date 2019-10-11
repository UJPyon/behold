# BEHOLD

Behold is an app for viewing awesome art and architecture student works of art. Peruse showcased projects that you can view, leave encouraging comments, and show your appreciation for!

Visit the app today and behold some awesome projects:

https://behold-aa.herokuapp.com/#/


## Technologies Used
This project uses a React/Redux frontend supported by Ruby on Rails backend framework using PostgreSQL. Amazon Web Services API was used to hold the database of uploaded images for development and deploying the seed files to Heroku. 


## Highlighted Features

### * Viewing User Projects
The main feature of this app involves viewing an index of projects, which are all individually clickable and allows the viewing of a project's images. Some of the challenges faced when creating the project views were the implementation of modals, hosting images, and speeding up load times for all projects and images. The AWS (Amazon Web Services) API was used as an answer for storing all project images. Each project is given a ```has_many_attached``` association with the image URL's hosted on AWS. 

The Rails jbuilder was designed to serve up a normalized state shape of the project for quick O(1) queries for information pertaining to a particular project. For example, each project has an array of the ID's of comments and appreciations associated to it, which can then be fetched by their associated ID keys without having to search through each comment or appreciation association for the relative info. 

The normalized state shape allows for quick conditional checks for buttons on the project page, such as displaying an X to delete a comment only if you are the author:

```javascript
// --Conditional that displays X to delete comment only if the current user is the author--
let deleteComment;
if (this.props.currentUser.id === authorId) {
  deleteComment = <span className="comment-delete" onClick={() => this.deleteComment(comment.id)}>&times;</span>;
} else {
  deleteComment = <span></span>;
}
```

...or creating logic for what a button looks like based on whether a user has liked a project or not:

```javascript
// --Conditional button for appreciations--
let likeButton;
if (!this.props.currentUser.appreciatedProjectIds.includes(this.state.id)) {
  likeButton = 
  <button className="project-section-like-button" onClick={() => this.handleLikeClick(this.state.id)}>
    <i className='fas'>&#xf164;</i>
  </button>
} else {
  likeButton = 
  <button className="project-section-unlike-button" onClick={() => this.handleUnlikeClick(this.state.id)}>
    <i className='fas'>&#xf164;</i>
    <p>{this.props.project.appreciations}</p>
  </button>
}
```


### * Two-Step User Authentication
Logging into the app requires a two-step user authentication that, when an email is submitted, an ajax request is sent to the Rails backend to confirm whether or not that user exists in the database. If that the email exists, the form will proceed to ask the user for a password; otherwise it will prompt the user that the email does not exist in the database. This feature required mapping sign up & login errors to appear in the correct positions and change values depending on whether an input was invalid or not. 

My solution to this issue was to build in two methods that handle conditional logic. One switches the input CSS class if the state of the app returned with particular errors at a particular input field: 

```javascript
// --Method for displaying errors if it exists, or an empty placeholder if it doesn't
errorDoesExist(errorMsg, additErrorMsg = null) {
  if (this.props.errors.includes(errorMsg)) {
    return errorMsg;
  } else if (this.props.errors.includes(additErrorMsg)) {
    return additErrorMsg;
  } else {
    return null;
  }
}
```

The other method switches between having no error display and displaying the error underneath the specified inputs as well as underlining the input in red: 

```javascript
// --Method to display form input classes with or without errors
inputBorderType(errorMsg, additErrorMsg = null) {
  if (this.props.errors.includes(errorMsg) || this.props.errors.includes(additErrorMsg)) {
    return "error-";
  } else {
    return "";
  }
}
```

These two methods are implemented in the following render code:

```javascript
  {/* --CODE FROM SIGN UP FORM-- */}
  {/* Email input */}
  <section>
    <label htmlFor="email">Email address</label>
    {/* Conditional errors rendering through class name change */}
    <input
      className={this.inputBorderType(this.state.error1, this.state.error7) + "session-input"}
      id="email"
      type="email"
      onChange={this.update("email")}
    />
    {/* Conditional error display depending on input error; error 7 includes a link to switch forms */}
    <p>{this.errorDoesExist(this.state.error1, this.state.error7)}&nbsp;{this.errorLink(this.state.error7)}</p>
```