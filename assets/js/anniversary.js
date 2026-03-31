function calculateAge()
{
    const today = new Date();
    const birthday = new Date("2003-02-20");

    let age = today.getFullYear() - birthday.getFullYear();

    const monthDiff = today.getMonth() - birthday.getMonth();
    if (monthDiff < 0 || (monthDiff == 0 && today.getDate() < birthday.getDate()))
    {
        age--;
    }

    const ageElement = document.getElementById("my-age");
    if (ageElement)
    {
        ageElement.textContent = age;
    } else {
        console.warn("Failed getting the age element");
    }
}

document.addEventListener("DOMContentLoaded",  calculateAge());
