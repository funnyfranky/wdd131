document.addEventListener("DOMContentLoaded", function() {
    // Array holding pictures with captions and links
    const images = [
        {
            src: "images/phantom2pro.webp",
            heading: "Phantom 4",
            caption: "The DJI Phantom 4 Pro V2.0 is a powerhouse for both hobbyists and professionals alike. With its 1-inch 20MP CMOS sensor, it captures stunning 4K/60fps video, making it perfect for anyone looking to elevate their photography or videography. Its 30-minute flight time allows for extended sessions without constant battery swaps. What really sets it apart is its five-direction obstacle sensing system, ensuring safer flights even in complex environments. Whether you're tracking a fast-moving subject with ActiveTrack or just enjoying the ease of OcuSync 2.0's stable HD video transmission, the Phantom 4 Pro offers a blend of advanced features and user-friendly controls, making it a favorite for capturing breathtaking aerial footage.",
            alt: "a drone view looking onto the city in St. George, UT with an early sunset in the background"
        },
        {
            src: "images/mini3.webp",
            heading: "Mini 3",
            caption: "The DJI Mini 3 is the go-to for those seeking portability without sacrificing performance. Weighing in at under 249 grams, it bypasses the need for registration in many countries, a huge plus for frequent travelers. Despite its compact size, it boasts a 1/1.3-inch CMOS sensor that delivers impressive 48MP photos and 4K HDR video. The Mini 3's up to 38-minute flight time with its Intelligent Flight Battery means you can focus more on your creative shots rather than worrying about battery life. Its tri-directional obstacle sensing enhances safety, while QuickShots modes like Dronie and Boomerang make it easy to create dynamic, cinematic videos without needing advanced piloting skills. It’s perfect for outdoor enthusiasts and content creators who need a reliable drone they can carry anywhere.",
            alt: "a rough red rock face in St. George, UT"
        },
        {
            src: "images/mavic3pro.webp",
            heading: "Mavic 3 Pro",
            caption: "The DJI Mavic 3 Pro takes things to the next level, ideal for those who demand top-tier quality and performance. Equipped with a 4/3 CMOS sensor, it captures crisp 20MP photos and 4K/60fps video, ensuring every detail is preserved in stunning clarity. The Mavic 3 Pro's remarkable 46-minute flight time with the Intelligent Flight Battery Plus provides ample opportunity to capture expansive landscapes or long-duration shots. Its advanced omnidirectional obstacle sensing means it’s incredibly adept at navigating even the most challenging environments, making it a robust tool for both amateur and professional filmmakers. Features like MasterShots and Hyperlapse enhance creativity, while OcuSync 3+ ensures long-range, low-latency video transmission. With the Mavic 3 Pro, users get a high-end flying camera that combines cutting-edge technology with user-friendly operation, delivering exceptional aerial imagery and videos.",
            alt: "a house with a green roof surrounded by green grass and green trees in the background"
        }
    ];

    // Get the content box element
    const contentBox = document.getElementById("content_box");

    // Add images to the content box
    images.forEach(image => {
        // Create a container for each image and caption
        const card = document.createElement("div");
        card.classList = "card";

        // Create the image element
        const imageContainer = document.createElement("div");
        imageContainer.classList = "imageBox";
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;

        // Create a section and header
        const section = document.createElement("section");
        const header = document.createElement("h3");
        header.textContent = image.heading;

        // Create the caption element
        const caption = document.createElement("p");
        caption.textContent = image.caption;

        // Append everything together
        imageContainer.appendChild(img);

        section.appendChild(header);
        section.appendChild(caption);

        card.appendChild(imageContainer);
        card.appendChild(section);

        // Append the container to the content box
        contentBox.appendChild(card);
    });
});
