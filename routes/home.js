
module.exports = (app, connection) => {
  
    app.get('/api/', (req, res) => {
  
      let statsQuery = `
        SELECT COUNT(M.id) as total_matches,
          AVG(M.home_team_goal + M.away_team_goal) as avg_score,
          COUNT(DISTINCT M.season) as total_seasons,
          COUNT(DISTINCT M.league_id) as total_leagues,
          COUNT(DISTINCT T.team_api_id) as total_teams
        FROM soccer_db.Match as M, 
          soccer_db.Team as T;
        `
  
      connection.query(statsQuery, (err, results) => {
        if (err) {
          return res.send(err);
        } else {
          return res.json(results);
        }
      });
    });
  };