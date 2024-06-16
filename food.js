const current = document.getElementById("current"); // 현재 선택된 이미지를 표시할 요소를 가져옴
// const current = document.querySelector('#current'); // 선택적으로 사용할 수 있는 대체 방법
const imgs = document.querySelectorAll(".imgs img"); // 모든 이미지 요소를 가져옴

imgs.forEach((img) => img.addEventListener("click", imgClick)); // 각 이미지에 클릭 이벤트 리스너를 추가

document.addEventListener("DOMContentLoaded", (event) => { // DOM이 완전히 로드되었을 때 실행되는 함수
  const imgs = document.querySelectorAll(".imgs img"); // 모든 이미지 요소를 가져옴
  const current = document.getElementById("current"); // 현재 선택된 이미지를 표시할 요소를 가져옴
  let slide = document.querySelector(".main-img"); // 슬라이드 요소를 가져옴
  let currentIndex = 0; // 현재 슬라이드의 인덱스를 저장할 변수

  // 이미지 클릭 이벤트
  imgs.forEach((img, index) => // 각 이미지에 대해
    img.addEventListener("click", () => { // 이미지 클릭 이벤트를 추가
      current.src = img.src; // 클릭한 이미지의 src를 현재 이미지로 설정
      current.classList.remove("fade-in"); // fade-in 클래스를 제거하여 애니메이션을 재설정
      void current.offsetWidth; // Reflow to restart the animation // 애니메이션 재시작을 위한 리플로우
      current.classList.add("fade-in"); // fade-in 클래스를 다시 추가하여 애니메이션을 시작
      currentIndex = index; // 현재 인덱스를 클릭한 이미지의 인덱스로 설정
    })
  );

  // 다음 슬라이드로 이동하는 함수
  function nextMove() { 
    currentIndex = (currentIndex + 1) % imgs.length; // 다음 인덱스를 계산 (순환)
    current.src = imgs[currentIndex].src; // 다음 이미지의 src를 현재 이미지로 설정
    current.classList.remove("fade-in"); // fade-in 클래스를 제거하여 애니메이션을 재설정
    void current.offsetWidth; // Reflow to restart the animation // 애니메이션 재시작을 위한 리플로우
    current.classList.add("fade-in"); // fade-in 클래스를 다시 추가하여 애니메이션을 시작
  }

  let loopInterval = setInterval(nextMove, 3000); // 3초마다 슬라이드를 자동으로 넘김

  slide.addEventListener("mouseover", () => { // 슬라이드에 마우스가 올라간 경우
    clearInterval(loopInterval); // 루프 멈추기
  });

  slide.addEventListener("mouseout", () => { // 슬라이드에서 마우스가 나온 경우
    loopInterval = setInterval(nextMove, 3000); // 루프 재시작하기
  });
});

function imgClick(e) { // 이미지 클릭 이벤트 핸들러
  imgs.forEach((img) => (img.style.opacity = 1)); // 모든 이미지의 투명도를 초기화

  current.src = e.target.src; // 클릭한 이미지의 src를 현재 이미지로 설정

  current.classList.add("fade-in"); // fade-in 클래스를 추가하여 애니메이션을 시작

  setTimeout(() => current.classList.remove("fade-in"), 500); // 500ms 후에 fade-in 클래스를 제거

  e.target.style.opacity = 0.4; // 클릭한 이미지의 투명도를 변경
}


document.addEventListener("DOMContentLoaded", function() {
    const menuData = [
        { id: 1, name: "프레첼", price: 4000 },
        { id: 2, name: "팝콘", price: 5000 },
        { id: 3, name: "핫도그", price: 3000 },
        { id: 4, name: "나쵸", price: 3000 },
        { id: 5, name: "오징어버터구이", price: 6000 },
        { id: 6, name: "음료수", price: 2000 },
        { id: 7, name: "슬러쉬", price: 3000 },
        { id: 8, name: "치즈볼", price: 5000 },
        { id: 9, name: "콜팝", price: 4000 },
        { id: 10, name: "맥주", price: 5000 },
        { id: 11, name: "텐더2조각", price: 3500 },
        // 추가 메뉴 항목...
    ];

    function populateMenuTable() {
        const menuTable = document.getElementById("menuTable");
        menuTable.innerHTML = "";

        menuData.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><input type="number" value="0" min="0" class="quantity" data-id="${item.id}" /></td>
                <td class="total-price" data-id="${item.id}">0</td>
                <td><button class="add-btn" data-id="${item.id}">추가</button></td>
                <td><button class="remove-btn" data-id="${item.id}">빼기</button></td>
                <td><button class="cancel-btn" data-id="${item.id}">취소</button></td>
            `;
            menuTable.appendChild(row);
        });
    }

    function calculateTotal() {
        let total = 0;
        document.querySelectorAll(".total-price").forEach(priceElement => {
            total += parseInt(priceElement.innerText);
        });
        document.querySelector("h2").innerText = `합계 : ${total}원`;
    }

    document.getElementById("menuTable").addEventListener("click", function(event) {
        const target = event.target;
        const id = parseInt(target.getAttribute("data-id"));
        const item = menuData.find(item => item.id === id);
        const quantityInput = document.querySelector(`.quantity[data-id="${id}"]`);
        let quantity = parseInt(quantityInput.value);

        if (target.classList.contains("add-btn")) {
            quantity++;
        } else if (target.classList.contains("remove-btn")) {
            quantity = Math.max(0, quantity - 1);
        } else if (target.classList.contains("cancel-btn")) {
            quantity = 0;
        }

        quantityInput.value = quantity;
        const totalPriceElement = document.querySelector(`.total-price[data-id="${id}"]`);
        totalPriceElement.innerText = quantity * item.price;

        calculateTotal();
    });

    populateMenuTable();
});


            