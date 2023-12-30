console.log("hello")


setTimeout(() => {
    document.getElementById("landingPage").style.display = "none";
}, 2000);
async function getImg(n) {
    for (let i = 0; i < n; i++) {
        const myPhoto = await fetch("https://source.unsplash.com/random/photos");

        let url = myPhoto.url;


        let html = `
       
        <div class="rendom-users ">
            <div class="user-left">
                <div class="user-name">
                    <div class="profile-pic">

                        <img src="profile2.jpeg"alt="">
                    </div>
                    <span class="name">my_name_is_user</span>
                </div>
            </div>
            <div class="user-right">
                <div class="dot">
                    <img src="dots.png" alt="dot">
                </div>
         </div>
          
        </div>
        <div class="post">
        <i id="heart"class="ri-heart-fill"></i>
            <img id="postPhoto" src="${url}" alt="">
        </div>
        <div class="detail-con">
            <div class="left-con">
                <i id="bheart" class="ri-heart-fill"></i>
                <i class="ri-chat-3-line"></i>
                <i class="ri-send-plane-fill"></i>
            </div>
            <div class="right-con">
                <i class="ri-bookmark-line"></i>
            </div>
        </div>
       `;
     

        document.querySelector(".scroll-media").innerHTML = document.querySelector(".scroll-media").innerHTML + html;

        var post = document.querySelector("#postPhoto");
        var heart = document.querySelector("#heart");
        post.addEventListener("click", function showHeart() {
        heart.style.transform = "translate(-50%,-50%) scale(1)";
        heart.style.opacity = 0.8;
        document.querySelector("#bheart").style.color = "red";
        setTimeout(() => {
        heart.style.opacity = 0;
        }, 1000);
        setTimeout(() => {
        heart.style.transform = "translate(-50%,-50%) scale(0)";
        }, 2000);
        })


      
    }
};

window.addEventListener("scroll", function (e) {
    let { scrollHeight, scrollTop, clientHeight } = e.target.documentElement;
    if (scrollTop + clientHeight + 1 >= scrollHeight) {
        getImg(6);
    }
});
getImg(5)








let storyCon = document.querySelector(".storiesContainer");
async function storyFun(n) {
    for (let i = 0; i < n; i++) {
        const myPhoto = await fetch("https://source.unsplash.com/random/photos");

        let url = myPhoto.url;
        let stoHTML = ` <div class="story"><img class="stoImg" src="${url}"></div>`;

        storyCon.innerHTML = storyCon.innerHTML + stoHTML;
    }
}

storyFun(6)
storyCon.addEventListener('click', function (e) {
    console.log("hello")
    async function bgImg() {
        
            const myPhoto = await fetch("https://source.unsplash.com/random/photos");
    
            let url = myPhoto.url;
            let stoHTML = ` <div class="story"><img class="stoImg" src="${url}"></div>`;
    
            storyCon.innerHTML = storyCon.innerHTML + stoHTML;
    }
   
    if (e.target.classList.contains('stoImg')) {
        document.querySelector('.story').style.display = 'none';
        document.querySelector('.scroll-media').style.display = 'none';
        document.querySelector('#fullheight').style.display = 'block';
        document.querySelector('#fullheight').style.backgroundImage = 'url(post.jpeg)'
    }

    setTimeout(() => {
        document.querySelector('.story').style.display = 'inline-block';
        document.querySelector('#fullheight').style.display = 'none';
        document.querySelector('.scroll-media').style.display = 'block';
    }, 2000);
})

// async function myFun() {

//      const myPhoto = await fetch("https://source.unsplash.com/random/photos");

//      let link = myPhoto.url;
    
     
//     }
    
