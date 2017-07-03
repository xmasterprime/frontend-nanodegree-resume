// $("#main").append("Dustin Sison");

var awesomeThoughts = "I am Dustin and I am AWESOME!";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");

$("#main").append(funThoughts);

var HTMLheaderName = "%data%";
var name = "Dustin";
var HTMLheaderRole = "%data%";
var role = "Beginner Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);