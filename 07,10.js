const students = [
    {
        id: 1,
        name: "Dara Sok",
        studentCode: "STU001",
        gender: "Male",
        className: "Web Development",
        major: "Frontend Development",
        gpa: 3.75,
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },

    {
        id: 2,
        name: "Sokha Chan",
        studentCode: "STU002",
        gender: "Female",
        className: "UI/UX Design",
        major: "UI/UX Design",
        gpa: 3.90,
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },

    {
        id: 3,
        name: "Vannak Chea",
        studentCode: "STU003",
        gender: "Male",
        className: "Software Development",
        major: "Backend Development",
        gpa: 3.45,
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    },

    {
        id: 4,
        name: "Sreymom Kim",
        studentCode: "STU004",
        gender: "Female",
        className: "Web Development",
        major: "Frontend Development",
        gpa: 3.85,
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    },

    {
        id: 5,
        name: "Piseth Lim",
        studentCode: "STU005",
        gender: "Male",
        className: "Mobile Development",
        major: "Mobile App Development",
        gpa: 3.60,
        image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
];


// ======================================
// SHOW STUDENTS
// ======================================

function showStudents(data = students) {

    let output = "";

    data.forEach(student => {

        output += `
            <tr class="text-center">

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.studentCode}</td>

                <td>${student.gender}</td>

                <td>${student.major}</td>

                <td>${student.gpa}</td>

                <td>
                    <img
                        src="${student.image}"
                        width="50"
                        height="50"
                        class="rounded-circle">
                </td>

                <td>

                    <button
                        onclick="editStudent(${student.id})"
                        data-bs-toggle="modal"
                        data-bs-target="#studentModal"
                        class="btn btn-warning btn-sm">

                        Edit

                    </button>


                    <button
                        onclick="deleteStudent(${student.id})"
                        class="btn btn-danger btn-sm">

                        Delete

                    </button>

                </td>

            </tr>
        `;
    });


    document.getElementById("show-students").innerHTML = output;
}


// Show students when page opens

showStudents();



// ======================================
// SEARCH STUDENT
// ======================================

function searchStudent() {

    let keyword = document
        .getElementById("search")
        .value
        .toLowerCase();


    let result = students.filter(student =>

        student.name
            .toLowerCase()
            .includes(keyword)

        ||

        student.studentCode
            .toLowerCase()
            .includes(keyword)

        ||

        student.major
            .toLowerCase()
            .includes(keyword)

    );


    showStudents(result);
}



// ======================================
// OPEN ADD MODAL
// ======================================

function openAddModal() {

    document.getElementById("modalTitle").innerText =
        "Add Student";


    document.getElementById("studentId").value =
        "";


    document.getElementById("studentName").value =
        "";


    document.getElementById("studentCode").value =
        "";


    document.getElementById("gender").value =
        "Male";


    document.getElementById("className").value =
        "";


    document.getElementById("major").value =
        "";


    document.getElementById("gpa").value =
        "";


    document.getElementById("image").value =
        "";
}



// ======================================
// SAVE STUDENT
// ======================================

function saveStudent() {

    let id =
        document.getElementById("studentId").value;


    let name =
        document.getElementById("studentName").value;


    let studentCode =
        document.getElementById("studentCode").value;


    let gender =
        document.getElementById("gender").value;


    let className =
        document.getElementById("className").value;


    let major =
        document.getElementById("major").value;


    let gpa =
        document.getElementById("gpa").value;


    let image =
        document.getElementById("image").value;



    // ADD STUDENT

    if (id === "") {

        let newStudent = {

            id: students.length + 1,

            name: name,

            studentCode: studentCode,

            gender: gender,

            className: className,

            major: major,

            gpa: Number(gpa),

            image: image

        };


        students.push(newStudent);

    }



    // UPDATE STUDENT

    else {

        let student = students.find(
            student => student.id == id
        );


        student.name = name;

        student.studentCode = studentCode;

        student.gender = gender;

        student.className = className;

        student.major = major;

        student.gpa = Number(gpa);

        student.image = image;

    }


    showStudents();



    // Close modal

    let modal = bootstrap.Modal.getInstance(
        document.getElementById("studentModal")
    );


    modal.hide();
}



// ======================================
// EDIT STUDENT
// ======================================

function editStudent(id) {

    let student = students.find(
        student => student.id == id
    );


    document.getElementById("modalTitle").innerText =
        "Update Student";


    document.getElementById("studentId").value =
        student.id;


    document.getElementById("studentName").value =
        student.name;


    document.getElementById("studentCode").value =
        student.studentCode;


    document.getElementById("gender").value =
        student.gender;


    document.getElementById("className").value =
        student.className;


    document.getElementById("major").value =
        student.major;


    document.getElementById("gpa").value =
        student.gpa;


    document.getElementById("image").value =
        student.image;
}



// ======================================
// DELETE STUDENT
// ======================================

function deleteStudent(id) {

    let index = students.findIndex(
        student => student.id == id
    );


    students.splice(index, 1);


    showStudents();
}