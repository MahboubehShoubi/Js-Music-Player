const img = document.querySelector(".image-Artist");
const selectMusic = document.querySelectorAll(".select-music");
const artistName = document.querySelector(".Artist");
const artistAlbum = document.querySelector(".Album");
const musicTime = document.querySelector(".music-current-time");
const progress = document.querySelector(".music-bar");
const musicDuration = document.querySelector(".music-duration");
const previousBtn = document.querySelector(".previous");
const playBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".next");
const musicList = document.querySelector(".music-list");
const audioMusic = document.querySelector(".audio-music");
const themes = document.querySelectorAll(".item");
const musicPlayer = document.querySelector(".music-player");
const theme1 = document.querySelector(".item1");
const theme2 = document.querySelector(".item2");
const theme3 = document.querySelector(".item3");

//-----------------------------------------------------------------

const musics = [
    {
        path: "./music/Ali%20Sedighi%20-%20Ashoob.mp3" ,
        Artist: "Ali Sedighi",
        Album: "Ashoob" ,
        image: "img/Ali%20Sedighi%20-%20Ashoob.png" ,
    } ,
    {
        path: "music/Alireza%20Talischi%20-%20Ghaf%20(320).mp3" ,
        Artist: "Alireza Talischi" ,
        Album: "Ghaf"  ,
        image: "img/Alireza%20Talischi%20-%20Ghaf.png" ,
    } ,
    {
        path: "music/Arsha%20Radin%20-%20Delroba%20(320).mp3" ,
        Artist: "Arsha Radin" ,
        Album: "Delroba" ,
        image: "img/Arsha%20Radin%20-%20Delroba.png" ,
    } ,
    {
        path: "music/Arshiyas%20-%20Dokhtare%20Zibaye%20Sal.mp3" ,
        Artist: "Arshiyas" ,
        Album: "Dokhtare Zibaye Sal" ,
        image: "img/Arshiyas%20-%20Dokhtare%20Zibaye%20Sal.png" ,
    } ,
    {
        path: "./music/Ashvan%20-%20Ahange%20Shad.mp3" ,
        Artist: "Ashvan" ,
        Album: "Ahange Shad" ,
        image: "img/Ashvan%20-%20Ahange%20Shad.png" ,
    } ,
    {
        path: "music/EvanBand-Aljenab-128.mp3" ,
        Artist: "EvanBand" ,
        Album: "Aljenab" ,
        image: "img/EvanBand-Aljenab.png"  ,
    } ,
    {
        path : "music/Hojat%20Ashrafzadeh%20-%20Jane%20Mani%20To.mp3" ,
        Artist : "Hojat Ashrafzadeh" ,
        Album : "Jane Mani To"  ,
        image : "img/Hojat%20Ashrafzadeh%20-%20Jane%20Mani%20To.png" ,
    } ,
];

//----------------------background music Player----------------------------------------------

theme1.addEventListener("click" , (e) => {
    musicPlayer.classList.remove("item2" , "item3");
    musicPlayer.classList.toggle("item1");
} )

theme2.addEventListener("click" , (e) => {
    musicPlayer.classList.remove("item1" , "item3");
    musicPlayer.classList.toggle("item2");

});


theme3.addEventListener("click" , (e) => {
    musicPlayer.classList.remove("item1" , "item2");
    musicPlayer.classList.toggle("item3");
});

// ------------creat List Music in box List---------------------------------------
    const listMusic=musics.map(item => item.Album);
    console.log(listMusic);
    listMusic.forEach( item => {
        const li = document.createElement("li");
        li.classList.add("select-music");
        li.innerText = item;
        musicList.appendChild(li);

        li.addEventListener("click", (item, index) => {
            let n = li.innerText;
            console.log(n);
            for(let i=0 ; i<musics.length ; i++){
                if( n === musics[i].Album){
                    audioMusic.src=musics[i].path;
                    musicIndex = i;
                    loadMusic(musics[musicIndex]);
                    playMusic();
                }
                li.classList.toggle("change-text-color");
            }
        });
    })

//--------------------------load music ---------------------------
let musicIndex = 0;

function loadMusic(song){
    artistName.innerText=song.Artist;
    artistAlbum.innerText=song.Album;
    audioMusic.src=song.path;
}

loadMusic(musics[musicIndex]);

// -------------- Play Music and Pause ---------------------------------
let playState = false;

playBtn.addEventListener('click' ,  () => {
    if (playState){
        pauseMusic()
    } else {
        playMusic();
    }
} );

function playMusic(){
    playState=true;
    playBtn.classList.replace("icofont-ui-play" , "icofont-ui-pause");
    playBtn.setAttribute("title" , "play");
    img.src=musics[musicIndex].image;
    audioMusic.play();
}

function pauseMusic(){
    playState=false;
    playBtn.classList.replace("icofont-ui-pause" , "icofont-ui-play");
    playBtn.setAttribute("title" , "pause");
    audioMusic.pause();
}



// --------------------------Next & Prev Musics------------------------------------------------------

  function prevMusic() {
      musicIndex -- ;
      if (musicIndex < 0){
          musicIndex = musics.length - 1 ;
      }
      loadMusic(musics[musicIndex]);
      playMusic();
  }

function nextMusic() {
    musicIndex ++ ;
    if (musicIndex > musics.length - 1){
        musicIndex = 0;
    }
    loadMusic(musics[musicIndex]);
    playMusic();
}


//--------------------------------------------------------------

previousBtn.addEventListener( 'click' , prevMusic);
nextBtn.addEventListener('click' , nextMusic);
audioMusic.addEventListener("ended" , nextMusic);
