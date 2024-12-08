const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function addProducts(products) {
    const dropMenu = document.getElementById('prodname');
    products.forEach(item => {
        const opt = document.createElement('option');
        opt.textContent = item.name;
        opt.value = item.id;
        dropMenu.appendChild(opt);
    });
    dropMenu.removeAttribute('disabled');
}

function trackVisits() {
    // Check if 'visitCount' exists in localStorage 
    const visitCountDisplay = document.getElementById('visit-count');
    if (localStorage.getItem('visitCount')) {
        // Increment the count 
        let visitCount = parseInt(localStorage.getItem('visitCount'));
        localStorage.setItem('visitCount', visitCount += 1);
    } else {
        // If 'visitCount' doesn't exist, initialize it with 1 
        localStorage.setItem('visitCount', 1);
    }
    // Display the visit count 
    if (localStorage.getItem('visitCount') == 1) {
        visitCountDisplay.innerHTML = `This is your first time visiting this page!`;
    } else {
        visitCountDisplay.innerHTML = `You have visited this page ${localStorage.getItem('visitCount')} times.`;
    }
}

trackVisits();
addProducts(products);