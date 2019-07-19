const express = require("express");
const router = express.Router();
const TodoItem = require("./../models/TodoItem.js");

router.post("/add", (req, res) => {
  console.log(req.body);
  const testTodo = new TodoItem({
    taskText: req.body.taskText
  });

  testTodo
    .save()
    .then(response => {
      res.send(response);
      res.send("Hello");
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;
