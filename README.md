# recroot

##Description

Currently in development. Recroot is a scheduling application that will enable users to
schedule gameplay in tandem with other users at conventions. Utilizes Cordova, JavaScript, jQuery, Bootstrap, & CSS

## Setup
1. Clone the repository to a web server
1. In a web browser, navigate to the /www directory
1. You should see the Cordova "Hello world" page with the message "Connecting to device"

## Adding React
1. In Terminal (or CL program of choice) navigate to the recroot directory.
1. Create a new React app in the main recroot folder using </br>
   <code>npm install -g create-react-app</code></br>
   <code>create-react-app recroot</code>
1. This will create a new <code>recroot</code> folder in the Cordova <code>recroot</code> folder. Clear all the contents of the <code>www</code> folder in the main <code>recroot</code> folder.
1. <code>cd</code> into the newly created <code>recroot</code> folder & open <code>package.json</code>
1. Before <code>dependencies</code> add <code>"homepage": "./",</code> & inside <code>scripts</code> change the value of <code>build</code> to <code>"react-scripts build && robocopy .\\build ..\\www /MIR",</code>
1. <code>npm run build</code> will create a build of the react app and at the same time copy the files into the Cordova <code>www</code> folder


![Wireframe 1](/www/img/recroot_wireframe1.png?raw=true)
![Wireframe 2](/www/img/recroot_wireframe2.png?raw=true)
