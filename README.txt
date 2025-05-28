
Let's think about how many modules we're gonna need.

------------CSS------------

- Main display on the left section module
        #Logo
        #Discover
        #Add a new task
        #Search task or project
        #Today

- Main display on left - projects section
        #My projects
        #Add new project icon
        #sample project folder
        #deleted tasks tab

        
- Main display on the right section module
        #Basically empty (default -Today task shown)



------------Logics------------

------------Logic for:------------

- Adding a new task
- Searching task or project
- Sorting Today due items from all projects and tasks
- clicking the task files in project folders

- 



------------Client can:------------

1. Add a new task

2. Search task or project

3. Check Today Due items

4. Click on made project folders

5. Select a task file from a project folder

6. Add and Edit Task:
        a. Add a new task details:
                #Add task name
                #choose project folder (OR) #create new project
                #add description
                #add notes
                #add task (OR) #cancel task

        b. Edit existing task details:
                #Edit task name
                #change project folder (OR) #create new project
                #add or edit description
                #add or edit notes
                #Save edits (OR) #cancel task


7. Manipulate ITEMS: 
        a. Add a new item in a task:
                see details
                #mark as done
                #Set item name
                #add description
                #pick due date
                #set priority
                #add item
                #cancel item adding

        b. Edit an existing unmarked item:
                #mark as done
                #click on details icon
                see details
                #edit item name
                #add or edit description
                #pick or edit due date
                #set or edit priority
                #save edit (OR) #delete item

        c. Edit a marked as done item:
                #Unmark
                #click on delete icon
                #click on details icon
                see details
                #edit item name
                #add or edit description
                #pick or edit due date
                #set or edit priority
                #save edit (OR) #delete item

8. Select empty project(s):
        #delete project
        #add new task

9. Select Deleted tasks:
        #See the deleted tasks
        #Recover the deleted task (and its parent folder if it's empty)






{
  "devDependencies": {
    "css-loader": "^7.1.2",
    "html-loader": "^5.1.0",
    "html-webpack-plugin": "^5.6.3",
    "style-loader": "^4.0.0",
    "svg-inline-loader": "^0.8.2",
    "webpack-cli": "^6.0.1",
    "webpack-dev-server": "^5.2.1",
    "webpack-merge": "^6.0.1"
  },
  "scripts": {
    "start": "webpack serve --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js",
    "deploy": "git subtree push --prefix dist origin gh-pages --force"
  }
}
