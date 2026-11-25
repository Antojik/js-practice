import tasks from "./data.js";
import {
  totalEstimate,
  remainingEstimate,
  countByPriority,
  groupByAssignee,
  indexById,
} from "./utils.js";

console.log("estimate", totalEstimate(tasks));
console.log("remaining", remainingEstimate(tasks));
console.log("count", countByPriority(tasks));
console.log("group", groupByAssignee(tasks));
console.log("indexByID", indexById(tasks));
