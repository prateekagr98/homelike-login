export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html lang = "en">

      <head>
        <meta charset = "UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Global Coaching Labs</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600" rel="stylesheet" />
        <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/stylesheet/styles.css" />
      </head>
      <body>
        <div id = "app"></div>
        <script src="/assets/app.js"></script>
      </body>
    </html>
  `;
};