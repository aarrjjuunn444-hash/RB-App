# Resume-buider

------------------------------------------
                JSON SERVER
------------------------------------------
1. Create a folder to hold json file
2. Create package.json file inside the folder : npm init -y
3. Create db.json file inside the folder and resources as key to the json file
4. To run json file install json-server : npm i json-server / npm i json-server@0.17.4
5. To run json file in localhost use : npx json-server db.json / node index.js
------------------------------------------
        Deploying A  JSON FILE  using NODE JS
--------------------------------------------------
1. Create index.js file server folder
2. update script in package.json file as "start":"node index.js"
3. create .gitignore file and add 'node_modules' folder
4. Define json-server to run json file in index.js
    - import json-server
    - create server run json file using create() method of jsonServer
    - create middleware used by JSON Server.
    - set up route for json file in server
    - use middleware, route in server app
    - listen the app in given port to resolve client request
5. To run the app, use 'node index.js'
## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
