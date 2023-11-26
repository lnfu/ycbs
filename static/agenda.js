document.addEventListener("DOMContentLoaded", function () {
  const sessionElements = document.querySelectorAll(".session");

  sessionElements.forEach(function (element) {
    const startTime = element.getAttribute("data-start-time");
    const endTime = element.getAttribute("data-end-time");
    const timeDiff = getTimeDifference(startTime, endTime);

    if (!element.classList.contains("session-lunch")) {
      element.style.height = timeDiff * 5 + "px";
    }

    const timeSlotElement = element.querySelector(".time-slot");

    if (!element.classList.contains("session-blank")) {
      timeSlotElement.textContent = `${startTime} - ${endTime}`;
      // timeSlotElement.style.display = "none";
    }
  });

  function getTimeDifference(start, end) {
    const startHour = parseInt(start.split(":")[0]);
    const startMinute = parseInt(start.split(":")[1]);
    const endHour = parseInt(end.split(":")[0]);
    const endMinute = parseInt(end.split(":")[1]);

    const timeDiff = 60 * (endHour - startHour) + (endMinute - startMinute);
    return timeDiff;
  }
});
