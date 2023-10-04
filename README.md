# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Learn About Markdown file
- [ReadMe](https://medium.com/@saumya.ranjan/how-to-write-a-readme-md-file-markdown-file-20cb7cbcd6f)

### Introduction to React JS
- [Know about React](https://react.dev/)
### What is vite and why vite
> Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

### How to create project using vite platform?
- npm create vite@latest my-react-app --template react
- npm install > this command download node_modules folder and files

### How to run and build project with vite?
- npm run dev > this command is used to start project in specific port.
- npm run build > this command is used to ready project for deployment server.
_create dist folder for production.

### Disscuss about react project structure?
### Ready to react project structure for smooth coding skill
### Necessary tools of VSCODE to develop REACT JS project.
- vs code icons
- stylelint > this is used to traking css error.
- tailwindcss intellisense
- auto close tag
- auto import ES6,TS,JS
- auto rename tag
- Eslint
- npm intellisense
- reactjs code snippet
- vscode react refactor
- path intellisense
- postman
- thunder clients
- prettier 
- snipped > It's used to take screenshot CTR+SHIFT+P

### JSX Convension
### JSX functional component

```JavaScript
const Hero = () => {
    return (
        <div>
        </div>
    );
};
export default Hero;
```
### JSX inline if else
```JavaScript
const mark = 90;
const Gpa = () => {
    return (
        <div>
            {mark >=90? <h3> Excellent </h3> : <h3> Good </h3>}
        </div>
    );
};
export default Gpa;
```
### Immediately-invoke function
```JavaScript
const mark = 80;
const Gpa = () => {
    return (
        <div>
             <h2>Grading System </h2>
                {(
                    ()=>{
                    if(mark >= 80){
                        return <h3>GPA: 5</h3>
                    }
                    else if(mark >=70 && mark <=79){
                        return <h3>GPA: 4</h3>
                    }
                    else if(mark >=60 && mark <= 69){
                        return <h3>GPA: 3</h3>
                    }
                    else{
                        return <h3>Try again for this course</h3>
                    }
                    }
                )()}
        </div>
    );
};
export default Gpa;
```
### Add CSS
```JavaScript
    const mystyle = {
    theme:{
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      width:"30%",
      borderRadius: "10px"
    }
    return (
        <div>
            <h2 style={myStyle.theme}> </h2>
        </div>
    )
  };
```
### JSX loop inside
```JavaScript
const City = () => {
    const cities = ['Dhaka', 'Rajshahi', 'Khulna','Brammanbaria'];
    return (
        <div>
            <h2>List Of City !</h2>
            <ul>
                {
                cities.map((city, i)=> {
                    return <li key={i.toString()}>{city}</li>
                })
                }
            </ul>
        </div>
    );
};
export default City;
```
- General loop can't return
- General loop re-execute blok of code.
### Conditional Rendaring