gospelSel = document.getElementById("gospel-sel")
osasBtn = document.getElementById("osas-btn")
bpBtn = document.getElementById("bp-btn")
atpBtn = document.getElementById("atp-btn")
mgsBtn = document.getElementById("mgs-btn")

gospelCopyBtn = document.getElementById("gospel-copy-btn")
osasCopyBtn = document.getElementById("osas-copy-btn")
bpCopyBtn = document.getElementById("bp-copy-btn")
atpCopyBtn = document.getElementById("atp-copy-btn")
mgsCopyBtn = document.getElementById("mgs-copy-btn")

kjvInput = document.getElementById("kjv-input")

function copyLink(btn, link) {
    if (btn == gospelCopyBtn) {
        switch(gospelSel.value) {
            case "english":
                link = "https://youtu.be/CLTAqJavYZU"
                break
            case "spanish":
                link = "https://youtu.be/raktgKiXQeM"
                break
            case "arabic":
                link = "https://youtu.be/qDONz9V8D1I"
                break
            case "cebuano":
                link = "https://youtu.be/7D9Wsbdr9Vk"
                break
            case "czech":
                link = "https://youtu.be/1M7SoPWm4cM"
                break
            case "mandarin":
                link = "https://youtu.be/FSfolYsWmh4"
                break
            case "french":
                link = "https://youtu.be/lC-jUKkZoCY"
                break
            case "tagalog":
                link = "https://youtu.be/fC3wSuz8zxQ"
                break
            case "greek":
                link = "https://youtu.be/J-aPD-T37e8"
                break
            case "gujarati":
                link = "https://youtu.be/A_ZSVsbPwAc"
                break
            case "hindi":
                link = "https://youtu.be/D_BxUVz5UwQ"
                break
            case "ilocano":
                link = "https://youtu.be/hGZHBHPK_TM"
                break
            case "punjabi":
                link = "https://youtu.be/ASVgVY1gobA"
                break
            case "russian":
                link = "https://youtu.be/okvS_4BbRnQ"
                break
            case "afrikaans":
                link = "https://youtu.be/QiEbcpBdHQI"
                break
            case "assamese":
                link = "https://youtu.be/tBZbmVZl0Lc"
                break
            case "bosnian":
                link = "https://youtu.be/h_5zdZ8OBAE"
                break
            case "bulgarian":
                link = "https://youtu.be/lSKJ9MNIov0"
                break
            case "cape-verde-creol":
                link = "https://youtu.be/2A5qhaJu06U"
                break
            case "cantonese":
                link = "https://youtu.be/SSx_7-jvzqk"
                break
            case "chichewa":
                link = "https://youtu.be/I_LAYXXjHSo"
                break
            case "dutch":
                link = "https://youtu.be/Ny_tJYZQweA"
                break
            case "esperanto":
                link = "https://youtu.be/t4713Dcr65A"
                break
            case "hiligaynon":
                link = "https://youtu.be/P0HXUlJ7TQc"
                break
            case "hungarian":
                link = "https://youtu.be/VJjqrtWOTeA"
                break
            case "igbo":
                link = "https://youtu.be/-vFD1xRg4VM"
                break
            case "kannada":
                link = "https://youtu.be/NmXM-SxPbzE"
                break
            case "konkani":
                link = "https://youtu.be/ghH0crUZK_g"
                break
            case "korean":
                link = "https://youtu.be/D3HbX82g2kw"
                break
            case "malayalam":
                link = "https://youtu.be/Kj2C9OsdRTs"
                break
            case "marathi":
                link = "https://youtu.be/o0K_X1QThYM"
                break
            case "norwegian":
                link = "https://youtu.be/qrA1kulsnF8"
                break
            case "oriya":
                link = "https://youtu.be/A1YRXaDofEc"
                break
            case "polish":
                link = "https://youtu.be/SMNObjy5ojI"
                break
            case "portuguese":
                link = "https://youtu.be/u7svAa4nZ9g"
                break
            case "thai":
                link = "https://youtu.be/-B5H_xnhsfE"
                break
        }
    }
    navigator.clipboard.writeText(link);
    btn.innerText = "Copied!"
}

function openLink(url) {
    window.open(url, "_blank")
}

gospelSel.addEventListener("change", function() {
    gospelCopyBtn.innerText = "Copy Link"
})

// Open Link Buttons
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
gospelCopyBtn.addEventListener("click", function() {
    copyLink(this, "")
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
