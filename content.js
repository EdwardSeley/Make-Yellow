/*global $ */
$(document).ready(function () {
    
    alert("Document is ready!");
    
    $(document).click(function (event) {
        var element = $(event.target).get(0);
        element.setAttribute("id", "selected-item");
    });
    
});
