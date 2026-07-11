/* ==========================================
   NPA SMART SYSTEM VVIP
   DOWNLOAD.JS
========================================== */

function initDownload(){

    const btnPNG =
        document.getElementById("downloadPNG");

    const btnPDF =
        document.getElementById("downloadPDF");

    const btnPrint =
        document.getElementById("printCard");

    if(btnPNG){

        btnPNG.addEventListener(

            "click",

            downloadPNG

        );

    }

    if(btnPDF){

        btnPDF.addEventListener(

            "click",

            downloadPDF

        );

    }

    if(btnPrint){

        btnPrint.addEventListener(

            "click",

            printCard

        );

    }

}

/* ==========================================
   DOWNLOAD PNG
========================================== */

function downloadPNG(){

    const card =
        document.getElementById("card");

    html2canvas(card,{

        scale:3,

        useCORS:true,

        backgroundColor:null

    }).then(function(canvas){

        const link =
            document.createElement("a");

        link.download =
            "NPA_VVIP_CARD.png";

        link.href =
            canvas.toDataURL("image/png");

        link.click();

    });

}

/* ==========================================
   DOWNLOAD PDF
========================================== */

async function downloadPDF(){

    const card =
        document.getElementById("card");

    const canvas =
        await html2canvas(card,{

            scale:3,

            useCORS:true

        });

    const img =
        canvas.toDataURL("image/png");

    const { jsPDF } =
        window.jspdf;

    const pdf =
        new jsPDF(

            "landscape",

            "mm",

            [54,86]

        );

    pdf.addImage(

        img,

        "PNG",

        0,

        0,

        86,

        54

    );

    pdf.save(

        "NPA_VVIP_CARD.pdf"

    );

}

/* ==========================================
   PRINT CARD
========================================== */

function printCard(){

    const card =
        document.getElementById("card");

    html2canvas(card,{

        scale:3,

        useCORS:true

    }).then(function(canvas){

        const image =
            canvas.toDataURL("image/png");

        const win =
            window.open("","PRINT");

        win.document.write(`

        <html>

        <head>

        <title>

        Print Card

        </title>

        <style>

        body{

            margin:0;

            display:flex;

            justify-content:center;

            align-items:center;

            height:100vh;

            background:#222;

        }

        img{

            width:86mm;

            height:54mm;

        }

        </style>

        </head>

        <body>

        <img src="${image}">

        <script>

        window.onload=function(){

            window.print();

            window.onafterprint=function(){

                window.close();

            }

        }

        <\/script>

        </body>

        </html>

        `);

        win.document.close();

    });

}
