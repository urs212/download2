function handleCookie(accepted) {
  document.getElementById("cookieModal").style.display = "none";
  document.getElementById("downloadSection").style.display = "block";
}

function openPrivacyModal() {
  document.getElementById("privacyModal").style.display = "flex";
}

function handlePrivacy(accepted) {
  document.getElementById("privacyModal").style.display = "none";
  if (accepted) {
    // 실제 다운로드 링크
    window.location.href = "https://f92.workupload.com/download/p8VhnsHvcFf";
  } else {
    alert("개인정보 제공에 동의하지 않으면 다운로드할 수 없습니다.");
  }
}
