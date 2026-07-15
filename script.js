// Register Student
function registerStudent() {

    let id = document.getElementById("sid").value;
    let name = document.getElementById("sname").value;
    let email = document.getElementById("email").value;
    let credits = document.getElementById("credits").value;

    if (id === "" || name === "" || email === "" || credits === "") {
        alert("Please fill all student details.");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = email;
    row.insertCell(3).innerHTML = credits;

    alert("Student Registered Successfully!");

    document.getElementById("sid").value = "";
    document.getElementById("sname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("credits").value = "";
}

// Add Course
function addCourse() {

    let code = document.getElementById("ccode").value;
    let title = document.getElementById("ctitle").value;
    let credit = document.getElementById("ccredit").value;
    let teacher = document.getElementById("teacher").value;

    if (code === "" || title === "" || credit === "" || teacher === "") {
        alert("Please fill all course details.");
        return;
    }

    let table = document.getElementById("courseTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = code;
    row.insertCell(1).innerHTML = title;
    row.insertCell(2).innerHTML = credit;
    row.insertCell(3).innerHTML = teacher;

    alert("Course Added Successfully!");

    document.getElementById("ccode").value = "";
    document.getElementById("ctitle").value = "";
    document.getElementById("ccredit").value = "";
    document.getElementById("teacher").value = "";
}

// Register Course
function registerCourse() {

    let student = document.getElementById("studentid").value;
    let course = document.getElementById("courseid").value;

    if (student === "" || course === "") {
        alert("Enter Student ID and Course Code.");
        return;
    }

    alert(
        "Student " +
        student +
        " registered successfully for course " +
        course
    );

    document.getElementById("studentid").value = "";
    document.getElementById("courseid").value = "";
}
