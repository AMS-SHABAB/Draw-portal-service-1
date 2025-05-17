 const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('show');
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
function toggleDetails(button) {
  const details = button.closest('.card').querySelector('.details');
  const seeDetailsBtn = button;

  if (details.style.display === 'none' || details.style.display === '') {
    details.style.display = 'block';
    seeDetailsBtn.innerText = '\u09AC\u09A8\u09CD\u09A7\u0020\u0995\u09B0\u09C1\u09A8'; // বন্ধ করুন
  } else {
    details.style.display = 'none';
    seeDetailsBtn.innerText = '\u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4\u0020\u09A6\u09C7\u0996\u09C1\u09A8'; // বিস্তারিত দেখুন
  }
}

   <!--calculate-->

function showCalculator(el) {

  const style = el.dataset.style;

  const price = el.dataset.price;

  const category = el.dataset.category;

  document.getElementById('modal-style').textContent = style;

  document.getElementById('modal-style').dataset.price = price;

  document.getElementById('modal-title').textContent = `${style} Calculator`;

  // Reset form

  document.getElementById('length').value = '';

  document.getElementById('width').value = '';

  document.getElementById('area').textContent = '0';

  document.getElementById('price').textContent = 'tk0';

  document.getElementById('outside').checked = false;

      document.getElementById('calculator-modal').style.display = 'flex';

    }
 
  function calculatePrice() {
      const length = parseFloat(document.getElementById('length').value) || 0;
      const width = parseFloat(document.getElementById('width').value) || 0;
      const area = length * width;
      document.getElementById('area').textContent = area.toFixed(2);

      const basePrice = document.getElementById('modal-style').dataset.price;
      const [minStyle, maxStyle] = basePrice.includes('-') ? basePrice.split('-').map(Number) : [Number(basePrice), Number(basePrice)];
      const productPrice = parseFloat(document.getElementById('product').value) || 0;
      const isOutside = document.getElementById('outside').checked;

      let minTotal = (minStyle + productPrice) * area;
      let maxTotal = (maxStyle + productPrice) * area;

      if (isOutside) {
        minTotal *= 1.2;
        maxTotal *= 1.2;
      }

      const finalPrice = (minStyle === maxStyle)
        ? `tk ${minTotal.toFixed(0)}`
        : `tk ${minTotal.toFixed(0)} - tk ${maxTotal.toFixed(0)}`;

      document.getElementById('price').textContent = finalPrice;
    }

    function closeCalculator() {
      document.getElementById('calculator-modal').style.display = 'none';
    }
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('popup').style.display = 'flex';
    }, 3000);
  });
  
  const menu=document.getElementById("floatingMenu"),menuIcon=document.getElementById("menuIcon");function toggleMenu(){menu.classList.contains("open")?(menu.classList.remove("open"),menu.classList.add("closing"),menuIcon.innerHTML='<path d="M12 5v14m7-7H5" />',setTimeout(()=>{menu.classList.remove("closing")},400)):(menu.classList.add("open"),menuIcon.innerHTML='<path d="M18 6 6 18M6 6l12 12" />')}function toggleText(e){const t=e.querySelector("span")?.textContent.trim();if("Book"===t){const e=new Date().getHours();if(e<9||e>=18)return void alert("Booking is only available between 9 AM and 6 PM.")}document.querySelectorAll(".action-btn").forEach(t=>{t!==e&&t.classList.remove("show-text")}),e.classList.toggle("show-text")}
