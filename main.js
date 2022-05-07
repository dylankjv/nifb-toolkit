linksTab = document.getElementById("links-tab")
eventsTab = document.getElementById("events-tab")
livestreamsTab = document.getElementById("livestreams-tab")
contactTab = document.getElementById("contact-tab")
updateText = document.getElementById("update-text")

let lastUpdated = "Last updated: May 7, 2022 (v1.4.0)"
updateText.innerHTML = lastUpdated

// Highlight selected tab
if (window.location.pathname === "/index.html") {
    linksTab.style.backgroundColor = "#1E1E1E"
    linksTab.style.border = "1px solid #4b4b4b"
    linksTab.style.color = "#DFDFDF"
} else if (window.location.pathname === "/livestreams.html") {
    livestreamsTab.style.backgroundColor = "#1E1E1E"
    livestreamsTab.style.border = "1px solid #4b4b4b"
    livestreamsTab.style.color = "#DFDFDF"
} else if (window.location.pathname === "/events.html") {
    eventsTab.style.backgroundColor = "#1E1E1E"
    eventsTab.style.border = "1px solid #4b4b4b"
    eventsTab.style.color = "#DFDFDF"
} else {
    contactTab.style.backgroundColor = "#1E1E1E"
    contactTab.style.border = "1px solid #4b4b4b"
    contactTab.style.color = "#DFDFDF"
}

// Tab buttons
linksTab.addEventListener("click", function() {
    location.href="index.html"
})

eventsTab.addEventListener("click", function() {
    location.href="events.html"
})

livestreamsTab.addEventListener("click", function() {
    location.href="livestreams.html"
})

contactTab.addEventListener("click", function() {
    location.href="contact.html"
})