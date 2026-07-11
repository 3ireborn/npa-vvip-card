/* ==========================================
   NPA SMART SYSTEM VVIP
   STORAGE.JS
========================================== */

function initStorage() {

    loadStorage();

    const fields = [

        "memberName",
        "memberID",
        "tagline",
        "level",
        "theme"

    ];

    fields.forEach(id => {

        const el = document.getElementById(id);

        if (!el) return;

        el.addEventListener("input", saveStorage);
        el.addEventListener("change", saveStorage);

    });

}

/* ==========================================
   SAVE
========================================== */

function saveStorage(){

    const data={

        memberName:
            document.getElementById("memberName")?.value || "",

        memberID:
            document.getElementById("memberID")?.value || "",

        tagline:
            document.getElementById("tagline")?.value || "",

        level:
            document.getElementById("level")?.value || "VVIP",

        theme:
            document.getElementById("theme")?.value || "Black Gold"

    };

    localStorage.setItem(

        "NPA_VVIP_CARD",

        JSON.stringify(data)

    );

}

/* ==========================================
   LOAD
========================================== */

function loadStorage(){

    const data = localStorage.getItem("NPA_VVIP_CARD");

    if(!data) return;

    const obj = JSON.parse(data);

    if(document.getElementById("memberName")){

        document.getElementById("memberName").value =
        obj.memberName || "";

    }

    if(document.getElementById("memberID")){

        document.getElementById("memberID").value =
        obj.memberID || "";

    }

    if(document.getElementById("tagline")){

        document.getElementById("tagline").value =
        obj.tagline || "";

    }

    if(document.getElementById("level")){

        document.getElementById("level").value =
        obj.level || "VVIP";

    }

    if(document.getElementById("theme")){

        document.getElementById("theme").value =
        obj.theme || "Black Gold";

    }

    /* Update Preview */

    if(typeof initPreview === "function"){

        document.getElementById("memberName")
            ?.dispatchEvent(new Event("input"));

        document.getElementById("memberID")
            ?.dispatchEvent(new Event("input"));

        document.getElementById("tagline")
            ?.dispatchEvent(new Event("input"));

        document.getElementById("level")
            ?.dispatchEvent(new Event("change"));

        document.getElementById("theme")
            ?.dispatchEvent(new Event("change"));

    }

    if(typeof updateQRCode==="function"){

        updateQRCode(

            obj.memberID || "NPA-000001"

        );

    }

}

/* ==========================================
   CLEAR STORAGE
========================================== */

function clearStorage(){

    if(confirm("Hapus semua data?")){

        localStorage.removeItem(

            "NPA_VVIP_CARD"

        );

        location.reload();

    }

                   }
