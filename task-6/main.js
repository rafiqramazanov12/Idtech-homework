    const form = document.querySelector(".form");
    const tbody = document.querySelector(".tbody");
    let editingRow = null;
    const errorMessageContainer = document.createElement("div");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = document.querySelectorAll(".form_input");
        const name = inputs[0].value;
        const age = parseInt(inputs[1].value);
        const position = inputs[2].value;

        removeErrorMessages();

        let isValid = true;

        if (age < 18 || age > 65) {
            showError("İşçinin yaşı 18-dən kiçik və ya 65-dən böyük ola bilməz!");
            isValid = false;
        }

        if (name && age && position && isValid) {
            if (editingRow) {
                editingRow.children[1].textContent = name;
                editingRow.children[2].textContent = age;
                editingRow.children[3].textContent = position;
                editingRow = null;
            } else {
                const row = `
                    <tr>
                        <td>${tbody.children.length + 1}</td>
                        <td>${name}</td>
                        <td>${age}</td>
                        <td>${position}</td>
                        <td class="actions">
                            <button class="edit" onclick="editRow(this)">Düzəlt</button>
                            <button class="delete" onclick="deleteRow(this)">Sil</button>
                        </td>
                    </tr>
                `;
                tbody.innerHTML += row;
            }

            inputs.forEach(input => input.value = "");
        } else {
            alert("Bütün xanaları düzgün doldurun!");
        }
    });

    function showError(message) {
        errorMessageContainer.classList.add("error-message");
        errorMessageContainer.textContent = message;
        const mainCard = document.querySelector(".main_card");
        mainCard.insertBefore(errorMessageContainer, form);
    }

    function removeErrorMessages() {
        if (errorMessageContainer.parentNode) {
            errorMessageContainer.parentNode.removeChild(errorMessageContainer);
        }
    }

    function deleteRow(button) {
        button.parentElement.parentElement.remove();
        updateRowNumbers();
    }

    function editRow(button) {
        const row = button.parentElement.parentElement;
        const name = row.children[1].textContent;
        const age = row.children[2].textContent;
        const position = row.children[3].textContent;

        const inputs = document.querySelectorAll(".form_input");
        inputs[0].value = name;
        inputs[1].value = age;
        inputs[2].value = position;

        editingRow = row;

        button.disabled = true;
        button.style.opacity = "0.5";
    }

    function updateRowNumbers() {
        Array.from(tbody.children).forEach((row, index) => {
            row.children[0].textContent = index + 1;
        });
    }
