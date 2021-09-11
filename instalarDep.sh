#! /bin/bash
npm init -y &&
npm install express-graphql ;
npm install express nodemon graphql mongoose ;
npm install  @babel/core @babel/node @babel/cli @babel/preset-env  ;
#  "start": "nodemon src/index.js --exec babel-node"      agregar esta linea a package. json
mkdir src dist ;
echo '{"presets" : [
    "@babel/preset-env"
]
}' > .babelrc ;
cd src &&
touch index.js;





