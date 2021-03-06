# NextJs Typescript Starter-Kit

##### Before Starting

- [System Requirements](#system-requirements)
- [Global Packages](#global-packages)
- [Installation](#installation)
- [Development](#development)
- [Production](#production)
- [Project Structure](#project-structure)

### **System Requirements**

- [NodeJS]
- [Yarn]
- [Npm]

[nodejs]: http://nodejs.org
[npm]: http://www.npmjs.com

### **Global Packages**

- [sass](https://github.com/brigade/scss-lint) - `$ gem install sass`
- [scss_lint](https://github.com/brigade/scss-lint) - `$ gem install scss_lint`

### **Included Packages**

- [Mobx](https://mobx.js.org/) - _State Management_
- [Next](https://nextjs.org/) - _Server Side Rendering_
- [Axios](https://alligator.io/react/axios-react/) - _HTTP Client usage_

### **Installation**

```sh
$ git clone git@github.com:agursoyy/NextJs-Typescript-Starter-Kit.git
$ cd NextJs-Typescript-Starter-Kit
$ npm install
```

### **VSCode Settings!**

To set up VsCode Settings,

```sh
$ you should use settings.json.
```

### **Development**

Next'in sunuma başlaması ve değişiklikleri takip etmesi için,
you should start the application on development server with the following comment

```sh
$ npm run dev
```

Project will start on the http://localhost:3000 url.

### Production

```sh
$ npm run build
$ npm run start
```

### **Project Structure**

- app - _body of the kit_
  - components - \_components which will be used on the pages\_\_
    - .tsx,.scss,.text,index.ts files belonging to a component.
  - pages - \_nextjs pages\_\_
  - styles - _Sass, görsel ve font dosyaları için ayrılmış alan_
    - fonts - \_Font files
    - images - _İmaj dosyaları_
    - sass - _Sass dosyaları_
      - bootstrap - _Bootstrap files_
      - components - _styles of component files_
      - mixins - _sass mixins_
      - overrides - _to modify some bootstrap classes when required_
      - variables - _Global sass variables_
  - static - \_static files\_\_
    - assets - \_this directory will be generated by webpack\_\_
- server - \_custom server configurations\_\_
