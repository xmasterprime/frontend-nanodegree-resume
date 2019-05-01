var bio = {
	"name": "Dustin Sison",
	"role": "QA Engineer",
	"contacts": {
		"mobile": "650-291-5310",
		"email": "dsison34@hotmail.com",
		"github": "https://github.com/xmasterprime",
		"twitter": "https://twitter.com/XMasterPrime",
		"location": "South San Francisco, CA"
	},
	"welcomeMessage": "Hello.",
	"skills": [
		"Manual QA Testing"
	],
	"bioPic": "https://avatars0.githubusercontent.com/u/21117013?s=460&v=4"
	}

var education = {
	"schools": [
		{
		"name": "San Francisco State University",
		"location": "San Francisco, CA",
		"degree": "Bachelors of the Arts",
		"dates": "June 2013",
		"url": "sfsu.edu",
		"major": "Political Science"
		}
	],
	"onlineCourses": [
		{
			"title": "Android Basics Nanodegree",
			"school": "Udacity",
			"dates": "2017",
			"url": "https://udacity.com"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Android Developer",
			"dates": "February 2017",
			"description": "Android Dev for WalkTalk"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Moovweb",
			"title": "Implementation QA Engineer",
			"dates": "August 2016 - Present",
			"location": "San Francisco, CA",
			"description": "QA Engineer for Moovweb",
			"website": "https://www.moovweb.com"
		},
		{
			"employer": "Mode Media",
			"title": "QA Engineer",
			"dates": "August 2015 - July 2016",
			"location": "Brisbane, CA",
			"description": "QA Engineer for Mode Media",
			"website": "https://www.linkedin.com/company/mode-media/about/"
		}
	]
};

// Bio Module

	var formattedBioName = HTMLheaderName.replace('%data%', bio.name)
	var formattedBioRole =  HTMLheaderRole.replace('%data%', bio.role)
	var formattedBioWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage)
	var formattedBioSkills = HTMLskills.replace('%data%', bio.skills)
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic)

	$("#header").prepend(formattedBioName,formattedBioRole).append(formattedBioPic, formattedBioWelcomeMessage, HTMLskillsStart, formattedBioSkills)

// Bio/Contacts Module

	var formattedBioContactsMobile = HTMLmobile.replace('%data%', bio.contacts.mobile)
	var formattedBioContactsEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedBioContactsGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedBioContactsTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedBioContactsLocation = HTMLlocation.replace('%data%', bio.contacts.location);

	$("#topContacts").append(formattedBioContactsMobile, formattedBioContactsEmail, formattedBioContactsGitHub, formattedBioContactsTwitter, formattedBioContactsLocation);
	$("#footerContacts").append(formattedBioContactsMobile, formattedBioContactsEmail, formattedBioContactsGitHub, formattedBioContactsTwitter, formattedBioContactsLocation);

// Work Module

	$("#workExperience").append(HTMLworkStart);

	var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[0].employer).replace('#', work.jobs[0].website);
	var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[0].title);
	var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[0].dates);
	var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[0].location);
	var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[0].description);

	$(".work-entry").append(formattedWorkEmployer + formattedWorkTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);

// Projects Module

	$("#projects").append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[0].title).replace('#', projects.projects[0].website);
	var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[0].dates);
	var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[0].description);
	var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[0].image);

	$(".project-entry").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);

// Education Module

	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[0].name).replace('#', education.schools[0].url);
	var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[0].degree);
	var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[0].dates);
	var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[0].location);
	var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[0].major);

	$(".education-entry").append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);


	var formattedOnlineName = HTMLonlineSchool.replace('%data%', education.onlineCourses[0].school).replace('#', education.schools[0].url);
	var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[0].title);
	var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[0].dates);
	var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[0].url);

	$(".education-entry").append(HTMLonlineClasses, formattedOnlineTitle + formattedOnlineName, formattedOnlineDates, formattedOnlineURL);