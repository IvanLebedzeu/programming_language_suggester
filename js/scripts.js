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

    
    // if ((userGender === "Male" || userGender === "Female") && anyLanguages !== "No" && userCompany === "startup" && workField !== "Gaming" && newThings === "yes" && jobForLife === "wish" ) {
    //   $("#kotlin").show();
    // } else if (userGender !== "Bigender" && anyLanguages === "No" && userCompany === "corporate" && (workField === "Web" || workField === "Mobile") && newThings !== "not" && (jobForLife === "yes" || jobForLife === "wish" )) {
    //   $("#java").show();
    // } else if (userGender === "Bigender" && anyLanguages !== "more" && (userCompany === "startup" || userCompany === "corporate") && workField === "Gaming" && newThings === "not" && jobForLife === "usedTo") {
    //   $("#python").show();
    // } else if ((userGender !== "Male" && userGender !== "Female") && (anyLanguages === "more" || anyLanguages === "few") && (userCompany === "small" || userCompany === "startup") && workField !== "Enterprise" && (newThings === "timeToTime" || newThings === "stuck") && jobForLife !== "wish")  {
    //   $("#ruby").show();
    // }
     if (userGender === "Male"){
      $("#kotlin").show();
     } else if (userGender === "Female") {
      $("#java").show();
     } else if (userGender === "Bigender"){
      $("#python").show();
     } else if (userGender === "I prefere not to answer") {
      $("#ruby").show();
     }

      
      
      else {
      alert("We are really sorry but programming is not for you");
    }

    

    $(".fullname").append(userName);
  
  });
  

  $("#myBtn1").click(function(){
    $("#startQuiz").show();
    event.preventDefault(); 
  }); 

});