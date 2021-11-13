bwthBtn = document.getElementById("bwth-btn")
osasBtn = document.getElementById("osas-btn")
bpBtn = document.getElementById("bp-btn")
atpBtn = document.getElementById("atp-btn")
mgsBtn = document.getElementById("mgs-btn")
bwthCopyBtn = document.getElementById("bwth-copy-btn")
osasCopyBtn = document.getElementById("osas-copy-btn")
bpCopyBtn = document.getElementById("bp-copy-btn")
atpCopyBtn = document.getElementById("atp-copy-btn")
mgsCopyBtn = document.getElementById("mgs-copy-btn")
kjvInput = document.getElementById("kjv-input")

function copyLink(btn, link) {
    navigator.clipboard.writeText(link);
    btn.innerText = "Copied!"
}

function openLink(url) {
    window.open(url, "_blank")
}

// Open Link Buttons
bwthBtn.addEventListener("click", function() {
    openLink("https://youtu.be/CLTAqJavYZU")
})

osasBtn.addEventListener("click", function() {
    openLink("https://youtu.be/3Qe2iQE2ImQ")
})

bpBtn.addEventListener("click", function() {
    openLink("https://bannedpreaching.com/")
})

atpBtn.addEventListener("click", function() {
    openLink("https://allthepreaching.com/")
})

mgsBtn.addEventListener("click", function() {
    openLink("https://militarygetsaved.tripod.com/findchurch.html")
})

// Copy Link Buttons
bwthCopyBtn.addEventListener("click", function() {
    copyLink(this, "https://youtu.be/CLTAqJavYZU")
})

osasCopyBtn.addEventListener("click", function() {
    copyLink(this, "https://youtu.be/3Qe2iQE2ImQ")
})

bpCopyBtn.addEventListener("click", function() {
    copyLink(this, "https://bannedpreaching.com/")
})

atpCopyBtn.addEventListener("click", function() {
    copyLink(this, "https://allthepreaching.com/")
})

mgsCopyBtn.addEventListener("click", function() {
    copyLink(this, "https://militarygetsaved.tripod.com/findchurch.html")
})

kjvInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        let search = kjvInput.value
        if (search) {
            openLink("https://www.biblegateway.com/quicksearch/?quicksearch=" + search + "&version=KJV")
        }
    }
})