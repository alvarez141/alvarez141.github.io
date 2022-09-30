primero hay que instalat 
npm install react  react-dom

Lugo hay que instalar las dependencias de babel y Webpack
Babel:

npm install @babel/core @babel/preset-env @babel/preset-react

Webpack:

npm install webpack webpack-cli webpack-dev-server

HTML plugin:

npm install babel-loader html-loader html-webpack-plugin

Estido CSS con el plgin SASS:

npm install mini-css-extract-plugin css-loader style-loader sass -D
### si da error usa el comando:  npm install sass-loader -D

### Cargar Imagenes
si no te cargan las imagenes usa : npm install file-loader --save-dev

si el problema persiste instala esto: npm install --save-dev file-loader

	en el webpack usa :
  {
   test: /\.(png|jpe?g|gif)$/i,
   use: [
    	 {
      	   loader: 'file-loader',
      	   options: { name: 'assets/[hash].[ext]' },
         },
      ],
   },


const Header = () => {
	return (

    );
}

export default Header;


##Para leer API debes instalar:
npm install axios

npm install @babel/plugin-transform-runtime


https://github.com/marketplace/actions/deploy-to-github-pages
