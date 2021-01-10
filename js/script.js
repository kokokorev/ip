const form = document.forms[1];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);

    if ((data.get("surname") == "") || (data.get("name") == "") || (data.get("email") == "") || (data.get("group") == "")) {
        Swal.fire("Ошибка!", "Нужно заполнить все поля", "error");
    } else {
        Swal.fire("Поздравлем!", "Книга забронирована", "success");
    }
});

form.addEventListener("formdata", event => {
    const data = event.formData;

    console.log(data);

    const entries = [...data.entries()];
    console.log(entries);

    const values = [...data.values()];
    console.log(values);
});