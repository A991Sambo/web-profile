

let firstName = " NHlamulo";
let lastName = " Sambo";
let phoneNumber = " 071 6524 605";
let bio = "Nhlamulo Sambo is a qualified computer technitian / help desk technitian i did my IT certificate of ComptiA A+ with Boston college polokwane.i find studying to be a developer very fascinating than the technical side of IT.My hometown is Malamulele it is in limpopo between Thohoyandou and Giyani. "
let projects = ["HTML","CSS","java"]
let educationHighSchool  = "New era college";
let educationCollege = "Boston college polokwane";


document.getElementById("#name").innerHTML = firstName;
document.getElementById("#surname").innerHTML =lastName;
document.getElementById("#phone").innerHTML = phoneNumber;
document.getElementById("#bio").innerHTML = bio;
document.getElementById("#projectHtml").innerHTML = projects[0];
document.getElementById("#projectCss").innerHTML = projects[1];
document.getElementById("#projectjava").innerHTML = projects[2];
document.getElementById("#education_1").innerHTML = educationHighSchool;
document.getElementById("#education_2").innerHTML = educationCollege;