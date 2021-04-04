var DataTypes = require("sequelize").DataTypes;
var _companies = require("./companies");
var _invoices = require("./invoices");
var _persons = require("./persons");
var _project_statuses = require("./project_statuses");
var _projects = require("./projects");
var _projects_persons = require("./projects_persons");
var _status_categories = require("./status_categories");
var _task_statuses = require("./task_statuses");
var _tasks = require("./tasks");
var _teams = require("./teams");
var _teams_persons = require("./teams_persons");
var _tests = require("./tests");
var _time_registrations = require("./time_registrations");

function initModels(sequelize) {
  var companies = _companies(sequelize, DataTypes);
  var invoices = _invoices(sequelize, DataTypes);
  var persons = _persons(sequelize, DataTypes);
  var project_statuses = _project_statuses(sequelize, DataTypes);
  var projects = _projects(sequelize, DataTypes);
  var projects_persons = _projects_persons(sequelize, DataTypes);
  var status_categories = _status_categories(sequelize, DataTypes);
  var task_statuses = _task_statuses(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var teams = _teams(sequelize, DataTypes);
  var teams_persons = _teams_persons(sequelize, DataTypes);
  var tests = _tests(sequelize, DataTypes);
  var time_registrations = _time_registrations(sequelize, DataTypes);

  Persons.belongsToMany(Projects, { as: 'projects', through: projects_persons, foreignKey: "person_id", otherKey: "project_id" });
  Projects.belongsToMany(Persons, { as: 'people', through: projects_persons, foreignKey: "project_id", otherKey: "person_id" });
  persons.belongsToMany(teams, { as: 'teams', through: teams_persons, foreignKey: "person_id", otherKey: "team_id" });
  teams.belongsToMany(persons, { as: 'people', through: teams_persons, foreignKey: "team_id", otherKey: "person_id" });
  projects_persons.belongsTo(Persons, { as: "person", foreignKey: "person_id"});
  Persons.hasMany(projects_persons, { as: "projects_people", foreignKey: "person_id"});
  projects_persons.belongsTo(Projects, { as: "project", foreignKey: "project_id"});
  Projects.hasMany(projects_persons, { as: "projects_people", foreignKey: "project_id"});
  persons.belongsTo(companies, { as: "company", foreignKey: "company_id"});
  companies.hasMany(persons, { as: "people", foreignKey: "company_id"});
  projects.belongsTo(companies, { as: "company", foreignKey: "company_id"});
  companies.hasMany(projects, { as: "projects", foreignKey: "company_id"});
  projects.belongsTo(companies, { as: "client", foreignKey: "client_id"});
  companies.hasMany(projects, { as: "client_projects", foreignKey: "client_id"});
  teams_persons.belongsTo(persons, { as: "person", foreignKey: "person_id"});
  persons.hasMany(teams_persons, { as: "teams_people", foreignKey: "person_id"});
  time_registrations.belongsTo(persons, { as: "person", foreignKey: "person_id"});
  persons.hasMany(time_registrations, { as: "time_registrations", foreignKey: "person_id"});
  projects.belongsTo(project_statuses, { as: "project_status", foreignKey: "project_status_id"});
  project_statuses.hasMany(projects, { as: "projects", foreignKey: "project_status_id"});
  invoices.belongsTo(projects, { as: "project", foreignKey: "project_id"});
  projects.hasMany(invoices, { as: "invoices", foreignKey: "project_id"});
  tasks.belongsTo(projects, { as: "project", foreignKey: "project_id"});
  projects.hasMany(tasks, { as: "tasks", foreignKey: "project_id"});
  project_statuses.belongsTo(status_categories, { as: "status_category", foreignKey: "status_category_id"});
  status_categories.hasMany(project_statuses, { as: "project_statuses", foreignKey: "status_category_id"});
  task_statuses.belongsTo(status_categories, { as: "status_category", foreignKey: "status_category_id"});
  status_categories.hasMany(task_statuses, { as: "task_statuses", foreignKey: "status_category_id"});
  tasks.belongsTo(task_statuses, { as: "task_status", foreignKey: "task_status_id"});
  task_statuses.hasMany(tasks, { as: "tasks", foreignKey: "task_status_id"});
  time_registrations.belongsTo(tasks, { as: "task", foreignKey: "task_id"});
  tasks.hasMany(time_registrations, { as: "time_registrations", foreignKey: "task_id"});
  teams_persons.belongsTo(teams, { as: "team", foreignKey: "team_id"});
  teams.hasMany(teams_persons, { as: "teams_people", foreignKey: "team_id"});

  return {
    companies,
    invoices,
    persons,
    project_statuses,
    projects,
    projects_persons,
    status_categories,
    task_statuses,
    tasks,
    teams,
    teams_persons,
    tests,
    time_registrations,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
