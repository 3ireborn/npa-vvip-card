/* ==========================================
   NPA SMART SYSTEM VVIP
   UTILS.JS
========================================== */

/* ===========================
   RANDOM NUMBER
=========================== */

function randomNumber(min, max){

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}

/* ===========================
   RANDOM STRING
=========================== */

function randomString(length){

    const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let result = "";

    for(let i=0;i<length;i++){

        result += chars.charAt(

            Math.floor(

                Math.random() * chars.length

            )

        );

    }

    return result;

}

/* ===========================
   FORMAT DATE
=========================== */

function formatDate(){

    const now = new Date();

    const yyyy = now.getFullYear();

    const mm = String(

        now.getMonth()+1

    ).padStart(2,"0");

    const dd = String(

        now.getDate()

    ).padStart(2,"0");

    return `${yyyy}-${mm}-${dd}`;

}

/* ===========================
   MEMBER ID
=========================== */

function generateMemberID(){

    const date =
    formatDate().replaceAll("-","");

    return `NPA-${date}-${randomNumber(1000,9999)}`;

}

/* ===========================
   SERIAL NUMBER
=========================== */

function generateSerial(){

    return randomString(18);

}

/* ===========================
   COPY TEXT
=========================== */

function copyText(text){

    navigator.clipboard.writeText(text)

    .then(()=>{

        alert("Berhasil disalin.");

    })

    .catch(()=>{

        alert("Gagal menyalin.");

    });

}

/* ===========================
   DOWNLOAD FILE
=========================== */

function downloadFile(url,fileName){

    const link =
    document.createElement("a");

    link.href = url;

    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}

/* ===========================
   VALIDASI GAMBAR
=========================== */

function isImage(file){

    return file &&
    file.type.startsWith("image/");

}

/* ===========================
   FORMAT MEMBER NAME
=========================== */

function capitalize(text){

    return text.replace(

        /\b\w/g,

        function(letter){

            return letter.toUpperCase();

        }

    );

}

/* ===========================
   RESET PREVIEW
=========================== */

function resetPreview(){

    document.getElementById("previewName").innerHTML =
    "Nama Member";

    document.getElementById("previewID").innerHTML =
    "NPA-000001";

}

/* ===========================
   SHOW MESSAGE
=========================== */

function showMessage(message){

    alert(message);

}

/* ===========================
   VERSION
=========================== */

const APP_VERSION =
"NPA SMART SYSTEM VVIP v1.0";
