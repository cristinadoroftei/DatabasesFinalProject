const TimeRegistrations = require("../models/time_registrations");

exports.getTimeRegistrationByTaskId = (req, res, next) => {
  const taskId = req.params.id;
  TimeRegistrations.findAll({ where: { task_id: taskId } })
    .then((timeRegistrations) => res.send({ response: timeRegistrations }))
    .catch((err) =>
      console.log(
        `Error when fetching timeRegistrations for task with id: ${taskId}!`,
        err
      )
    );
};

exports.createTimeRegistration = (req, res, next) => {
  TimeRegistrations.create({
    task_id: req.body.task_id,
    person_id: req.user.id,
    minutes_registered: req.body.minutes_registered,
    time_reg_date: req.body.time_reg_date,
  })
    .then((timeRegistration) => res.send({ response: timeRegistration }))
    .catch((err) => console.log("Error when creating timeRegistration", err));
};

exports.updateTimeRegistration = (req, res, next) => {
  const timeRegistrationId = req.params.id;
  TimeRegistrations.findByPk(timeRegistrationId)
    .then((timeRegistration) => timeRegistration.update(req.body))
    .then((updatedTimeRegistration) =>
      res.send({ response: updatedTimeRegistration })
    )
    .catch((err) => console.log("Error when updating timeRegistration!", err));
};

exports.deleteTimeRegistration = (req, res, next) => {
  const timeRegistrationId = req.params.id;
  TimeRegistrations.findByPk(timeRegistrationId)
    .then((timeRegistration) => timeRegistration.destroy())
    .then(() => res.send({ response: "Time registration deleted!" }))
    .catch((err) => console.log("Error when deleting time registration!", err));
};
