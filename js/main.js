function doComment() {

	//store the input that the user gives -get the value of the input
	var userInput = document.getElementById('userInput').value
	var commentInput = document.getElementById('commentInput').value
	
	//format the input
	var userName = document.createTextNode("Username: " + userInput)
	var commentText = document.createTextNode("Comment: " + commentInput)
	
	//create a new list item
	var newListItem = document.createElement('li')

	//create the new usernames and comments.
	var newUserName = document.createElement('h3')
	newUserName.appendChild(userName)
	var newComment = document.createElement('p')
	newComment.appendChild(commentText)

	//add all new input into a group and add a class with styling
	// var newGroup = document.createElement('div')

	//append the new username and comment to the new div
	// newGroup.appendChild(userName)
	// newGroup.appendChild(commentText)

	//before the div was created:
	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)

	//Before the div was created:
	//append the new list item to the ul with id of list
	// document.getElementById('list').appendChild(newListItem)
	
	//append the div to the ul with id of list
	document.getElementById('list').appendChild(newListItem)
}