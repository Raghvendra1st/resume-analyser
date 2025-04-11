// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm");
    const resultsBox = document.getElementById("results");
    const output = document.getElementById("analysisOutput");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      // Show loading message
      output.innerText = "Analyzing resume, please wait...";
      resultsBox.style.display = "block";
  
      try {
        const response = await fetch("/analyze", {
          method: "POST",
          body: formData
        });
  
        if (!response.ok) {
          throw new Error("Something went wrong during analysis.");
        }
  
        const data = await response.json();
        output.innerText = JSON.stringify(data, null, 2); // Pretty print JSON
      } catch (error) {
        output.innerText = "❌ Error: " + error.message;
      }
    });
  });
  