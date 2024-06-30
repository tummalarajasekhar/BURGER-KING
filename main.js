const hamberger=document.getElementById('hamberger');
const navMenu=document.getElementById('nav-menu');
const navClose=document.getElementById('nav-close');
const navLink=document.querySelectorAll('.nav-link');



// here we are writing the code to remove the hidden element present in the class nav-menu, which helps to hide or display the required menu
navLink.forEach(link=>
    link.addEventListener("click",()=>{
        navMenu.classList.add("hidden")
    })
)
hamberger.addEventListener("click",()=>{
    navMenu.classList.remove("hidden")
})
navClose.addEventListener("click",()=>{
    navMenu.classList.add("hidden")
})
/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/

// here we are writing the code to remove the active function and add the active function when it is clicked on the tabs(hover effect and active effect is given in css)

const tabs=document.querySelectorAll(".tabs_wrap ul li");

const all=document.querySelectorAll(".item_wrap");// for all
const foods=document.querySelectorAll(".food");
const snacks=document.querySelectorAll(".snack");
const beverages=document.querySelectorAll(".beverage");
tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        tabs.forEach(tab=>{
            tab.classList.remove("active")
        })
        tab.classList.add('active')

        const tabval=tab.getAttribute('data-tabs')
        console.log(tabval)

        all.forEach(item=>{
            item.style.display='none'
        })
        
        if(tabval=='food'){
            foods.forEach(item=>{
                item.style.display='block'
            })

        }
        else if(tabval=='snack'){
            snacks.forEach(item=>{
                item.style.display='block'
            })

        }
        else if(tabval=='beverage'){
            beverages.forEach(item=>{
                item.style.display='block'
            })

        }
        else{
            all.forEach(item=>{
                item.style.display='block'
            })

        }

    }
)
})

// show scroll up
const scrollUp=()=>{
    const scrollUPbtn=document.getElementById("scroll-up");
    if(this.scrollY>=250){
        scrollUPbtn.classList.remove("-bottom-1/2");
        scrollUPbtn.classList.add("bottom-4");
    }
    else{
        
        scrollUPbtn.classList.add("-bottom-1/2");
        scrollUPbtn.classList.remove("bottom-4");
        
        

    }
}   
window.addEventListener('scroll',scrollUp)

// change border color while scroll up according to the scroll up function

const border_c=()=>{
    const header=document.getElementById("header");
    if(this.scrollY>=50){
        
        header.classList.add("border-b","border-secondaryColor");
    }
    else{
        
        
        header.classList.remove("border-b","border-secondaryColor");
        
        

    }
}   
window.addEventListener('scroll',border_c)


// dark light theme
const html=document.querySelector("html");
const themeBtn=document.getElementById("theme-toggle");

const darkmode=()=>{
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line","ri-sun-line")
    localStorage.setItem("mode","dark"); 

}

const lightmode=()=>{
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line","ri-moon-line")
    localStorage.setItem("mode","light"); 

}

if(localStorage.getItem("mode")=="dark"){
    darkmode();
}
else {
    lightmode();
}


themeBtn.addEventListener('click',(e)=>{
    if(localStorage.getItem("mode")=="light"){
        darkmode();
    }
    else{
        lightmode();
    }
})
 


// scroll section active link

const activeLink=()=>{
    const sections=document.querySelectorAll("section");
    const navLinks=document.querySelectorAll(".nav-link");
    let current='home';
    sections.forEach ((section)=>{
        const sectionTop=section.offsetTop;



        if(this.scrollY>=sectionTop-60){
            current=section.getAttribute('id')
        }

    })
    
    navLinks.forEach(item =>{
        item.classList.remove("text-secondaryColor");
        if(item.href.includes(current)){
            item.classList.add("text-secondaryColor")
        }
    })

}
window.addEventListener('scroll',activeLink)

// scroll reveal Animation
const sr=ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:400

})

sr.reveal(".home_image")
 
sr.reveal(".home_content",{origin:"bottom"});
sr.reveal(".catagory_card",{interval:300})
sr.reveal(".promo_card-1",{origin:"left"});
sr.reveal(".promo_card-2",{origin:"right"});
sr.reveal(".about_image",{origin:"bottom"});
sr.reveal(".about_content",{origin:"top"});
sr.reveal(".menu_items",{origin:"left"});
sr.reveal(".customer_review",{origin:"right"});
sr.reveal("footer")
 