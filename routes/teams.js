
module.exports = (app, connection) => {
  // const SELECT_ALL_TEAMS_QUERY = 'SELECT * FROM Team';

  app.get('/api/teams', (req, res) => {
    const searchParam = req.query.q;

    if(!searchParam) {
      res.json({
        error: "Missing required parameter `q`"
      });
      return;
    }

    let teamQuery = '';
    if (searchParam == "*") {
      teamQuery = `
        SELECT Team.team_long_name, 
          Team.team_short_name, 
          Attb.buildUpPlaySpeed, 
          Attb.buildUpPlaySpeedClass,
          Attb.buildUpPlayDribbling, 
          Attb.buildUpPlayDribblingClass,
          Attb.buildUpPlayPassing,
          Attb.buildUpPlayPassingClass
        FROM Team as Team, Team_Attributes as Attb
        WHERE Team.team_api_id = Attb.team_api_id;
        `
    } else {
      // teamQuery = `SELECT * FROM Team WHERE team_long_name like '%${searchParam}%'`;
      teamQuery = `
        SELECT Team.team_long_name, 
          Team.team_short_name, 
          Attb.date,
          Attb.buildUpPlaySpeed, 
          Attb.buildUpPlaySpeedClass,
          Attb.buildUpPlayDribbling, 
          Attb.buildUpPlayDribblingClass,
          Attb.buildUpPlayPassing,
          Attb.buildUpPlayPassingClass
        FROM Team as Team, Team_Attributes as Attb
        WHERE Team.team_api_id = Attb.team_api_id AND 
          team_long_name like '%${searchParam}%';
        `
    }

    connection.query(teamQuery, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
};