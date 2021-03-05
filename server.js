const app = require('express')();

app.get('/', (req, res) => res.send('Ready!'));

module.exports = () => {
  app.listen(3000);
}
