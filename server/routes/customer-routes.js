const Customer = require("../models/Customer.js");
const express = require("express");

const router = express.Router();

router.get("/show", (req, res, next) => {
  Customer.find()
    .populate("_product")
    .then(foundCustomers => res.status(200).json(foundCustomers))
    .catch(e => res.status(500).json(e));
});

// preguntar manu por .populate
router.get("/:id", (req, res) => {
  Customer.findById(req.params.id)
    .then(foundCustomer => res.status(200).json(foundCustomer))
    .catch(e =>
      res.status(500).json({
        message: `Customer with id: ${req.params.id} does not exists!`,
        error
      })
    );
});

router.put("/edit/:id", (req, res) => {
  console.log("entro al back en la ruta de customer");
  const name = req.body.name;
  const email = req.body.email;
  Customer.findById(req.params.id).then(foundCustomer => {
    const { name, email } = req.body;
    const updates = { name, email };
    Customer.findByIdAndUpdate(req.params.id, updates, { new: true })
      .then(newCustomer => {
        console.log(newCustomer);
        res.status(200).json(newCustomer);
      })
      .catch(e => res.status(500).json(e));
  });
});

router.post("/create", (req, res) => {
  console.log("entro al back en la ruta de crear customer");
  Customer.findOne({ name: req.body.name }).then(customer => {
    if (customer)
      return res.status(400).json({ message: "The customer already exists!" });
    const newCustomer = new Customer({
      name: req.body.name,
      email: req.body.email
      // location: req.body.location,
      // _product: req.body._product
    });
    console.log(newCustomer);
    newCustomer.save(
      e => (e ? res.status(500).json(e) : res.status(200).json(newCustomer))
    );
  });
});

router.delete("/delete/:id", (req, res) => {
  Customer.findByIdAndRemove(req.params.id)
    .then(customer => res.status(200).json(customer))
    .catch(e => res.status(500).json(e));
});

module.exports = router;
