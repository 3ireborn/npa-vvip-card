/* ==========================================
   NPA SMART SYSTEM VVIP
   PREVIEW.JS
========================================== */

function initPreview() {

    // =============================
    // ELEMENT INPUT
    // =============================

    const memberName =
        document.getElementById("memberName");

    const memberID =
        document.getElementById("memberID");

    const tagline =
        document.getElementById("tagline");

    const level =
        document.getElementById("level");

    // =============================
    // PREVIEW
    // =============================

    const previewName =
        document.getElementById("previewName");

    const previewID =
        document.getElementById("previewID");

    const taglinePreview =
        document.getElementById("taglinePreview");

    const memberTitle =
        document.querySelector(".memberArea h2");

    const badge =
        document.querySelector(".vvipBadge");

    // =============================
    // MEMBER NAME
    // =============================

    if(memberName){

        memberName.addEventListener("input",()=>{

            if(memberName.value.trim()==""){

                previewName.innerHTML="Nama Member";

            }else{

                previewName.innerHTML=
                memberName.value;

            }

        });

    }

    // =============================
    // MEMBER ID
    // =============================

    if(memberID){

        memberID.addEventListener("input",()=>{

            if(memberID.value.trim()==""){

                previewID.innerHTML="NPA-000000";

            }else{

                previewID.innerHTML=
                memberID.value;

            }

        });

    }

    // =============================
    // TAGLINE
    // =============================

    if(tagline){

        tagline.addEventListener("input",()=>{

            if(tagline.value.trim()==""){

                taglinePreview.innerHTML=
                "Sistem Cerdas • Bisnis Berkelas • Hasil Luar Biasa";

            }else{

                taglinePreview.innerHTML=
                tagline.value;

            }

        });

    }

    // =============================
    // LEVEL MEMBER
    // =============================

    if(level){

        level.addEventListener("change",()=>{

            memberTitle.innerHTML=
            level.value+" MEMBER";

            badge.innerHTML=
            level.value+" MEMBER";

        });

    }

    // =============================
    // TEMA
    // =============================

    const theme =
        document.getElementById("theme");

    const card =
        document.getElementById("card");

    if(theme){

        theme.addEventListener("change",()=>{

            card.classList.remove(

                "black-gold",
                "navy-gold",
                "platinum",
                "emerald",
                "diamond"

            );

            switch(theme.value){

                case "Black Gold":

                    card.classList.add("black-gold");

                break;

                case "Navy Gold":

                    card.classList.add("navy-gold");

                break;

                case "Platinum":

                    card.classList.add("platinum");

                break;

                case "Emerald":

                    card.classList.add("emerald");

                break;

                case "Diamond":

                    card.classList.add("diamond");

                break;

            }

        });

    }

}
