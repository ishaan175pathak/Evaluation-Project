document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".form-section");
  let currentSectionIndex = 0;

  const updateSection = () => {
    sections.forEach((section, index) => {
      section.classList.toggle("active", index === currentSectionIndex);
    });
  };

  const validateSection = (section) => {
  const requiredInputs = section.querySelectorAll("input[required]");
  const checkedCheckboxGroups = new Set();

  for (let input of requiredInputs) {
    if (
      (input.type === "radio" && !section.querySelector(`input[name="${input.name}"]:checked`)) ||
      (input.type === "checkbox" && !checkedCheckboxGroups.has(input.name) && !section.querySelector(`input[name="${input.name}"]:checked`)) ||
      (input.type !== "radio" && input.type !== "checkbox" && !input.value.trim())
    ) {
      return false;
    }

    // Mark this checkbox group as processed
    if (input.type === "checkbox") {
      checkedCheckboxGroups.add(input.name);
    }
  }

  return true;
};


  const goToNext = () => {
    if (validateSection(sections[currentSectionIndex]) && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      updateSection();
    }
  };

  const goToPrevious = () => {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      updateSection();
    }
  };

  // Button support (optional if using arrow keys only)
  document.querySelector(".next-btn")?.addEventListener("click", goToNext);
  document.querySelector(".prev-btn")?.addEventListener("click", goToPrevious);

  // Arrow key support
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      goToNext();
    } else if (e.key === "ArrowLeft") {
      goToPrevious();
    }
  });

  updateSection(); // initialize view
});