
module.exports = (app, connection) => {
  
    app.get('/api/players', (req, res) => {
      const searchParam = req.query.q;
  
      if(!searchParam) {
        res.json({
          error: "Missing required parameter `q`"
        });
        return;
      }
  
      let playerQuery = '';
      if (searchParam == "*") {
        playerQuery = `
          SELECT P.player_name, 
            Attb.date,
            Attb.overall_rating,
            Attb.finishing,
            Attb.ball_control,
            Attb.stamina
          FROM soccer_db.Player as P, soccer_db.Player_Attributes as Attb
          WHERE P.player_api_id = Attb.player_api_id
          LIMIT 100;
          `
      } else {
        playerQuery = `
          SELECT P.player_name, 
            Attb.date,
            Attb.overall_rating,
            Attb.finishing,
            Attb.ball_control,
            Attb.stamina
          FROM soccer_db.Player as P, soccer_db.Player_Attributes as Attb
          WHERE P.player_api_id = Attb.player_api_id 
            AND P.player_name like '%${searchParam}%'
          LIMIT 100;
          `
      }
  
      connection.query(playerQuery, (err, results) => {
        if (err) {
          return res.send(err);
        } else {
          return res.json(results);
        }
      });
    });
  };