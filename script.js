document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('networkCanvas');
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const themeToggle = document.getElementById('themeToggle');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.innerHTML = isOpen ? '<span class="material-symbols-outlined text-2xl">close</span>' : '<span class="material-symbols-outlined text-2xl">menu</span>';
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<span class="material-symbols-outlined text-2xl">menu</span>';
      });
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const root = document.documentElement;
      root.classList.toggle('dark');
      const isDark = root.classList.contains('dark');
      themeToggle.innerHTML = `<span class="material-symbols-outlined text-2xl">${isDark ? 'dark_mode' : 'light_mode'}</span>`;
    });
  }

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let nodes = [];

  const primaryColor = '#d2bbff';
  const secondaryColor = '#4cd7f6';

  function resize() {
    const hero = document.getElementById('home');
    width = canvas.width = window.innerWidth;
    height = canvas.height = hero ? hero.offsetHeight : window.innerHeight;
  }

  class Node {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? primaryColor : secondaryColor;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function init() {
    resize();
    const density = window.innerWidth < 768 ? 24 : 60;
    nodes = Array.from({ length: Math.max(18, Math.floor((width * height) / density)) }, () => new Node());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          const opacity = 1 - dist / 150;
          ctx.strokeStyle = `rgba(210, 187, 255, ${opacity * 0.32})`;
          ctx.stroke();
        }
      }
    }

    nodes.forEach((node) => {
      node.update();
      node.draw();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', init);
  init();
  animate();
});
