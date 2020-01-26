// if you try to acces any invalid routes that don't exist this is the response that's sent

module.exports = app => {
    app.get(`*`, function(req, res) {
        res.send("Invalid route!");
      });
}