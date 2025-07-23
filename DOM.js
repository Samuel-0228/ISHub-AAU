const form = document.createElement("form");
form.setAttribute("id", "employee-form");

const title = document.createElement("h2");
title.textContent = "Employee Details";
form.appendChild(title);

function createInput(labelText, inputId) {
    const label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", inputId);
    input.setAttribute("name", inputId);
    input.setAttribute("placeholder", labelText);

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
}

createInput("First name", "firstName");
createInput("Last name", "lastName");
createInput("Employee ID", "employeeId");
createInput("Designation", "designation");
createInput("Phone Number", "phoneNumber");

const genderLabel = document.createElement("label");
genderLabel.textContent = "Gender:";
form.appendChild(genderLabel);

["Male", "Female"].forEach(gender => {
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "gender");
    radio.setAttribute("value", gender);

    const radioLabel = document.createElement("label");
    radioLabel.textContent = gender;

    form.appendChild(radio);
    form.appendChild(radioLabel);
});

const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);

document.body.appendChild(form);