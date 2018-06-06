var currentTab = "main-content";

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    if (tabName != currentTab) {
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tab");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("animate");
            tabcontent[i].classList.remove("hidden");
            if (tabcontent[i].id == currentTab){
                tabcontent[i].classList.add("hidden");
            }else{
                tabcontent[i].classList.add("start-hidden");
            }
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("card");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab

        element = document.getElementById(tabName);
        element.classList.remove("start-hidden");
    
        a = document.getElementById(currentTab).clientHeight
        b = element.clientHeight
        
        console.log ("%i, %i",a, b);
        console.log (Math.max(a, b));
        
        document.getElementById("page-manager").style.minHeight = Math.max(a, b) + "px";

        document.getElementById("slide-animation").className = "";
        element.classList.add("animate");

        void document.getElementById("slide-animation").offsetWidth;

        document.getElementById("slide-animation").classList.add("slide-animation-play");
        document.getElementById("slide-animation").classList.add("slide-" + evt.currentTarget.id)

        evt.currentTarget.className += " active";
        currentTab = tabName;
    } else {
        console.log("same");
    }
}