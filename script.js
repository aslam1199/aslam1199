function uploadMatch() {
    const name = document.getElementById('match-name').value;
    const time = document.getElementById('match-time').value;
    const password = document.getElementById('upload-password').value;

    if (password !== "1234") {
        alert("Wrong password!");
        return;
    }

    alert("Match '" + name + "' scheduled at " + time);
}

function uploadAchievement() {
    const title = document.getElementById('achievement-name').value;
    const file = document.getElementById('achievement-file').files[0];
    const password = document.getElementById('achievement-password').value;

    if (password !== "1234") {
        alert("Wrong password!");
        return;
    }

    alert("Achievement '" + title + "' uploaded!");
}
