var skills = ["PL/SQL", "Oracle Forms", "Python", "HTML/CSS", "JavaScript"];

var bio = {
   "name"    : "Brian Friesner",
   "role"    : "Developer",
   "contact"   : {
        "mobile"   : "614.555.2347",
        "email"    : "brian@example.com",
        "github"   : "bcf6704",
        "twitter"  : "minicooper",
        "location" : "Columbus, Ohio"
        },
   "welcome" : "Welcome to my new resume page",
   "skills"  :  skills,
   "biopic"  :  "images/profile_pic.jpg"
};

bio.display = function() {

    var vMobile = HTMLmobile.replace
        ("%data%", bio.contact.mobile);
    $("#topContacts").append(vMobile);

    var vEmail = HTMLemail.replace
        ("%data%", bio.contact.email);
    $("#topContacts").append(vEmail);

    var vGithub = HTMLgithub.replace
        ("%data%", bio.contact.github);
    $("#topContacts").append(vGithub);

    var vTwitter = HTMLtwitter.replace
        ("%data%", bio.contact.twitter);
    $("#topContacts").append(vTwitter);

    var vLocation = HTMLlocation.replace
        ("%data%", bio.contact.location);
    $("#topContacts").append(vLocation);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var vBiopic = HTMLbioPic.replace
        ("%data%", bio.biopic);
    $("#header").append(vBiopic);

    var vWelcome = HTMLwelcomeMsg.replace
        ("%data%", bio.welcome);
    $("#header").append(vWelcome);

    $("#header").append(HTMLskillsStart);

    if (bio.skills.length > 0) {
        for (skill in bio.skills) {
            var vSkills = HTMLskills.replace
                ("%data%", bio.skills[skill]);
            $("#skills").append(vSkills);
        };
    };
};

bio.display();

var work = {
    "jobs" : [
        {
        "employer"     : "Quick Solutions",
        "title"        : "Consultant",
        "location"     : "Columbus, Ohio 43215",
        "dates_worked" : "2013-2015",
        "description"  : "I write database applications using PL/SQL."
        },
        {
        "employer"     : "DSW",
        "title"        : "Programmer/Analyst",
        "location"     : "Columbus, Ohio 43215",
        "dates_worked" : "2007-2013",
        "description"  : "I wrote database applications using PL/SQL."
        }
    ],
    display: function() {
      
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);              

            var formattedEmployer = HTMLworkEmployer.replace
               ("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace
               ("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(
                formattedEmployerTitle);

            var formattedWorkDates = HTMLworkDates.replace
               ("%data%", work.jobs[job].dates_worked);  
            $(".work-entry:last").append(
                formattedWorkDates);

            var formattedLocation = HTMLworkLocation.replace
               ("%data%", work.jobs[job].location);   
            $(".work-entry:last").append(
                formattedLocation);

            var formattedDescription = HTMLworkDescription.replace
               ("%data%", work.jobs[job].description);   
            $(".work-entry:last").append(
                formattedDescription);
        }
    }
};

work.display();

var projects = {project : [
        {
        "proj_name"   : "LPL",
        "proj_year"   : "2014",
        "description" : "I added data to the LPL (private ledger) dataset using data mapping tools.",
        "image"       : "images/lpl.jpg"
        },
        {
        "proj_name"   : "PAF",
        "proj_year"   : "2015",
        "description" : "I added functionality to the PAF (auto features) system to allow customers to auto enroll in their retirement plans.",
        "image"       : "images/paf.jpg"
        }
    ]
};

projects.display = function() {
    for (proj in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var vProjName = HTMLprojectTitle.replace
           ("%data%", projects.project[proj].proj_name);  
        $(".project-entry:last").append(vProjName);

        var vProjYear = HTMLprojectDates.replace
           ("%data%", projects.project[proj].proj_year);  
        $(".project-entry:last").append(vProjYear);

        var vDescription = HTMLprojectDescription.replace
           ("%data%", projects.project[proj].description);  
        $(".project-entry:last").append(vDescription);

        var vImage = HTMLprojectImage.replace
           ("%data%", projects.project[proj].image);  
        $(".project-entry:last").append(vImage);
    };
};

projects.display();

var education = {schools : [
        {
        "school_name" : "Ohio State University",
        "years"       : "1985-1989",
        "location"    : "Columbus, Ohio 43210",
        "degree"      : "Bachelor of Science",
        "major"       : "Mathematics"
        },
        {
        "school_name" : "Community College of the Air Force",
        "years"       : "1991-1993",
        "location"    : "Montgomery, Alabama 36112",
        "degree"      : "Associate of Science",
        "major"       : "Computer Science"
        }
    ],
    onlineCourses : [
        {
        "title"   : "Python",
        "school"  : "Udacity",
        "date"    : "January 2015",
        "url"     : "https://www.udacity.com"
        },
        {
        "title"   : "HTML/CSS",
        "school"  : "Udacity",
        "date"    : "February 2015",
        "url"     : "https://www.udacity.com"
        }
    ]
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var vSchoolName = HTMLschoolName.replace
           ("%data%", education.schools[school].school_name);  
        $(".education-entry:last").append(vSchoolName);

        var vSchoolYears = HTMLschoolDates.replace
           ("%data%", education.schools[school].years);  
        $(".education-entry:last").append(vSchoolYears);

        var vLocation = HTMLschoolLocation.replace
           ("%data%", education.schools[school].location);  
        $(".education-entry:last").append(vLocation);

        var vDegree = HTMLschoolDegree.replace
           ("%data%", education.schools[school].degree);  
        $(".education-entry:last").append(vDegree);

        var vMajor = HTMLschoolMajor.replace
           ("%data%", education.schools[school].major);  
        $(".education-entry:last").append(vMajor);
    };

    $(".education-entry:last").append(HTMLonlineClasses);
    
    for (onlineCourse in education.onlineCourses) {    

        var vTitle = HTMLonlineTitle.replace
           ("%data%", education.onlineCourses[onlineCourse].title);  
        $(".education-entry:last").append(vTitle);

        var vSchool = HTMLonlineSchool.replace
           ("%data%", education.onlineCourses[onlineCourse].school);  
        $(".education-entry:last").append(vSchool);

        var vDate = HTMLonlineDates.replace
           ("%data%", education.onlineCourses[onlineCourse].date);  
        $(".education-entry:last").append(vDate);

        var vUrl = HTMLonlineURL.replace
           ("%data%", education.onlineCourses[onlineCourse].url);  
        $(".education-entry:last").append(vUrl);
    };
};
education.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
};

$("#mapDiv").append(googleMap);

contact_display = function() {

    var vMobile = HTMLmobile.replace
        ("%data%", bio.contact.mobile);
    $("#footerContacts").append(vMobile);

    var vEmail = HTMLemail.replace
        ("%data%", bio.contact.email);
    $("#footerContacts").append(vEmail);

    var vGithub = HTMLgithub.replace
        ("%data%", bio.contact.github);
    $("#footerContacts").append(vGithub);

    var vTwitter = HTMLtwitter.replace
        ("%data%", bio.contact.twitter);
    $("#footerContacts").append(vTwitter);

    var vLocation = HTMLlocation.replace
        ("%data%", bio.contact.location);
    $("#footerContacts").append(vLocation);
};

contact_display();