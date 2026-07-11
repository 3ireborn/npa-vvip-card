/* ==========================================
   NPA SMART SYSTEM VVIP
   GENERATOR.JS
========================================== */

function initGenerator() {

    const generateBtn =
        document.getElementById("generateBtn");

    if (!generateBtn) return;

    generateBtn.addEventListener("click", generateCard);

}

/* ==========================================
   GENERATE CARD
========================================== */

function generateCard() {

    const memberName =
        document.getElementById("memberName");

    const memberID =
        document.getElementById("memberID");

    const previewName =
        document.getElementById("previewName");

    const previewID =
        document.getElementById("previewID");

    /* ==========================
       MEMBER NAME
    ========================== */

    if (memberName.value.trim() === "") {

        alert("Silakan isi Nama Member.");

        memberName.focus();

        return;

    }

    previewName.innerHTML = memberName.value;

    /* ==========================
       AUTO ID MEMBER
    ========================== */

    if (memberID.value.trim() === "") {

        memberID.value = createMemberID();

    }

    previewID.innerHTML = memberID.value;

    /* ==========================
       UPDATE QR
    ========================== */

    if (typeof updateQRCode === "function") {

        updateQRCode(memberID.value);

    }

    /* ==========================
       MEMBER SINCE
    ========================== */

    const memberSince =
        document.querySelector(".memberSince");

    if (memberSince) {

        memberSince.innerHTML =
            "MEMBER SINCE " + new Date().getFullYear();

    }

    /* ==========================
       SERIAL NUMBER
    ========================== */

    const serial =
        document.querySelector(".serialNumber");

    if (serial) {

        serial.innerHTML =
            "SN : " + createSerial();

    }

    /* ==========================
       STATUS
    ========================== */

    const status =
        document.querySelector(".memberStatus");

    if (status) {

        status.innerHTML = "ACTIVE";

    }

    alert("VVIP Card berhasil dibuat.");

}

/* ==========================================
   MEMBER ID
========================================== */

function createMemberID() {

    const now = new Date();

    const yyyy = now.getFullYear();

    const mm = String(now.getMonth() + 1)
        .padStart(2, "0");

    const dd = String(now.getDate())
        .padStart(2, "0");

    const random = Math.floor(

        1000 + Math.random() * 9000

    );

    return `NPA-${yyyy}${mm}${dd}-${random}`;

}

/* ==========================================
   SERIAL NUMBER
========================================== */

function createSerial() {

    const chars =
        "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    let serial = "";

    for (let i = 0; i < 16; i++) {

        serial +=

            chars.charAt(

                Math.floor(

                    Math.random() * chars.length

                )

            );

    }

    return serial;

}

/* ==========================================
   RESET FORM
========================================== */

function resetCard() {

    document.getElementById("memberName").value = "";

    document.getElementById("memberID").value = "";

    document.getElementById("previewName").innerHTML =
        "Nama Member";

    document.getElementById("previewID").innerHTML =
        "NPA-000001";

    if (typeof updateQRCode === "function") {

        updateQRCode("NPA-000001");

    }

}
