module.exports = (app, connection) => {
    // app.get('/', (req, res) => {
    //     res.send("hello from my project")
    // });
    const SELECT_ALL_TEAMS_QUERY = 'SELECT * FROM Team';
    app.get('/teams', (req, res) => {
        connection.query(SELECT_ALL_TEAMS_QUERY, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({ data: results });
            }
        });
    });
};