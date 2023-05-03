const form = document.getElementById('resume-form');
const addEducationBtn = document.getElementById('add-education');
const educationFields = document.getElementById('education-fields');
const addExperienceBtn = document.getElementById('add-experience');
const experienceFields = document.getElementById('experience-fields');
const addProjectsBtn = document.getElementById('add-project');
const projectsFields = document.getElementById('projects-fields');
const addSkillsBtn = document.getElementById('add-skills');
const skillsFields = document.getElementById('skills-fields');
const resumePreview = document.getElementById('resume-preview');
const printResumeBtn = document.getElementById('print-resume');

const resetFormBtn = document.getElementById('reset-form');

resetFormBtn.addEventListener('click', function() {
  form.reset(); // reset the form to its default state

  // clear education and experience fields
  educationFields.innerHTML = '';
  experienceFields.innerHTML = '';

  // clear projects fields and reset i to 4
  projectsFields.innerHTML = '';
  j = 2;
  
  // clear skills fields and reset i to 4
  skillsFields.innerHTML = '';
  i = 4;

  // hide the resume preview and disable the print button
  resumePreview.style.display = 'none';
  printResumeBtn.disabled = true;
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  resumePreview.style.display="block";
  const formData = new FormData(form);
  const resume = generateResume(formData);
  resumePreview.innerHTML = resume;
  printResumeBtn.disabled = false;
});

addEducationBtn.addEventListener('click', function() {
  const degreeField = document.createElement('div');
  degreeField.classList.add('form-group');
  degreeField.innerHTML = '<label for="degree">Degree:</label><input type="text" id="degree" name="degree[]"  >';

  const schoolField = document.createElement('div');
  schoolField.classList.add('form-group');
  schoolField.innerHTML = '<label for="school">School:</label><input type="text" id="school" name="school[]"  >';

  const graduationDateField = document.createElement('div');
  graduationDateField.classList.add('form-group');
  graduationDateField.innerHTML = '<label for="graduation-date">Graduation Date:</label><input type="month" id="graduation-date" name="graduation-date[]"  >';

  const hr = document.createElement('hr')

  educationFields.appendChild(hr);
  educationFields.appendChild(degreeField);
  educationFields.appendChild(schoolField);
  educationFields.appendChild(graduationDateField);
});


addExperienceBtn.addEventListener('click', function() {

  const titleField = document.createElement('div');
  titleField.classList.add('form-group');
  titleField.innerHTML = '<label for="job-title">Job Title:</label><input type="text" id="job-title" name="job-title[]"  >';
  
  const employerField = document.createElement('div');
  employerField.classList.add('form-group');
  employerField.innerHTML = '<label for="employer">Company:</label><input type="text" id="employer" name="employer[]"  >';

  const startField = document.createElement('div');
  startField.classList.add('form-group');
  startField.innerHTML = '<label for="start-date">Start Date:</label><input type="date" id="start-date" name="start-date[]"  >';
  
  const endField = document.createElement('div');
  endField.classList.add('form-group');
  endField.innerHTML = '<label for="end-date">End Date:</label><input type="date" id="end-date" name="end-date[]"  >';

  const descriptionField = document.createElement('div');
  descriptionField.classList.add('form-group');
  descriptionField.innerHTML = '<label for="job-description">Job Description:</label><textarea id="job-description" name="job-description[]" rows="4"  ></textarea>';

  const hr = document.createElement('hr'); // create a new <hr> element
  experienceFields.appendChild(hr); // append the <hr> element after the new field
  experienceFields.appendChild(titleField);
  experienceFields.appendChild(employerField);
  experienceFields.appendChild(startField);
  experienceFields.appendChild(endField);
  experienceFields.appendChild(descriptionField);
});

let j = 2; // declare i outside of the loop


