document.addEventListener("DOMContentLoaded", function () {
    console.log("?????? ????!");

    // ????? ??? ????? ??? ?? ??????
    document.querySelectorAll(".match-container").forEach(match => {
        match.addEventListener("click", () => {
            match.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
            setTimeout(() => {
                match.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }, 200);
        });
    });
});
