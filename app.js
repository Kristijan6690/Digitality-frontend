const http = require('http');
const port = process.env.PORT || 8080



server.listen(port,() => {
  console.log(`Server running at port `+port);
});