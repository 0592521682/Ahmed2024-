let point = document.querySelectorAll('ul li');
for (let i = 0; i < point.length; i++) {
    point[i].onclick = function () {
        document.querySelector('li.sama').classList.remove('sama');
        point[i].classList.add('sama')
        //    let tab = point[i].getAttribute('data-b');
        let tab = point[i].dataset.b;
        document.querySelector('div.active').classList.remove('active');
        document.querySelector(tab).classList.add('active')

    }
}

let model = document.querySelector('.model');
let close = document.querySelector('.model-close');

setTimeout(() => {
    model.classList.add('show')
}, 1000);

close.onclick = () => {
    // window.location.href= 'https://www.youtube.com'
    model.classList.remove('show');
}


let form = document.querySelector('form');
let req_input = document.querySelectorAll('.requried')
form.onsubmit = (e) => {
    for (let i = 0; i < req_input.length; i++) {
        if (req_input[i].value.length == 0) {
            e.preventDefault();
            req_input[i].style.borderColor = 'red';
        } else {
            req_input[i].style.borderColor = '#a4a4a4'
        }
    }
}
// الحقل الكتابة غير حدث الارسال
for (let i = 0; i < req_input.length; i++) {
    req_input[i].onkeyup = function () {
        if (req_input[i].value.length == 0) {
            req_input[i].style.borderColor = 'red';
        } else {
            req_input[i].style.borderColor = '#a4a4a4'
        }
    }
}


document.querySelectorAll('.scale-faster ul li').forEach(function (li) {
    li.addEventListener('click', function () {
        let slideImg = this.getAttribute('data-image'); // استخدام getAttribute بدلاً من data
        let slideNo = this.getAttribute('data-slide');

        // إزالة الصف النشط من جميع العناصر
        document.querySelectorAll('.scale-faster ul li').forEach(function (item) {
            item.classList.remove('active');
        });

        // إضافة الصف النشط للعنصر الذي تم النقر عليه
        this.classList.add('active');

        // تغيير الخلفية
        if (slideImg) {
            document.querySelector('.scale-faster').style.backgroundImage = 'url(' + slideImg + ')';
        }

        // إخفاء جميع العناصر
        document.querySelectorAll('.scale-faster .content .item').forEach(function (item) {
            item.style.display = 'none';
        });

        // عرض العنصر المطلوب فقط
        var targetItem = document.querySelector('.scale-faster .content .item#slide-' + slideNo);
        if (targetItem) {
            targetItem.style.display = 'block';
        }
    });
});
let top_btn = document.querySelector('.back-up');
window.onscroll = () => {
    if (window.pageYOffset > 300) {
        top_btn.classList.add('active')
    } else {
        top_btn.classList.remove('active')
    }
}
top_btn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

let btn_hide = document.querySelector('#hide')
let btn_show = document.querySelector('#show')
let btn_both = document.querySelector('#both')
let p = document.querySelector('p')

btn_hide.onclick = function () {
    p.style.display = 'none'
}

btn_show.onclick = function () {
    p.style.display = 'block'
}

btn_both.onclick = function () {
    if (btn_both.innerHTML == 'Hide Text') {
        p.style.display = 'none'
        btn_both.innerHTML = 'show Text'
    } else {
        p.style.display = 'block'
        btn_both.innerHTML = 'Hide Text'
    }
}
window.addEventListener('load', (event) => {
    let clock;
  
    // Grab the current date
    let currentDate = new Date();
  
    // Target future date/24 hour time/Timezone
    let targetDate = moment.tz("2024-10-30 23:59", "Australia/Sydney");
  
    // Calculate the difference in seconds between the future and current date
    let diff = targetDate / 1000 - currentDate.getTime() / 1000;
  
    if (diff <= 0) {
      // If remaining countdown is 0
      clock = (".clock").FlipClock(0, {
        clockFace: "DailyCounter",
        countdown: true,
        autostart: false
      });
      console.log("Date has already passed!")
      
    } else {
      // Run countdown timer
      clock = $(".clock").FlipClock(diff, {
        clockFace: "DailyCounter",
        countdown: true,
        callbacks: {
          stop: function() {
            console.log("Timer has ended!")
          }
        }
      });
      
      // Check when timer reaches 0, then stop at 0
      setTimeout(function() {
        checktime();
      }, 1000);
      
      function checktime() {
        t = clock.getTime();
        if (t <= 0) {
          clock.setTime(0);
        }
        setTimeout(function() {
          checktime();
        }, 1000);
      }
    }
  });
  