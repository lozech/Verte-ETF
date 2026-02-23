/* ===== 이메일 도메인 직접입력 ===== */
const domainSelect = document.querySelector(".email-domain-select");
const domainInput  = document.querySelector(".email-domain-input");

domainSelect.addEventListener("change", () => {
    if (domainSelect.value === "direct") {
        domainInput.disabled = false;
        domainInput.value = "";
        domainInput.focus();
    } else if (domainSelect.value === "") {
        domainInput.disabled = true;
        domainInput.value = "";
    } else {
        domainInput.disabled = true;
        domainInput.value = domainSelect.value;
    }
});


/* ===== 약관 동의 ===== */
const agreeAll    = document.getElementById("agreeAll");
const agreeChecks = document.querySelectorAll(".agree-check");
const signupBtn  = document.querySelector(".signup-btn");
const nextBtn    = document.querySelector(".next-btn");

// 전체동의
agreeAll.addEventListener("change", () => {
    agreeChecks.forEach(chk => chk.checked = agreeAll.checked);
    checkRequired();
});

// 개별동의
agreeChecks.forEach(chk => {
    chk.addEventListener("change", () => {
        agreeAll.checked = [...agreeChecks].every(c => c.checked);
        checkRequired();
    });
});

// 필수 약관 체크 확인
function checkRequired() {
    const requiredChecks = document.querySelectorAll(".agree-check[data-required='true']");
    const allChecked = [...requiredChecks].every(c => c.checked);

    signupBtn.disabled = !allChecked;
}

// 다음 버튼 클릭
nextBtn.addEventListener("click", () => {
    const requiredChecks = document.querySelectorAll(".agree-check[data-required='true']");
    const allChecked = [...requiredChecks].every(c => c.checked);

    if (!allChecked) {
        alert("필수 약관에 동의해주세요.");
        return;
    }

    location.href = "Research.html";
});