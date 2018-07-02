function bind() {
    $('#btnConfirm').click(function(e) {
        if ($('#confirmCheck').is(":checked")) {
            getConfirmationForSendFAQ();
        }
        else {
            e.preventDefault();
            showalert("You should accept \"Personal Information Policy\" !", "alert-error");
        }
    });
}
    
function getConfirmationForSendFAQ() {
    var name = $('#inputName').val();
    var email = $('#inputEmail').val();
    var phone = $('#inputPhone').val();
    var subject = $('#inputSubject').val();
    var detail = $('#inputDetail').val();

    $('.form-actions').empty();
    html = [];
    html.push("<table cellpadding ='8' class = 'submitInfo'");
    html.push("<tr>");
    html.push("<td class = 'title'>Name:</div>");
    html.push("<td class = 'value'>"+ name +"</td>");
    html.push("</tr>");

    html.push("<tr>");
    html.push("<td class = 'title'>Email Address:</div>");
    html.push("<td class = 'value'>"+ email +"</td>");
    html.push("</tr>");

    if (phone.trim().length > 0) {
        html.push("<tr>");
        html.push("<td class = 'title'>Phone No:</div>");
        html.push("<td class = 'value'>"+ phone +"</td>");
        html.push("</tr>");
    }

    html.push("<tr>");
    html.push("<td class = 'title'>Subject:</div>");
    html.push("<td class = 'value'>"+ subject +"</td>");
    html.push("</tr>");

    html.push("<tr>");
    html.push("<td class = 'title'>Detail Info:</div>");
    html.push("<td class = 'value'>"+ detail +"</td>");
    html.push("</tr>");

    html.push("<tr>");
    html.push("<td colspan='2'><div align = 'center'>");
    html.push("<button id='btnSend' class='btn btn-primary' style='width: 65px;'>Send</button>");
    html.push("<button id='btnReturn' class='btn btn-inverse' style='width: 65px; height: 27px; margin-left: 5px;'>Return</button>");
    html.push("</div></td></tr>");

    html.push("</table>");
    $('.form-actions').append(html.join(''));
    $('#btnReturn').click(function(e) {
        // HERE I WANT TO KNOW HOW TO DO.....
    });
    $('#btnSend').click(function(e) {
        alert("Doom");
    });
}

$(window).on("beforeunload", function() {
    // alert("Handler for .unload() called.");
    sessionStorage.setItem("msg",[0,1,2,3,4,5,6]);
});

$(window).on("load", function() {
    // alert("Handler for .unload() called.");
    var msg = sessionStorage.getItem('msg');
    console.log(msg);
});