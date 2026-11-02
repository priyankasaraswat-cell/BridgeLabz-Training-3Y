
"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        const form = document.createElement("form");
        form.id = "dynamicForm";

        this.fields.forEach(field => {
            const label = document.createElement("label");
            label.textContent = field.label;

            const input = document.createElement("input");
            input.type = field.type;
            input.name = field.label;
            input.placeholder = field.label;
            input.required = true;

            form.appendChild(label);
            form.appendChild(input);
            form.appendChild(document.createElement("br"));
            form.appendChild(document.createElement("br"));
        });

        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Submit";

        form.appendChild(button);
        document.body.appendChild(form);

        form.addEventListener("submit", event => {
            event.preventDefault();
            console.log(this.getFormData(form));
        });
    }

    getFormData(form) {
        const formData = {};

        this.fields.forEach(field => {
            const input = form.elements[field.label];
            formData[field.label] = input.value;
        });

        return formData;
    }
}

const fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

const builder = new FormBuilder(fields);
builder.createForm();
