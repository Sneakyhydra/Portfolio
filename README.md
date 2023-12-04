# Portfolio
This Website is  Made with Next.js  and optimized for fast performance.

Uses  Bootstrap 5  and lots of custom styling for creating a  responsive  and  beautiful  website.

Projects and Blog  render MD files  for easy changes.

Add a live url of any of your projects and see a live demo in your portfolio itself!

## Steps to make this your portfolio -

### Setting up on localhost
1) Use this template -> Create a new repository
2) Clone the newly created repository on your machine.
3) Open the folder in a code editor (VS Code).
4) Open a new terminal in the project root folder.
5) Type ```npm install```
6) Type ```npm run dev```
7) Open ```http://localhost:3000/``` in a browser.

### Editing details of about(home) page
Files to edit are in ```/public/data/about```
1) Replace profile.jpeg with your image (File format should be jpg, jpeg or png).
2) Replace resume.pdf with your resume. Make sure to name it exactly "resume" and file format should be ".pdf".
3) Edit the "about.json" file and fill your details. All details are mandatory. You can add/remove contact details as you wish (The contact object can be empty). The icon field in contact is the classname of the icon you want to use from the font-awesome basic kit ([Font Awesome Search](https://fontawesome.com/search)).

### Editing skills
Files to edit are in ```/public/data/skills```
1) Edit the "skills.json" file. Here the key is the name of the section and objects inside the corresponding array are the skills of this section. The icon field is the classname of the icon from the font-awesome basic kit.

### Removing the branding
1) Edit the file ```/app/projects/page.js```.  Find and remove ```<ThisWebsite />```.

### Editing projects
Files to edit are in ```/public/data/projects```
1) Edit the "projects.json" file. Here the key is the name of the project (Use hyphen(-) instead of spaces). Title, Description, Github Url, Tech Stack are mandatory fields. If you provide a live url (the url of your deployed site) then you can see your live site in the portfolio itself.
2) Inside the same folder, create a new folder with the same name as your project name.
3) Place a MD file and a PNG file inside the newly created folder. Rename these 2 files to your project name.

Note: File formats should be same

### Editing blog
Files to edit are in ```/public/data/articles```
1) Edit the "articles.json" file. Here the key is the name of the article (Use hyphen(-) instead of spaces). All fields are mandatory.
2) Inside the md folder place your MD file for this article. Rename it to your article name.

### Deploying
You can follow the official guide of Vercel on how to deploy a NextJs app ([Guide](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy))

That's it. Now you have your own portfolio website! Please share it with others. Happy Coding :)
