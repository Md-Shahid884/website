function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  // Nav Item Active Toggle
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      navItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Read More/Read Less
  const moreText = document.getElementById("moreText");
  const btnText = document.getElementById("readMoreBtn");

  if (btnText && moreText) {
    btnText.addEventListener("click", function () {
      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btnText.innerText = "Read Less";
      } else {
        moreText.style.display = "none";
        btnText.innerText = "Read More";
      }
    });
  }

  // Rhinoplasty Read More Toggle
  const rhinoplastyDetails = document.getElementById("rhinoplastyDetails");
  const rhinoplastyBtn = document.getElementById("rhinoplastyReadMoreBtn");

  if (rhinoplastyBtn && rhinoplastyDetails) {
    rhinoplastyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (rhinoplastyDetails.style.display === "none" || rhinoplastyDetails.style.display === "") {
        rhinoplastyDetails.style.display = "block";
        rhinoplastyBtn.textContent = "Read Less";
      } else {
        rhinoplastyDetails.style.display = "none";
        rhinoplastyBtn.textContent = "Read More";
      }
    });
  }

  // Doctor Consultation Toggle
  const icon = document.querySelector(".doctor-consultation-icon");
  const section = document.getElementById("doctorConsultationSection");

  if (icon && section) {
    icon.addEventListener("click", function () {
      if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        section.style.display = "none";
      }
    });
  }

  // Book an Appointment functionality
  const appointmentBtn = document.querySelector(".appointment-btn");
  const appointmentForm = document.getElementById("appointment-form");

  if (appointmentBtn && appointmentForm) {
    appointmentBtn.addEventListener("click", function (e) {
      e.preventDefault();
      appointmentForm.style.display = "block";
      appointmentForm.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // ✅ Service Dropdown Smooth Scroll
  const serviceLinks = document.querySelectorAll('.dropdown-menu a');

  serviceLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Close menu if mobile
        document.getElementById("navLinks")?.classList.remove("active");

        // Show doctor consultation section if hidden
        const consultationSection = document.getElementById("doctor-consultation-section");
        if (consultationSection && consultationSection.style.display === "none") {
          consultationSection.style.display = "block";
        }

        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
document.querySelector('.clinic-times-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.getElementById('clinic-times-section');
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
    section.scrollIntoView({ behavior: 'smooth' });
  });
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".service-card");
  const sections = document.querySelectorAll(".service-images");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const targetId = card.getAttribute("data-target");

      sections.forEach((section) => {
        if (section.id === targetId) {
          section.style.display = "flex";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const moreContent = this.previousElementSibling; // .more-content div

      if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        this.textContent = "Read Less";
      } else {
        moreContent.style.display = "none";
        this.textContent = "Read More";
      }
    });
  });
});