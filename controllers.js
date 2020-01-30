const { Coche, Cliente } = require("./models");

// Métodos para coches

exports.listarCoches = (req, res) => {
  Coche.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
};

exports.readCoche = (req, res) => {
  Coche.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
};

exports.deleteCoche = (req, res) => {
  Coche.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
};

exports.updateCoche = (req, res) => {
  Coche.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        marca: req.body.marca,
        modelo: req.body.modelo,
        color: req.body.color
      }
    },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );
};

exports.createCoche = (req, res) => {
  const coche = new Coche({
    marca: req.body.marca,
    modelo: req.body.modelo,
    color: req.body.color
  });
  coche.save((err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
};

// Métodos para clientes

exports.listarClientes = (req, res) => {
  Cliente.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
};

exports.readCliente = (req, res) => {
  Cliente.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
};

exports.deleteCliente = (req, res) => {
  Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
};

exports.updateCliente = (req, res) => {
  Cliente.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        fecha_alta: req.body.fecha_alta
      }
    },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );
};

exports.createCliente = (req, res) => {
  const cliente = new Cliente({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    fecha_alta: req.body.fecha_alta
  });
  cliente.save((err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
};
