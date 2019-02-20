const bcrypt = require('bcryptjs');

module.exports = {
  login: async (req, res) => {
    try {
      const db = req.app.get('db');
      const { email, password } = req.body;

      let adminResponse = await db.getAdminByEmail(email);
      let admin = adminResponse[0];

      if (!admin) {
        return res.status(401).send('email not found');
      }
      const isAuthenticated = bcrypt.compareSync(password, admin.password);
      if (!isAuthenticated) {
        return res.status(403).send('incorrect password');
      }
      delete admin.password;
      req.session.admin = admin;
      res.send(req.session.admin);
    } catch (error) {
      console.log('error loggin in:', error);
      res.status(500).send(error);
    }
  },
  register: async (req, res) => {
    try {
      const db = req.app.get('db');
      const { userName, email, password } = req.body;

      let adminResponse = await db.getAdminByEmail(email);
      if (adminResponse[0]) {
        return res.status(409).send('email already taken');
      }
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      let response = await db.createAdmin({ userName, email, hash });
      let newAdmin = response[0];

      delete newAdmin.password;

      req.session.admin = newAdmin;
      res.send(newAdmin);
    } catch (err) {
      console.log('error signing up.. please try again.', err);
      res.status(500).send(err);
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  getCurrentAdmin: (req, res) => {
    res.send(req.session.admin);
  }
};
