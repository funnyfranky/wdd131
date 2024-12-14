document.addEventListener("DOMContentLoaded", function() {
    // Array holding pictures with captions and links
    const images = [
        {
            src: "images/drone1small.webp",
            caption: "Image 1",
            alt: "a drone view looking onto the city in St. George, UT with an early sunset in the background"
        },
        {
            src: "images/drone2small.webp",
            caption: "Image 2",
            alt: "a rough red rock face in St. George, UT"
        },
        {
            src: "images/drone3small.webp",
            caption: "Image 3",
            alt: "a house with a green roof surrounded by green grass and green trees in the background"
        }
    ];

    // Get the content box element
    const contentBox = document.getElementById("content_box");

    // Add images to the content box
    images.forEach(image => {
        // Create a container for each image and caption
        const imageContainer = document.createElement("div");

        // const link = document.createElement("a");
        // link.href = image.link;
        // link.target = "_blank";

        // Create the image element
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;

        // Create the caption element
        const caption = document.createElement("p");
        caption.textContent = image.caption;

        // Append the image to the link, and the link to the container
        // link.appendChild(img);
        // imageContainer.appendChild(link);
        imageContainer.appendChild(img);
        imageContainer.appendChild(caption);

        // Append the container to the content box
        contentBox.appendChild(imageContainer);
    });
});
