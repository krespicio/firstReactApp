const express = require("express");
const router = express.Router();
const TodoItem = require("./../models/TodoItem.js");

router.post("/add", (req, res) => {
  //   console.log(req.body);
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

router.get("/all", (req, res) => {
  TodoItem.find({}, (err, tasks) => {
    if (!err) {
      res.send(tasks);
    }
  });
});

router.post("/toggle", (req, res) => {
  TodoItem.findById(req.body.id, (err, task) => {
    if (!err) {
      task.complete = !task.complete;
      task.save(err => {
        if (!err) {
          TodoItem.find({}, (err2, tasks) => {
            if (!err2) {
              res.send(tasks);
            }
          });
        }
      });
      // res.send(task);
    }
  });
});

router.post("/delete", (req, res) => {
  console.log(req.body.id);
  TodoItem.findOneAndDelete({ _id: req.body.id }, (err, task) => {
    if (!err) {
      console.log(task);
      TodoItem.find({}, (err2, tasks) => {
        if (!err2) {
          res.send(tasks);
        }
      });
    }
  });
});

module.exports = router;
