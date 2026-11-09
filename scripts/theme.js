function theme_switcher()
{
    const root = document.documentElement;
    const status = root.getAttribute("data-bs-theme");
    let next = "light";
    if (status == "light" || status == "")
    {
        next = "dark";
    }
    else
    {
        next = "light";
    }

    root.setAttribute("data-bs-theme" ,next);
    localStorage.setItem("theme", next);
}

const saved = localStorage.getItem("theme");
const root = document.documentElement;

if (saved)
{
    root.setAttribute("data-bs-theme", saved);
}
