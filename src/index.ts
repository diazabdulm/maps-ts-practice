import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

console.log("user", user);
console.log("company", company);

new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
});