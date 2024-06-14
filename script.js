@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;800&family=Rubik:wght@300;400;500;600&display=swap');
/*
Fonts:
- Poppins: 300,400,600,700,800
-Rubik: 300,400,500,600
*/

:root{
    --primary-color:#ff6b6b;
    --secondary-color:#794afa;
    --secondary-dark-color:#453c5c;

    --wihte-color:#ffffff;
    --light-bg-color:#f2f3f5;
    --light-text-color:#7c899a;
    --border-color:#e5e8ec;
    --dark-color:#0a021c;
    
    --font-small:13px;
    --font-smaller:11px;

    --percent100:100%;
    --percent50:50%;

    --fw3:300;
    --fw5:500;
    --fw6:600;
    --fw7:700;
    --fw8:800;

    --trans-background-color: background-color .3s, color .3s;
    --trans-background: background-color .3s;
    --trans-color:  color .3s;
}

// copy menu for mobile
/*0.1. HEADER -------------------------------
*  e. Responsive MENU - Off Canvas
---------------------------*/
.site-off {
    position: fixed;
    width: 320px;
    height: var(--percent100);
    background-color: var(--wihte-color); 
    overflow-y: auto;
    z-index: 1000;
    transform: translateX(-100%);
    visibility: hidden;
    transition: transform .4s, visibility .4s;
    will-change: transform, visibility;
}
.showmenu .site-off {
    transform: translateX(0);
    visibility: visible;
    transform: transform .4s 0s, visibility 0s 0s;
