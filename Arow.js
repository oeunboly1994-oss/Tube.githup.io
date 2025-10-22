
const array =[
    {"name":"HOME","id":'#'},
    {"name":"MENU","id":'#menu'},
    {"name":"OUR STORE","id":'#store'},
    {"name":"OUR STORY","id":'#'},
];
document.getElementById("bar").onclick=function(){
var txt="";
array.forEach((el,i) => {
    txt += `
         <li><a href="${el['id']}" class='remove'>${el['name']}</a></li>
    `;
    console.log(el['name'])
});
document.querySelector('.tropbar').innerHTML= `<ul> ${txt} </ul>`;
document.querySelector('.trop').style.display="flex";

document.querySelectorAll('.remove').forEach(e => {
    e.onclick=function(){
        console.log("jkj")
    document.querySelector('.trop').style.display="none";
    };
});
}

const arr2=[
    {"img":"store1.jpg","id":"#img1"},
    {"img":"store2.jpg","id":"#img2"},
    {"img":"store3.jpg","id":"#img3"},
    {"img":"store4.jpg","id":"#mg4"},
    {"img":"store5.jpg","id":"#img5"},
    {"img":"store6.jpg","id":"#img6"},
    {"img":"store7.jpg","id":"#img7"},
    {"img":"store8.jpg","id":"#img8"},
    {"img":"store9.jpg","id":"#img9"},
    {"img":"store10.jpg","id":"#img10"}
];
var index;
getImages();
function getImages(){
    let txt="";
    arr2.forEach((el,i) => {
        txt += `
        <a class='getImg' >
            <img src="${el['img']}" >
        </a>
            `
    });
    document.querySelector('.slideStore').innerHTML=txt;
    document.querySelector('.mapMini .slideStore').innerHTML=txt;

    document.querySelectorAll('.map .getImg img').forEach((e,i)=> {
        e.onclick=function(){
          arr2.img = arr2[i].img;
          index = i;
          let txt2="";
          arr2[index].img= arr2.img;
            arr2.forEach((al,i) => {
              txt2+= `              
              <a href="${al['id']}" class='remove'>
                <div class="size" >
                    <img src="${arr2.img}">
                </div>
              </a>
              `
            });
            console.log(arr2.img)
            document.querySelector('.showImg').innerHTML=txt2 ;
            document.querySelector('.showImg').style.display="flex";
            document.querySelectorAll('.remove').forEach(e => {
                e.onclick=function(){
                document.querySelector('.showImg').style.display="none";
                };
            });

        };
    });
        
    }
