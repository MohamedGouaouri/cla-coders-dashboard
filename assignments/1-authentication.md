## Authentication
The first two pages that you are asked to develop are signin and signup pages.
In these assignments, we recommend you create a react application using Vite which can be looked up [here](https://vitejs.dev/),  and intialize it with tailwind css.
For the file structure, you are free to go with any structure you want but we recommend the following structure:
![structure](./images/structure.png)

- In the pages folder, we put code files related to the pages
- In the components folder, we put the different react components used in these pages
- In the api folder, we put code that interacts with the remote API to fetch or mutate data
- In the contexts folder, we put things related any custom react context we use.
- In the hooks folder, we put our custom hooks
- In the redux folder, we put code for redux

### Tasks
1. Develop the signup page UI
![signup](./images/signup.png)
2. Develop the signin page UI
![signup](./images/signin.png)

3. Setup react router and add routing logic between the signin and signup pages

4. Setup initial redux toolkit store and RTK query api for signin and signup. RTK query is a data fetching api developed by RTK team which is very powerfull and it can be integrated easily with redux

> **_NOTE1:_**  The fourth step is an optional step here, you can skip it now and add it later once you setup a real communication with your backend

> **_NOTE2:_**  You are free to use any data fetching library, but we recommend RTK query


5- Add form validation with [react hook form](https://react-hook-form.com/)
