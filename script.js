// Tailwind configuration moved from inline into external file
window.tailwind = window.tailwind || {};
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-container": "#03b5d3",
        "on-error": "#690005",
        "inverse-primary": "#732ee4",
        "on-tertiary": "#620040",
        "secondary-fixed-dim": "#4cd7f6",
        "on-background": "#dae2fd",
        "primary": "#d2bbff",
        "inverse-on-surface": "#283044",
        "outline": "#958da1",
        "tertiary-container": "#ae397b",
        "tertiary": "#ffafd3",
        "primary-fixed-dim": "#d2bbff",
        "tertiary-fixed": "#ffd8e7",
        "outline-variant": "#4a4455",
        "surface-tint": "#d2bbff",
        "on-secondary-fixed": "#001f26",
        "surface-bright": "#31394d",
        "secondary-fixed": "#acedff",
        "on-primary": "#3f008e",
        "error": "#ffb4ab",
        "on-primary-fixed": "#25005a",
        "on-tertiary-fixed-variant": "#85145a",
        "on-primary-container": "#ede0ff",
        "on-primary-fixed-variant": "#5a00c6",
        "surface-container-low": "#131b2e",
        "on-secondary": "#003640",
        "surface-container-high": "#222a3d",
        "inverse-surface": "#dae2fd",
        "error-container": "#93000a",
        "primary-container": "#7c3aed",
        "surface-dim": "#0b1326",
        "on-error-container": "#ffdad6",
        "surface-container-highest": "#2d3449",
        "tertiary-fixed-dim": "#ffafd3",
        "surface": "#0b1326",
        "primary-fixed": "#eaddff",
        "surface-container-lowest": "#060e20",
        "on-surface-variant": "#ccc3d8",
        "surface-container": "#171f33",
        "on-secondary-fixed-variant": "#004e5c",
        "secondary": "#4cd7f6",
        "on-secondary-container": "#00424e",
        "on-surface": "#dae2fd",
        "on-tertiary-container": "#ffdce9",
        "surface-variant": "#2d3449",
        "background": "#0b1326",
        "on-tertiary-fixed": "#3d0026"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "stack-lg": "80px",
        "margin-desktop": "64px",
        "stack-md": "32px",
        "gutter": "24px",
        "stack-sm": "12px",
        "margin-mobile": "20px",
        "unit": "8px",
        "container-max": "1280px"
      },
      fontFamily: {
        "display-lg-mobile": ["Montserrat"],
        "label-md": ["Inter"],
        "body-md": ["Inter"],
        "headline-lg": ["Montserrat"],
        "display-lg": ["Montserrat"],
        "body-lg": ["Inter"],
        code: ["Inter"],
        "headline-md": ["Montserrat"]
      },
      fontSize: {
        "display-lg-mobile": ["40px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "800" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "700" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        code: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }]
      }
    }
  }
};

// Canvas network animation moved here from inline script
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('networkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let nodes = [];

  const primaryColor = '#d2bbff';
  const secondaryColor = '#4cd7f6';

  function resize() {
    const section = document.querySelector('section');
    width = canvas.width = window.innerWidth;
    height = canvas.height = section ? section.offsetHeight : window.innerHeight;
  }

  class Node {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
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

      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
    }
  }

  function init() {
    resize();
    nodes = [];
    const numNodes = Math.floor((width * height) / 15000);
    for (let i = 0; i < numNodes; i++) nodes.push(new Node());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    ctx.lineWidth = 0.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y -nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          const opacity = 1 - dist / 150;
          ctx.strokeStyle = `rgba(210, 187, 255, ${opacity * 0.3})`;
          ctx.stroke();
        }
      }
    }

    nodes.forEach(node => { node.update(); node.draw(); });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', init);
  init();
  animate();
});
