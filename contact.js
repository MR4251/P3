let currentTab = 0;
const steps = document.querySelectorAll(".form-step");
const dots = document.querySelectorAll(".step-dot");

function showTab(n) {
  steps.forEach((step, index) => {
    step.classList.remove("active");
    dots[index].classList.remove("active");
    if (index === n) {
      step.classList.add("active");
      dots[index].classList.add("active");
    }
  });

  document.getElementById("prevBtn").style.display = n === 0 ? "none" : "inline-block";
  document.getElementById("nextBtn").innerHTML = n === steps.length - 1 ? "Submit" : "Next";
}

function nextPrev(n) {
  if (n === 1 && !validateForm()) return;

  currentTab += n;

  if (currentTab >= steps.length) {
    document.getElementById("regForm").submit();
    return;
  }

  showTab(currentTab);
}

function validateForm() {
  let valid = true;
  const inputs = steps[currentTab].querySelectorAll("input");
  inputs.forEach(input => {
    if (!input.value) {
      input.classList.add("is-invalid");
      valid = false;
    } else {
      input.classList.remove("is-invalid");
    }
  });
  return valid;
}

document.addEventListener("DOMContentLoaded", () => {
  showTab(currentTab);
});
