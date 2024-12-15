document.addEventListener("DOMContentLoaded", function() {
    // Array holding pictures with captions and links
    const images = [
        {
            src: "images/drone1small.webp",
            caption: "St. George Proper",
            alt: "a drone view looking onto the city in St. George, UT with an early sunset in the background"
        },
        {
            src: "images/drone2small.webp",
            caption: "Red Rock",
            alt: "a rough red rock face in St. George, UT"
        },
        {
            src: "images/drone3small.webp",
            caption: "Rural VT",
            alt: "a house with a green roof surrounded by green grass and green trees in the background"
        },
        {
            src: "images/img1.webp",
            caption: "Syracuse, UT Temple",
            alt: "syracuse UT temple under construction with a bright yellow sunset in the background"
        },
        {
            src: "images/img2.webp",
            caption: "Uinta Valley, UT",
            alt: "a beautiful green valley full of trees, meadows and a river in the bottom left corner with large white clouds above casting shadows below"
        },
        {
            src: "images/img3.webp",
            caption: "Rexburg after Rain",
            alt: "a view from a drone of a small city. there are many apartments, other buildings and a football field. the sky is very cloudy"
        },
        {
            src: "images/img4.webp",
            caption: "Rexburg after Rain v2",
            alt: "a view from a drone of a small city. there are many apartments, other buildings and a football field."
        },
        {
            src: "images/img5.webp",
            caption: "Porter Park, Rexburg, ID",
            alt: "a green park with tennis courts, a playground and a circular building, as well as many trees and an open grass field. surrounded by an urban city"
        },
        {
            src: "images/img6.webp",
            caption: "BYU-I Campus Proper",
            alt: "a few large buildings and a green field surrounded by a bright blue track. a religious temple in the background"
        },
        {
            src: "images/img7.webp",
            caption: "Rexburg Temple Night Version",
            alt: "a brightly lit religious temple front and center surrounded by the lights of the city"
        },
        {
            src: "images/img8.webp",
            caption: "Rexburg Temple Night Version Pt. 2",
            alt: "a city block at night with a brightly lit religious temple in the background"
        },
        {
            src: "images/img9.webp",
            caption: "Snow art on the field at BYU-I",
            alt: "a picture from above of a snow covered football and track field. The field has a large snowman traced into it"
        }
    ];

    // Get the content box element
    const contentBox = document.getElementById("content_box");

    // Add images to the content box
    images.forEach(image => {
        // Create a container for each image and caption
        const imageContainer = document.createElement("div");

        // Create the image element
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;

        // Create the caption element
        const caption = document.createElement("p");
        caption.textContent = image.caption;

        imageContainer.appendChild(img);
        imageContainer.appendChild(caption);

        // Append the container to the content box
        contentBox.appendChild(imageContainer);
    });
});
