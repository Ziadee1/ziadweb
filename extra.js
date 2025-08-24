document.addEventListener("DOMContentLoaded", () => {
  // زر القائمة العائم
  const btn = document.createElement("div");
  btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  btn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: var(--main-color);
    color: #fff;
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    z-index: 9999;
  `;
  btn.classList.add("menu-btn");

  // القائمة
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.innerHTML = `
    <a href="#about" class="menu-link"><i class="fa-solid fa-user"></i> من أنا</a>
    <a href="#skills" class="menu-link"><i class="fa-solid fa-lightbulb"></i> مهاراتي</a>
    <a href="#projects" class="menu-link"><i class="fa-solid fa-code"></i> مشاريعي</a>
    <a href="#certificates" class="menu-link"><i class="fa-solid fa-certificate"></i> شهاداتي</a>
    <a href="#achievements" class="menu-link"><i class="fa-solid fa-trophy"></i> إنجازاتي</a>
    <a href="#contact" class="menu-link"><i class="fa-solid fa-envelope"></i> تواصل</a>
  `;

  // ستايل داخلي
  const style = document.createElement("style");
  style.innerHTML = `
    .menu-btn:hover {
      background: var(--second-bg-color);
      color: var(--main-color);
    }
    .menu {
      position: fixed;
      bottom: 80px;
      right: 20px;
      background: var(--bg-color);
      padding: 12px;
      border-radius: 12px;
      display: none;
      flex-direction: column;
      gap: 10px;
      box-shadow: 0 0 15px rgba(0,0,0,0.4);
      z-index: 9999;
    }
    .menu-link {
      background: var(--second-bg-color);
      color: var(--text-color);
      text-decoration: none;
      font-size: 15px;
      opacity: 0;
      transform: translateX(30px);
      transition: all 0.4s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 8px;
    }
    .menu-link i {
      color: var(--main-color);
      font-size: 14px;
    }
    .menu-link:hover {
      background: var(--main-color);
      color: #fff;
    }
    .menu-link:hover i {
      color: #fff;
    }
    .menu-link.show {
      opacity: 1;
      transform: translateX(0);
    }
  `;
  document.head.appendChild(style);

  // فتح/قفل القائمة
  let open = false;
  const toggleMenu = () => {
    const icon = btn.querySelector("i");
    if (!open) {
      menu.style.display = "flex";
      const links = menu.querySelectorAll(".menu-link");
      links.forEach((link, index) => {
        setTimeout(() => link.classList.add("show"), index * 150);
      });
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      open = true;
    } else {
      const links = menu.querySelectorAll(".menu-link");
      links.forEach((link) => link.classList.remove("show"));
      setTimeout(() => {
        menu.style.display = "none";
      }, 400);
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      open = false;
    }
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // منع تضارب الكلك مع الدوكمنت
    toggleMenu();
  });

  // قفل المنيو عند الضغط على أي زر
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-link") || e.target.closest(".menu-link")) {
      toggleMenu();
    }
  });

  // قفل المنيو عند الضغط في أي مكان فاضي
  document.addEventListener("click", (e) => {
    if (open && !menu.contains(e.target) && !btn.contains(e.target)) {
      toggleMenu();
    }
  });

  document.body.appendChild(btn);
  document.body.appendChild(menu);
});
