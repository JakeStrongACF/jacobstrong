function check_submit() {
  let fn = document.forms["form"]["firstname"].value;
  let ln = document.forms["form"]["lastname"].value;
  let em = document.forms["form"]["email"].value;
  if (fn == "" && ln == "" && em == "") {
    alert("At least one field must be filled out");
    return false;
  } else {
    alert("Contact form information submitted");
    return true;
  }
}
