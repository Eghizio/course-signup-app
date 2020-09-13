(() => {
const submitBtn = document.getElementById("btn-submit");

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const ids = {
        firstName: "input-first-name",
        secondName: "input-second-name",
        email: "input-email",
        class: "select-student-class"
    };

    const formData = Object.entries(ids).reduce((acc, id) => {
        const [key, val] = id;

        const el = document.getElementById(val);
        acc[key] = el.value;

        return acc;
    }, {});

    formData.extras = [...document.querySelectorAll(".checkbox-extra")].map(el => {
        const { name, checked } = el;

        if(checked) return name;
        return null;
    }).filter(el => el !== null);

    console.log(formData); //changes the url with the data tho

    if(Object.values(formData).some(el => !el)){
        console.log("Validation failed!"); // simple validation lulz
        return;
    }

    const request = await fetch("http://localhost:7000/api", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(formData)
    });

    const response = await request.json();
    console.log(response);
});

})();