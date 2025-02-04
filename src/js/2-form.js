const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// Початковий стан даних
let formData = { email: "", message: "" };

// Перевіряємо, чи є дані у localStorage при завантаженні сторінки
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

// Слухаємо події input
form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim(); // Видаляємо пробіли по краях
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Сабміт форми
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Перевіряємо, чи заповнені обидва поля
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData); // Виводимо в консоль

    // Очищаємо все
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
});