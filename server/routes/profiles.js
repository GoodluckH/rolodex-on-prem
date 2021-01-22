const router = require("express").Router();
let Profile = require("../models/profile.model");

router.route("/").get((req, res) => {
  Profile.find()
    .then((profiles) => res.json(profiles))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const company = req.body.company;
  const comment = req.body.comment;
  

  const newProfile = new Profile({ firstname, lastname, email,company, comment });

  newProfile
    .save()
    .then(() => res.json("Profile added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Profile.findById(req.params.id)
    .then((profile) => res.json(profile))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Profile.findByIdAndDelete(req.params.id)
    .then((profile) => res.json("Profile deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Profile.findByIdAndUpdate(req.params.id)
    .then((profile) => {
        profile.firstname = req.body.firstname;
        profile.lastname = req.body.lastname;
        profile.email = req.body.email;
        profile.company = req.body.company;
        profile.comment = req.body.comment;

      profile
        .save()
        .then(() => res.json("Profile updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
