/* ==========================================
   NPA SMART SYSTEM VVIP
   UPLOAD.JS
========================================== */

function initUpload() {

    // =============================
    // LOGO
    // =============================

    const logoUpload =
        document.getElementById("logoUpload");

    const logoPreview =
        document.getElementById("logoPreview");

    if (logoUpload && logoPreview) {

        logoUpload.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) return;

            if (!file.type.startsWith("image/")) {

                alert("Silakan pilih file gambar.");

                return;

            }

            const reader = new FileReader();

            reader.onload = function (e) {

                logoPreview.src = e.target.result;

            };

            reader.readAsDataURL(file);

        });

    }

    // =============================
    // FOTO MEMBER
    // =============================

    const photoUpload =
        document.getElementById("photoUpload");

    const photoPreview =
        document.getElementById("photoPreview");

    if (photoUpload && photoPreview) {

        photoUpload.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) return;

            if (!file.type.startsWith("image/")) {

                alert("Silakan pilih file gambar.");

                return;

            }

            const reader = new FileReader();

            reader.onload = function (e) {

                photoPreview.src = e.target.result;

            };

            reader.readAsDataURL(file);

        });

    }

    // =============================
    // DRAG & DROP FOTO
    // =============================

    if (photoPreview && photoUpload) {

        photoPreview.addEventListener("dragover", function (e) {

            e.preventDefault();

        });

        photoPreview.addEventListener("drop", function (e) {

            e.preventDefault();

            const file = e.dataTransfer.files[0];

            if (!file) return;

            if (!file.type.startsWith("image/")) return;

            const reader = new FileReader();

            reader.onload = function (ev) {

                photoPreview.src = ev.target.result;

            };

            reader.readAsDataURL(file);

        });

    }

    // =============================
    // DRAG & DROP LOGO
    // =============================

    if (logoPreview && logoUpload) {

        logoPreview.addEventListener("dragover", function (e) {

            e.preventDefault();

        });

        logoPreview.addEventListener("drop", function (e) {

            e.preventDefault();

            const file = e.dataTransfer.files[0];

            if (!file) return;

            if (!file.type.startsWith("image/")) return;

            const reader = new FileReader();

            reader.onload = function (ev) {

                logoPreview.src = ev.target.result;

            };

            reader.readAsDataURL(file);

        });

    }

}
