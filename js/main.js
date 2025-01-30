document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll("body h2");
  const linksContainer = document.getElementById("dynamic-links");

  if (headers.length === 0) return; // Если заголовков нет, не выполняем код

  headers.forEach((header, index) => {
    // Добавляем ID, если его нет
    if (!header.id) {
      header.id = "section-" + (index + 1);
    }

    // Создаем ссылку
    const link = document.createElement("a");
    link.href = "#" + header.id;
    link.textContent = header.textContent; // Используем текст заголовка
    link.classList.add("footer-link");

    // Добавляем ссылку в контейнер
    linksContainer.appendChild(link);
  });
});
