//صور الاولات انمشن ي تسو
const textElement = document.querySelector('.animated-text');
const text = textElement.textContent;
textElement.textContent = '';

const words = text.split(' ');

words.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word + ' '; // نضيف مسافة بين الكلمات
    span.style.animationDelay = `${index * 0.3}s`; // كل كلمة تظهر بعد الأخرى
    textElement.appendChild(span);
});






// ملف: main.js

// تهيئة سلايدر الأزياء التقليدية
const swiperFashion = new Swiper('.fashion-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false
    },
    breakpoints: {
        600: { slidesPerView: 1 },
        900: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    }
});





const audio = document.getElementById("heritageAudio");
const audioControl = document.getElementById("audioControl");

// الحالة الابتدائية: الصوت مطفّي
let isPlaying = false;

// تأكيد إن الصوت مطفّي عند فتح الموقع
window.addEventListener("load", () => {
  audio.pause();
  audio.currentTime = 0;
  audioControl.classList.remove("fa-volume-high");
  audioControl.classList.add("fa-volume-xmark");
});

// التحكم في التشغيل
audioControl.addEventListener("click", () => {
  if (!isPlaying) {
    // تشغيل الصوت
    audio.play();
    audioControl.classList.remove("fa-volume-xmark");
    audioControl.classList.add("fa-volume-high");
    isPlaying = true;
  } else {
    // إيقاف الصوت
    audio.pause();
    audio.currentTime = 0;
    audioControl.classList.remove("fa-volume-high");
    audioControl.classList.add("fa-volume-xmark");
    isPlaying = false;
  }
});






// ===== LocalStorage =====
let opinions = JSON.parse(localStorage.getItem("opinions")) || [];

const form = document.getElementById("footerForm");
const emailInput = document.getElementById("emailInput");
const opinionInput = document.getElementById("opinionInput");
const showBtn = document.getElementById("showOpinions");
const container = document.getElementById("opinionsContainer");
const list = document.getElementById("opinionsList");
const searchInput = document.getElementById("searchInput");

let editIndex = null;

/* حفظ / تعديل الرأي */
form.addEventListener("submit", e => {
  e.preventDefault();

  if (editIndex === null) {
    // إضافة رأي جديد
    opinions.push({
      email: emailInput.value,
      text: opinionInput.value
    });
  } else {
    // تعديل رأي
    opinions[editIndex].email = emailInput.value;
    opinions[editIndex].text = opinionInput.value;
    editIndex = null;
  }

  localStorage.setItem("opinions", JSON.stringify(opinions));
  form.reset();
  renderOpinions();
});

/* إظهار الآراء */
showBtn.addEventListener("click", () => {
  container.style.display = "block";
  renderOpinions();
});

/* البحث */
searchInput.addEventListener("input", renderOpinions);

/* عرض الآراء */
function renderOpinions() {
  const q = searchInput.value.toLowerCase();
  list.innerHTML = "";

  opinions
    .filter(o =>
      o.email.toLowerCase().includes(q) ||
      o.text.toLowerCase().includes(q)
    )
    .forEach((o, index) => {
      list.innerHTML += `
        <div class="opinion-box">
          <strong>${o.email}</strong>
          <p>${o.text}</p>

          <div class="opinion-actions">
            <button onclick="editOpinion(${index})">تعديل</button>
            <button onclick="deleteOpinion(${index})">حذف</button>
          </div>
        </div>
      `;
    });
}

/* تعديل رأي */
function editOpinion(index) {
  emailInput.value = opinions[index].email;
  opinionInput.value = opinions[index].text;
  editIndex = index;
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

/* حذف رأي */
function deleteOpinion(index) {
  if (confirm("هل أنت متأكد من حذف الرأي؟")) {
    opinions.splice(index, 1);
    localStorage.setItem("opinions", JSON.stringify(opinions));
    renderOpinions();
  }
}


const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});




