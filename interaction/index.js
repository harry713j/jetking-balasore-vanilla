const traineeDetails = [
  {
    name: "Subhransu Behera",
    age: "23",
    qualifications: "Bachelors in Science, Physics",
    profile: "../public/batch-83/subhranshu.svg",
  },
  {
    name: "Akankshya Jena",
    age: "22",
    qualifications: "Master in Business Administrative",
    profile: "../public/batch-83/akankhya.svg",
  },
  {
    name: "Rajendra Nayak",
    age: "22",
    qualifications: "Intermediate in Science",
    profile: "../public/batch-83/rajendra.jpeg",
  },
  {
    name: "Kanhu Charan Mohanty",
    age: "22",
    qualifications: "Bachelors in Science, Physics",
    profile: "../public/batch-83/kanhu.svg",
  },
  {
    name: "Nitya Ranjan Sahoo",
    age: "22",
    qualifications: "Bachelors in Science, Chemistry",
    profile: "../public/batch-83/nitya.svg",
  },
  {
    name: "Chinmay Pradhan",
    age: "21",
    qualifications: "Bachelors in Commerce",
    profile: "../public/batch-83/chinmay.jpeg",
  },
  {
    name: "Chandan Kumar Sahoo",
    age: "22",
    qualifications: "ITI, Railway Apprentice",
    profile: "../public/batch-83/chandan.svg",
  },
  {
    name: "Uttam Kumar Dey",
    age: "24",
    qualifications: "Bachelors in Arts",
    profile: "../public/batch-83/uttam.svg",
  },
  {
    name: "Sandip Kumar Andia",
    age: "22",
    qualifications: "Bachelors in Arts",
    profile: "../public/batch-83/sandip.svg",
  },
  {
    name: "Jyoti Ranjan Jena",
    age: "23",
    qualifications: "ITI",
    profile: "../public/batch-83/jyoti_ranjan.svg",
  },
  {
    name: "Suman Kumar Behera",
    age: "23",
    qualifications: "Bachelors in Arts",
    profile: "../public/batch-83/suman.jpeg",
  },
  {
    name: "Debashis Parida",
    age: "21",
    qualifications: "Bachelors in Arts",
    profile: "../public/batch-83/debashis.svg",
  },
  {
    name: "Aditya Giri",
    age: "21",
    qualifications: "Bachelors in Arts",
    profile: "../public/batch-83/aditya.svg",
  },
  {
    name: "Jyoti Prakash Jena",
    age: "18",
    qualifications: "Intermediate in Science",
    profile: "../public/batch-83/jyoti_prakash.svg",
  },
  {
    name: "Harihara Sethi",
    age: "25",
    qualifications: "Bachelors in Science, Physics",
    profile: "../public/placeholder.svg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const trainees = document.querySelector(".trainees");

  traineeDetails.forEach((details) => {
    const traineeContainer = document.createElement("div");
    traineeContainer.classList.add("trainee");

    traineeContainer.style.background = `no-repeat center/100% url("${details.profile}")`;

    const detailsContainer = document.createElement("span");
    detailsContainer.classList.add("trainee__details");

    const name = document.createElement("p");
    name.classList.add("name");
    name.innerText = details.name;

    const age = document.createElement("p");
    age.classList.add("age");
    age.innerText = `Age: ${details.age}`;

    const qualification = document.createElement("p");
    qualification.classList.add("qualification");
    qualification.innerText = details.qualifications;

    detailsContainer.appendChild(name);
    detailsContainer.appendChild(age);
    detailsContainer.appendChild(qualification);

    traineeContainer.appendChild(detailsContainer);

    trainees.appendChild(traineeContainer);
  });
});
