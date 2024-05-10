function calculateAge() {
  var birthdate;

  if (document.getElementById("use-calendar").checked) {
      birthdate = new Date(document.getElementById("birthdate").value);
  } else {
      birthdate = new Date(document.getElementById("birthdate-manual").value);
  }

  if (isNaN(birthdate.getTime())) {
      alert("Please enter a valid birthdate");
      return;
  }

  var currentDate = new Date();

  var age = currentDate.getFullYear() - birthdate.getFullYear();

  if (currentDate.getMonth() < birthdate.getMonth() ||
      (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
      age--;
  }

  document.getElementById("result").innerText = "Your age is: " + age + " years";
}

document.getElementById("use-calendar").addEventListener("change", function() {
  var useCalendar = document.getElementById("use-calendar").checked;
  document.getElementById("birthdate").style.display = useCalendar ? "block" : "none";
  document.getElementById("birthdate-manual").style.display = useCalendar ? "none" : "block";
});

// will return to this at a later time