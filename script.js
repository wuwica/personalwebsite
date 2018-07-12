var currentTab = "main-content";

function whichAnimationEvent() {
    var t,
        el = document.createElement("fakeelement");

    var animations = {
        "animation": "animationend",
        "OAnimation": "oAnimationEnd",
        "MozAnimation": "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
}

var transitionEnd = whichAnimationEvent();
var wait = false;

function openTab(evt, tabName) {
    // Declare all variables
    if (!wait) {
        var i, tabcontent, tablinks;

        if (tabName != currentTab) {

            element = document.getElementById(tabName);
            a = document.getElementById(currentTab).clientHeight;
            element.style.height = "auto";
            b = element.clientHeight;
            element.style.height = null;
            var maxHeight = Math.max(a, b);
            var animationTiming = Math.sqrt(maxHeight) / 20 + "s";
            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tab");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("animate");
                tabcontent[i].classList.remove("hidden");
                if (tabcontent[i].id == currentTab) {
                    //KEY HEIGHT THINGY
                    tabcontent[i].style.animationDuration = animationTiming;
                    //then add the class
                    tabcontent[i].classList.add("hidden");
                } else {
                    tabcontent[i].classList.add("start-hidden");
                }
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("card");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab

            element.classList.remove("start-hidden");

            document.getElementById("page-manager").style.minHeight = maxHeight + "px";

            document.getElementById("slide-animation").className = "";
            element.style.animationDuration = animationTiming;
            element.classList.add("animate");

            void document.getElementById("slide-animation").offsetWidth;

            document.getElementById("slide-animation").style.animationDuration = animationTiming;
            document.getElementById("slide-animation").classList.add("slide-animation-play");
            document.getElementById("slide-animation").classList.add("slide-" + evt.currentTarget.id)

            document.getElementById("slide-animation").addEventListener(transitionEnd, shrinkContainer);
            evt.currentTarget.className += " active";
            currentTab = tabName;

            wait = true;
            setTimeout(function () {
                wait = false;
            }, 1000);

        }
    }

}

function shrinkContainer() {
    document.getElementById("page-manager").style.minHeight = document.getElementById(currentTab).clientHeight + "px";
}
