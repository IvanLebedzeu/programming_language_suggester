$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var userName = $("input#user1").val();
    var userGender = $("#gender").val();
    var anyLanguages = $("input:radio[name=anyLanguages]:checked").val();
    var workField = $("#work").val();
    var userCompany = $("input:radio[name=company]:checked").val();
    var newThings = $("input:radio[name=newThings]:checked").val();
    var jobForLife = $("input:radio[name=jobs]:checked").val();


    if ((userGender === "Male" || userGender === "Female") && anyLanguages !== "No" && userCompany === "startup") {
      $("#kotlin").show();
    } else if (userGender !== "Female" && (newThings === "yes" || newThings === "timeToTime") && jobForLife === "wish" && userCompany !== "corporate"){
      $("#java").show();
    } else if ((newThings === "stuck" || newThings === "not" || newThings === "timeToTime") && workField !== "corporate"){
      $("#python").show();
    } else if ((jobForLife === "no" || jobForLife === "wish") && Gender !== "I prefere not to answer") {
      $("#ruby").show();
    } else {
      alert("We are really sorry but programming is not for you");
    }

    $(".fullname").append(userName);
  
  });

});