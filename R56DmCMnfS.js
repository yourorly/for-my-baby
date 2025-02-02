function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const x = setInterval(async function() {

    const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        const targetDate = new Date(currentYear, currentMonth, 15); // 15th of the current month

        // If the target date has already passed this month, set it to next month
        if (now > targetDate) {
            targetDate.setMonth(currentMonth + 1);
        }

        const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = "<p class='h2'>"+days+"</p>";
    document.getElementById("hours").innerHTML = "<p class='h2'>"+hours+"</p>";
    document.getElementById("minutes").innerHTML = "<p class='h2'>"+minutes+"</p>";
    document.getElementById("seconds").innerHTML = "<p class='h2'>"+seconds+"</p>";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        await delay(3000);
        window.location.href = "m0I4ycyYEP.html";
    }
}, 1000);


function loadLetter(tagname) {
    const tags = document.querySelectorAll('.tags');
    
    tags.forEach(tag => {
        if (tagname === 'all') {
            tag.style.display = 'block'; // Show all items
        } else {
            if (tag.classList.contains(tagname)) {
                tag.style.display = 'block'; // Show item if it matches the category
            } else {
                tag.style.display = 'none'; // Hide item if it doesn't match
            }
        }
    });
}