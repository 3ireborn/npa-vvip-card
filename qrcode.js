/* ==========================================
   NPA SMART SYSTEM VVIP
   QRCODE.JS
========================================== */

let qrCode = null;

function initQRCode() {

    const qrContainer = document.getElementById("qrcode");
    const memberID = document.getElementById("memberID");

    if (!qrContainer) return;

    // Hapus isi QR lama
    qrContainer.innerHTML = "";

    // Membuat QR pertama kali
    qrCode = new QRCode(qrContainer, {
        text: "NPA-000001",
        width: 90,
        height: 90,
        colorDark: "#000000",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Update otomatis saat ID berubah
    if (memberID) {

        memberID.addEventListener("input", function () {

            let value = this.value.trim();

            if (value === "") {
                value = "NPA-000001";
            }

            qrCode.clear();
            qrCode.makeCode(value);

        });

    }

}

/* ===========================
   UPDATE QR MANUAL
=========================== */

function updateQRCode(text){

    if(!qrCode) return;

    qrCode.clear();

    qrCode.makeCode(text);

}

/* ===========================
   DOWNLOAD QR
=========================== */

function downloadQRCode(){

    const img = document.querySelector("#qrcode img");

    if(!img){

        alert("QR Code belum tersedia.");

        return;

    }

    const link = document.createElement("a");

    link.href = img.src;

    link.download = "NPA_QR_CODE.png";

    link.click();

}
