(function () {
    const tutorialSteps = [
        { image: "../image/naillabosalon.png", text: "Elevate any small business with a simple yet powerful website" },
        { image: "../image/alone.png", text: "And you don't know how to find it or you don't have friends to come with you." },
        { image: "../image/Thinking.png", text: "I have the same feeling." },
        { image: "../image/idea.png", text: "So I have an idea to help us." },
        { image: "../image/Welcome.png", text: "Which is Sportpal." },
    ];

    let currentStep = 0;

    function updateTutorial(step) {
        const tutorialImage = document.getElementById("sportpal-tutorial-image");
        const tutorialText = document.getElementById("sportpal-tutorial-text").querySelector("h1");
        const navDots = document.querySelectorAll("#sportpal-nav-dots button");
        const prevArrow = document.getElementById("sportpal-prev-arrow");
        const nextArrow = document.getElementById("sportpal-next-arrow");
        const nextButton = document.getElementById("sportpal-next-button");

        if (tutorialImage && tutorialText && navDots.length) {
            tutorialImage.src = tutorialSteps[step].image;
            tutorialText.textContent = tutorialSteps[step].text;
            navDots.forEach((dot, index) => {
                dot.classList.toggle("bg-blue-500", index === step);
                dot.classList.toggle("bg-gray-300", index !== step);
            });

            // Update arrow buttons
            prevArrow.classList.toggle("opacity-50", step === 0);
            prevArrow.classList.toggle("cursor-not-allowed", step === 0);
            nextArrow.classList.toggle("opacity-50", step === tutorialSteps.length - 1);
            nextArrow.classList.toggle("cursor-not-allowed", step === tutorialSteps.length - 1);

            // Update Next button
            nextButton.textContent = step === tutorialSteps.length - 1 ? "Finish" : "Next";
        }
    }

    function scrollToProjectDetails() {
        const projectDetailsSection = document.getElementById('project-details');
        if (projectDetailsSection) {
            projectDetailsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function initOnboarding() {
        const navDots = document.querySelectorAll("#sportpal-nav-dots button");
        const skipButton = document.getElementById("sportpal-skip-button");
        const prevArrow = document.getElementById("sportpal-prev-arrow");
        const nextArrow = document.getElementById("sportpal-next-arrow");
        const nextButton = document.getElementById("sportpal-next-button");

        navDots.forEach((dot, index) => {
            dot.addEventListener("click", function () {
                currentStep = index;
                updateTutorial(currentStep);
            });
        });

        if (skipButton) {
            skipButton.addEventListener("click", function () {
                console.log("Tutorial skipped");
                scrollToProjectDetails();
            });
        }

        if (prevArrow) {
            prevArrow.addEventListener("click", function () {
                if (currentStep > 0) {
                    currentStep--;
                    updateTutorial(currentStep);
                }
            });
        }

        if (nextArrow) {
            nextArrow.addEventListener("click", function () {
                if (currentStep < tutorialSteps.length - 1) {
                    currentStep++;
                    updateTutorial(currentStep);
                }
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", function () {
                if (currentStep < tutorialSteps.length - 1) {
                    currentStep++;
                    updateTutorial(currentStep);
                } else {
                    console.log("Tutorial finished");
                    scrollToProjectDetails();
                }
            });
        }

        updateTutorial(0);
    }

    // 使用 setTimeout 确保在 DOM 加载后执行
    setTimeout(initOnboarding, 0);
})();