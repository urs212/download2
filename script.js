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
    document.getElementById("downloadSection").style.display = "none";
    document.getElementById("noticeSection").style.display = "block";

    let seconds = 10;
    const countdownText = document.getElementById("countdownText");

    const countdown = setInterval(() => {
      seconds--;
      countdownText.textContent = `다운로드까지 ${seconds}초 남음...`;
      if (seconds === 0) {
        clearInterval(countdown);
        // 다운로드 링크로 이동
        window.location.href = "https://f51.workupload.com/download/UpePAn5xQmK";
      }
    }, 1000);
  } else {
    alert("개인정보 제공에 동의하지 않으면 다운로드할 수 없습니다.");
  }
}
