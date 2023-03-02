function SubmitFeedback() {

    firstname = document.getElementById("fname").value;
    lastname = document.getElementById("lname").value;
    userEmail = document.getElementById("email").value;
    tel = document.getElementById("tel").value;
    company = document.getElementById("company").value;
    topic = document.getElementById("topic").value;
    emailContent = document.getElementById("comment").value;

    if (firstname != "" && lastname != "" && userEmail != "" && emailContent != "") {
        emailContent+= "\n\n\nFirstname: " + firstname + "\nLastname: " + lastname + "\nEmail: " + userEmail + "\nTel: " + tel + "\nCompany: " + company + "\nTopic: " + topic;
        sendEmail(firstname, lastname, userEmail, emailContent);
    }
        

}

function sendEmail(firstname, lastname, userEmail, emailContent) {

    Email.send({
        Host: "smtp.gmail.com",
        Username : "niyyahfoundation2@gmail.com",
        Password : "aekcazzcqivmpzdv",
        To : "ozturk_ozgur@wheatoncollege.edu",
        From : "niyyahfoundation2@gmail.com",
        Subject : "E-Z Docking Solutions Feedback",
        Body : emailContent,
        }).then(
            message => alert("Thank you for contacting us!")
        );

    Email.send({
        Host: "smtp.gmail.com",
        Username : "niyyahfoundation2@gmail.com",
        Password : "aekcazzcqivmpzdv",
        To : userEmail,
        From : "niyyahfoundation2@gmail.com",
        Subject : "E-Z Docking Solutions Feedback",
        Body : "Dear " + firstname + " " + lastname + ", " + "\n\nThank you for contacting us! We will try to respond to you as soon as possible.",
        }).then(
            console.log("receipt has been sent to the user")
        );

}

function ResetFeedback() {
    var elements = document.getElementsByTagName("input");
    for (var i=0; i < elements.length-2; i++) {
        elements[i].value = "";
    }

    document.getElementsByTagName("textarea")[0].value="";
}

function warranty() {

    document.getElementById("surround").style.display = "block";

    document.getElementById("warranty").style.display = "block";
    document.getElementById("warranty").style.opacity = "1";
    
}

function surround() {
    document.getElementById("surround").style.display = "none";

    document.getElementById("warranty").style.display = "none";
    document.getElementById("warranty").style.opacity = "0";
}