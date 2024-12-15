const visitCountElement = document.getElementById('visit_count');

function updateVisitCounter() {
    // Retrieve the stored visit count, or default to 0 if not found
    let visitCount = localStorage.getItem('visitCount') || '0';
    
    // Increment the visit count
    visitCount = parseInt(visitCount) + 1;
    
    // Store the updated visit count in localStorage
    localStorage.setItem('visitCount', visitCount);

    // Display the appropriate message based on the visit count
    if (visitCount === 1) {
        visitCountElement.innerHTML = `This is your first time visiting this page!`;
    } else {
        visitCountElement.innerHTML = `You have visited this page ${visitCount} times.`;
    }
}

updateVisitCounter();