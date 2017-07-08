// $("#main").append("Dustin Sison");

var awesomeThoughts = "I am Dustin and I am AWESOME!";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");

var HTMLheaderName = "%data%";
var name = "Dustin";
var HTMLheaderRole = "%data%";
var role = "Beginner Web Developer";
var skills = ["Eating", "Sleeping"];

var bio = {
	"name" : "Dustin",
	"role" : "QA Engineer",
	"contact_info" : "dsison34@hotmail.com",
	"picture_url" : "google.com",
	"welcome_message" : "Hello.",
	"skills" : "yeah" 
};

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(bio.name);