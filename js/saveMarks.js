const elem = {
  addMarkForm: document.querySelector("#add-mark__form"),
  addedMarks: document.querySelector(".js-added-marks"),
};

elem.addedMarks.innerHTML = "";

elem.addMarkForm.addEventListener("submit", addNewMark);

function addNewMark(e) {
  e.preventDefault();
  const form = e.currentTarget;
  elem.addedMarks.insertAdjacentHTML(
    "beforeend",
    `
        <li class="added-marks-item">
          <div class="">
            <span>Предмет: </span>
            <span class="value">${form.elements.newSubject.value} </span>
          </div>
          <div>
            <span>Дата: </span>
            <span class="value">${form.elements.newDate.value} </span>
          </div>
          <div>
            <span>Оцінка: </span>
            <span class="value">${form.elements.mark.value}</span>
          </div>
        </li>`
  );

  let oldMarks = localStorage.getItem("marks");
  let marks;
  if (!oldMarks) {
    marks = [];
  } else {
    marks = JSON.parse(oldMarks);
  }
  marks.push({
    subject: form.elements.newSubject.value,
    date: form.elements.newDate.value,
    mark: form.elements.mark.value,
  });
  localStorage.setItem("marks", JSON.stringify(marks));

  form.reset();
}
