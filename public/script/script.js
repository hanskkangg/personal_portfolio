// Function to load external components dynamically
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

// Load the navigation and footer for all pages
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navigation", "/components/navigation.html");
    loadComponent("footer", "/components/footer.html");
});
