document.addEventListener('DOMContentLoaded', () => {
  const scheduleList = document.getElementById('schedule-list');
  const now = new Date();

  const movieTitle = '';
  const intervalMinutes = 60;
  const startTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    9,
    0
  );
  const endTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    22,
    0
  );

  scheduleList.innerHTML = '';

  for (
    let time = startTime;
    time <= endTime;
    time.setMinutes(time.getMinutes() + intervalMinutes)
  ) {
    if (time > now) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = `${time.getHours()}:${('0' + time.getMinutes()).slice(
        -2
      )} ${movieTitle}`;
      scheduleList.appendChild(li);

      li.addEventListener('click', function () {
        const allItems = scheduleList.getElementsByTagName('li');
        for (let item of allItems) {
          item.style.backgroundColor = '';
        }
        this.style.backgroundColor = '#d3d3d3';

        displaySelectedTime(this.textContent.trim());
      });
    }
  }

  function displaySelectedTime(time) {
    const selectedTimeElement = document.getElementById('selected-time');
    selectedTimeElement.textContent = `상영 시간 : ${time}`;
  }

  const items = document.querySelectorAll('#movie-list button');
  items.forEach((item) => {
    item.addEventListener('click', function () {
      items.forEach((el) => (el.style.backgroundColor = ''));
      this.style.backgroundColor = '#d3d3d3';

      const selectedMovie = this.textContent.trim();
      console.log(`영화: ${selectedMovie}`);

      displaySelectedMovie(selectedMovie);
    });

    function displaySelectedMovie(movie) {
      const selectedMovieElement = document.getElementById('selected-movie');
      selectedMovieElement.textContent = `영화 제목 : ${movie}`;
    }
  });

  const items1 = document.querySelectorAll('#theater-list button');
  items1.forEach((item1) => {
    item1.addEventListener('click', function () {
      items1.forEach((el) => (el.style.backgroundColor = ''));
      this.style.backgroundColor = '#d3d3d3';
    });
  });

  var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  var seatContainer = document.getElementById('seat-container');
  var selectedSeats = [];
  var selectedSeatCountElement = document.getElementById('selected-seat-count');
  var totalPriceElement = document.getElementById('total-price');
  const seatPrice = 10000;

  for (let i = 0; i < alpha.length; i++) {
    for (let j = 0; j < num.length; j++) {
      var button = document.createElement('button');
      button.textContent = alpha[i] + num[j];
      button.classList.add('seat-button');
      seatContainer.appendChild(button);

      button.addEventListener('click', function () {
        if (!selectedSeats.includes(this.textContent)) {
          selectedSeats.push(this.textContent);
          this.style.backgroundColor = '#d3d3d3';
        } else {
          selectedSeats = selectedSeats.filter(
            (seat) => seat !== this.textContent
          );
          this.style.backgroundColor = '';
        }

        selectedSeatCountElement.textContent = `선택된 좌석 : ${selectedSeats.length}`;

        const totalPrice = selectedSeats.length * seatPrice;
        totalPriceElement.textContent = `총 가격 : ${totalPrice}원`;
      });
    }
  }

  const selectButton = document.getElementById('select');
  const seatSection = document.getElementById('seat');
  seatSection.style.display = 'none';

  selectButton.addEventListener('click', function () {
    if (seatSection.style.display === 'none') {
      seatSection.style.display = 'block';
    } else {
      seatSection.style.display = 'none';
    }
  });
});
