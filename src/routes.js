"use strict";

const express = require("express");
const router = express.Router();

router.route("/")
    .get((req, res) => {
        console.log("GET /");
        res.status(200).send({
            data: "App is running."
        });
    });

// ---------------------------------------------------
// Edit below this line
// ---------------------------------------------------

const data = require("../config/data.json");

router.route("/women")
    .get((req, res) => {
        console.log("GET /women");
        res.status(200).send(data.women);
    })
    

router.route("/women/:id")
    .get((req, res) => {
        console.log(`GET /women/${req.params.id}`);
        res.status(501).send();
    })
    

module.exports = router;
