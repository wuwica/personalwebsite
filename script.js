function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.add("hidden");
        tabcontent[i].classList.remove("animate");
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("card");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
   
    element = document.getElementById(tabName);
    element.classList.remove("hidden");
    document.getElementById("slide-animation").classList.remove("slide-animation-play");
    element.classList.add("animate");
    
    void document.getElementById("slide-animation").offsetWidth;
    
    document.getElementById("slide-animation").classList.add("slide-animation-play");
    evt.currentTarget.className += " active";
    
}