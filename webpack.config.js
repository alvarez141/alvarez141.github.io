const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@icons": path.resolve(__dirname, "public/assets/icons/"),
      "@logos": path.resolve(__dirname, "public/assets/logos/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@context": path.resolve(__dirname, "src/context/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          // Crea nodos `style` a partir de cadenas JS
          "style-loader",
          // Traduce el CSS a CommonJS
          "css-loader",
          // Compila Sass a CSS
          "sass-loader",
        ],
      },
      {
        //carga las imagenes
        //npm install --save-dev file-loader
        test: /\.(png|jpg|svg|jp(e*)g|webp|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: { name: "assets/pictures/[hash].[ext]" },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      // lo puedes llamar public o dist
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
};