addProjectsBtn.addEventListener('click', function() {
  const projectField = document.createElement('div');
  projectField.classList.add('form-group');
  projectField.innerHTML = `<label for="project-${j}">Project ${j}:</label><input type="text" id="project-${j}" name="project[]"  >`;

  const linkield = document.createElement('div');
  linkield.classList.add('form-group');
  linkield.innerHTML = '<label for="project-link">Project-link:</label><input type="url" id="project-link" name="project-link[]"  >';

  const summaryField = document.createElement('div');
  summaryField.classList.add('form-group');
  summaryField.innerHTML = '<label for="summary">Summary:</label><textarea id="summary" name="summary[]" rows="4"  ></textarea>';

  const hr = document.createElement ('hr')

  projectsFields.appendChild(hr);
  projectsFields.appendChild(projectField);
  projectsFields.appendChild(linkield);
  projectsFields.appendChild(summaryField);

  j++; // increment i after adding the skill field
});




let i = 4; // declare i outside of the loop



addSkillsBtn.addEventListener('click', function() {
  const skillField = document.createElement('div');
  skillField.classList.add('form-group');
  skillField.innerHTML = `<label for="skill-${i}">Skill ${i}:</label><input type="text" id="skill-${i}" name="skill-${i}"  >`;

  skillsFields.appendChild(skillField);

  i++; // increment i after adding the skill field
});


printResumeBtn.addEventListener('click', function() {
  form.style.display = "none"
  document.querySelector("h1").style.display = "none";

  window.print();
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();

  // Show the form-resume element again when the print dialog is closed or cancelled
  form.style.display = 'block';
  

});

function generateResume(formData) {
  const fullName = formData.get('full-name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const address = formData.get('address');
  const objecive = formData.get('objective');
  const degrees = formData.getAll('degree[]');
  const schools = formData.getAll('school[]');
  const graduationDates = formData.getAll('graduation-date[]');
  const jobTitle = formData.getAll('job-title[]');
  const employer = formData.getAll('employer[]');
  const startDate = formData.getAll('start-date[]');
  const endDate = formData.getAll('end-date[]');
  const jobDescription = formData.getAll('job-description[]');
  const projectNames = formData.getAll('project[]')
  const projectLinks = formData.getAll('project-link[]')
  const projectSummarys = formData.getAll('summary[]')

  const skills = [formData.get('skill-1'), formData.get('skill-2'), formData.get('skill-3'), formData.get('skill-4'), formData.get('skill-5')];

  let resume = '';
  resume += `<h1>${fullName}</h1></br>`;
  resume += `<p><strong>Email: </strong>${email}</p>`;
  resume += `<p><strong>Phone: </strong>${phone}</p>`;
  resume += `<p><strong>Address: </strong>${address}</p></br>`;
  resume += `<p><strong>Objective: </strong></br>${objecive}</p></br>`;

  resume += '<h2>Education</h2>';
  for (let i = 0; i < degrees.length; i++) {
    resume += `<p><strong>${degrees[i]}</strong> - ${schools[i]} - ${graduationDates[i]}</p></br>`;
  }

  resume += '<h2>Work Experience</h2>';
  for (let i = 0; i < jobTitle.length; i++) {
    resume += `<p><strong>${jobTitle[i]}</strong> - ${employer[i]}</br>
    From: ${startDate[i]} to: ${endDate[i]}</br></br> 
    <strong>Job describtion: </strong>${jobDescription[i]}</p></br>`;
  }

  resume += '<h2>Projects</h2>';
  for (let j = 0; j < projectNames.length; j++) {
    resume += `<p><strong>${projectNames[j]}</strong></br>
    <strong>Project link</strong>: ${projectLinks[j]}<br>
    <strong>Summary: </strong>${projectSummarys[j]}</p></br>`;
  }

  resume += '<h2>Skills</h2>';
  resume += '<ul>';
  for (let i = 0; i < skills.length; i++) {
    if (skills[i]) {
      resume += `<li>${skills[i]}</li>`;
    }
  }
  resume += '</ul>';

  return resume;
}
