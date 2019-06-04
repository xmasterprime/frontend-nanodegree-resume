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
	"welcomeMessage": "Hello. I'm Dustin Sison, a Quality Assurance Engineer for over three years, that is currently " +
		"exploring the exciting world of QA Automation! My skills include Manual QA work, Git release management, " +
		"on-call services direct with developers and clients, and more recently, Automated QA scripting in either " +
		"Java or Ruby, although I am open to learning other programming languages.",
	"skills": [
		"Manual QA Testing",
		"Automated QA Script Writing (Java or Ruby)",
		"On-call support",
		"Test case/suite writing",
		"Git release management"
	],
	"bioPic": "https://avatars0.githubusercontent.com/u/21117013?s=460&v=4"
};

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
			"description": "Android Dev for WalkTalk",
			"website": "https://www.udacity.com/",
			"images": "https://lh3.googleusercontent.com/ooLDZsdlzJmOuKGe9HcMx5ppw8fd-ZxBJdj6dBbkekLQmQV9GJKDMX8yzMax98tieoasY4SUgw=w128-h128-e365"
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
			"description": "QA Engineer focused on new Moovweb projects being built on the Moovweb platform. Served " +
				"as the first QA Engineer on many new projects, which needed scoping of existing websites, creating" +
				" test plans and cases, and coordinating QA efforts with offshore teams. Additionally, I've had to " +
				"serve on-call hours for emergencies on the Moovweb platform, as well as serve as a backup release " +
				"manager for both new and existing projects, using Git and Github. For the past year, I have also " +
				"been tasked with scripting automated test cases using Selenium, Ruby, Ruby on Rails, and Cucumber.",
			"website": "https://www.moovweb.com"
		},
		{
			"employer": "Mode Media",
			"title": "QA Engineer",
			"dates": "August 2015 - July 2016",
			"location": "Brisbane, CA",
			"description": "QA Engineer for Mode Media",
			"website": "https://www.linkedin.com/company/mode-media/about/"
		},
		{
			"employer": "Mode Media",
			"title": "Associate Community Advocate",
			"dates": "July 2013 - August 2015",
			"location": "Brisbane, CA",
			"description": "Customer Support for the Ning platform",
			"website": "http://www.ning.com/"
		}
	]
};

// Bio Module

	var formattedBioName = HTMLheaderName.replace('%data%', bio.name);
	var formattedBioRole =  HTMLheaderRole.replace('%data%', bio.role);
	var formattedBioWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);

	$("#header").prepend(formattedBioName,formattedBioRole)
		.append(formattedBioPic, formattedBioWelcomeMessage, HTMLskillsStart);
	$("#main").append(internationalizeButton);

	function inName(oldName) {

		var finalName = oldName;
		var names = oldName.split(" ");
		names[1] = names[1].toUpperCase();
		names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
		finalName = names.join(" ");

		return finalName;
	}

	for (skill in bio.skills) {
		var formattedBioSkills = HTMLskills.replace('%data%', bio.skills[skill]);
	 	$("#skills").append(formattedBioSkills)
	 }

// Bio/Contacts Module

	var formattedBioContactsMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedBioContactsEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedBioContactsGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedBioContactsTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedBioContactsLocation = HTMLlocation.replace('%data%', bio.contacts.location);

	$("#topContacts").append(formattedBioContactsMobile, formattedBioContactsEmail,
		formattedBioContactsGitHub, formattedBioContactsTwitter, formattedBioContactsLocation);
	$("#footerContacts").append(formattedBioContactsMobile, formattedBioContactsEmail,
		formattedBioContactsGitHub, formattedBioContactsTwitter, formattedBioContactsLocation);

// Work Module

	for (i in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer)
			.replace('#', work.jobs[i].website);
		var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
		var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle, formattedWorkDates,
			formattedWorkLocation, formattedWorkDescription);
	}

// Projects Module

	for (i in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title)
			.replace('#', projects.projects[i].website);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
		var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images);
		$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates,
			formattedProjectDescription, formattedProjectImage);
	}

// Education Module

	$("#education").append(HTMLschoolStart, HTMLonlineClasses, HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[0].name)
		.replace('#', education.schools[0].url);
	var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[0].degree);
	var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[0].dates);
	var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[0].location);
	var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[0].major);

	$(".education-entry:first").append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDates,
		formattedSchoolLocation, formattedSchoolMajor);


	var formattedOnlineName = HTMLonlineSchool.replace('%data%', education.onlineCourses[0].school)
		.replace('#', education.schools[0].url);
	var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[0].title);
	var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[0].dates);
	var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[0].url);

	$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineName, formattedOnlineDates,
		formattedOnlineURL);