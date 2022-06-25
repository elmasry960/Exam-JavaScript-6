"use strict"

let vlidateRegex


////////////////////////Show NavLink
let widthNav = $(".sidnav").outerWidth(true);
$(".sidnav").css( 'left', "widthNav");

$(".btn-open-minu").click(function (e) { 
  if( $("nav").css("left")  != "0px" ){
      $("nav").animate({"left": 0} , 500)
      $(".nav-item a").show(500)
      $(".btn-open-minu").html(`<i class="fa-solid fa-align-justify fs-4"></i>`);
      $(".nav-item li").hide(1000)
      
  }
  else{
      $(".btn-open").animate({ "left": 0} , 1500)
      $("nav").animate({"left": widthNav} , 500)
      $(".btn-open-minu").html(`<i class="fa fa-align-justify fa-times fs-4"></i>`);
      $(".nav-item li").show(1000)
  }
});

///////////////////////////// API
  //https://api.themoviedb.org/3/search/movie/latest?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2tLM97derUVGrow9ZyG36bPI5oR3zXO43EqTFSGtmob4jmDbn6My9soD0&query&query=Jack+Reacher

/**************ApiNowPlaying****************/

allApi()
async function allApi(){
  $(".sidnav span").click(async function (e){
   let catogry = $(this).attr("id")
    let allApi = await fetch(`https://api.themoviedb.org/3/movie/${catogry}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
        allApi = await allApi.json()
        let results = allApi.results
        displey(results)
         search(results)
  })
}
/**************ApiNowPlaying****************/

apiNowPlaying()
async function apiNowPlaying(){
    let allApi = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
        allApi = await allApi.json()
        let results = allApi.results
        displey(results)
         search(results)
}

/**************ApiTrending****************/

let trending = document.getElementById("trending");
trending.addEventListener("click" , apiTrending )
async function apiTrending(){
  let getApi = await fetch("https://api.themoviedb.org/3/search/trending?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2tLM97derUVGrow9ZyG36bPI5oR3zXO43EqTFSGtmob4jmDbn6My9soD0&query&query=Doctor+Strange+in+the+Multiverse+of+Madness")
  getApi = await getApi.json()
  let results = getApi.results
  displey(results)
  search(results)
}

/**************Search****************/

/////////////////////////////////

  

function search(results){
  
  let term;
  let test = results
  let searchValue = document.getElementById("search")
  searchValue.addEventListener("keyup" , function(e){
    term = e.target.value
    console.log(term)
    for(let i=0 ; i<test.length ; i++){
      // console.log(results[i].original_title)
      if(test[i].original_title.includes(term)){
        displey(test)
        console.log(test[i])
      }
    }
  })

}

/**************Search API****************/

let valueSearchApi = document.getElementById("valueSearchApi")
valueSearchApi.addEventListener("keyup" , function(e){
  let value = e.target.value
   SearchApi(value)
})
async function SearchApi(term){
  if(term == ''){
    apiNowPlaying()
  }
  else{
    let api = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2tLM97derUVGrow9ZyG36bPI5oR3zXO43EqTFSGtmob4jmDbn6My9soD0&query&query=${term}`)
    api = await api.json()
    let results = api.results
    displey(results)
    }
}

/**************Display****************/

function displey(results){
  let temp = ''
  for(let i=0 ; i<results.length ; i++){
    temp+= `<div class="col-md-4 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
          <div class="item position-relative overflow-hidden">
            <div class="poster">
              <img src="https://image.tmdb.org/t/p/w500/${results[i].poster_path}" class="w-100 text-center" alt="">
              <div class="layer position-absolute p-3 top-100 end-0 bottom-0 start-0 d-flex align-items-center overflow-hidden">
                <div class="item p-4 text-center">
                  <h2>${results[i].original_title == undefined?results[i].name:results[i].original_title}</h2>
                  <p>${results[i].overview}</p>
                  <p><i class="fa-solid fa-star fs-5"></i> ${results[i].vote_average}<span class="text-white-50">/10</span></p>
                  <p>${results[i].first_air_date == undefined?results[i].release_date:results[i].first_air_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>`
  }
  AOS.init();
  document.getElementById("dispalyContent").innerHTML = temp

}

let inputName = document.querySelector(".name");
let inputEmail = document.querySelector(".email");
let inputPhone = document.querySelector(".phone");
let inputAge = document.querySelector(".age");
let inputPassword = document.querySelector(".password");
let inputRepassword = document.querySelector(".inputValidRepassword");

//*****************Name***********************/
inputName.addEventListener("keyup" , function(e){
  let ralglarName = /^[A-Z-a-z]{3,}$/m;
      console.log(ralglarName.test("Name"+e.target.value))

      let valueRaglerName = ralglarName.test(e.target.value)

      if(valueRaglerName == true){
        $(".alert-name").hide(500)
      }
      else(
        $(".alert-name").show(500)
      )
})


//*****************Email***********************/

inputEmail.addEventListener("keyup" , function(e){

  let ralglarEmail = /^(.*)(@)(.*)(.[a-z]{2,3})$/m;
      console.log(ralglarEmail.test("Name"+e.target.value))

      let valueRaglerEmail = ralglarEmail.test(e.target.value)

      if(valueRaglerEmail == true){
        $(".alert-email").hide(500)
      }
      else(
        $(".alert-email").show(500)
      )
})


//*****************Phone***********************/

inputPhone.addEventListener("keyup" , function(e){

  let ralglarPhone = /^01[0-2]\d{1,8}$/;
      console.log(ralglarPhone.test("Name"+e.target.value))

      let valueRaglerPhone = ralglarPhone.test(e.target.value)

      if(valueRaglerPhone == true){
        $(".alert-phone").hide(500)
      }
      else(
        $(".alert-phone").show(500)
      )
})


//*****************Age***********************/

inputAge.addEventListener("keyup" , function(e){

  let ralglarAge = /^\S[0-9]{1,2}$/;
      console.log(ralglarAge.test("Name"+e.target.value))

      let valueRaglerAge = ralglarAge.test(e.target.value)

      if(valueRaglerAge == true){
        $(".alert-age").hide(500)
      }
      else(
        $(".alert-age").show(500)
      )
})


//*****************Password***********************/

inputPassword.addEventListener("keyup" , function(e){

  let ralglarPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|\_])(?=\S+$).{8,}$/
      console.log(ralglarPassword.test("Name"+e.target.value))

      let valueRaglerPassword = ralglarPassword.test(e.target.value)

      if(valueRaglerPassword == true){
        $(".alert-password").hide(500)
      }
      else(
        $(".alert-password").show(500)
      )
})


/*****************RePassword***********************/

inputRepassword.addEventListener("keyup" , function(e){

      // console.log(ralglarPassword.test("Name"+e.target.value))

      if(inputPassword.value == inputRepassword.value){
        $(".alert-RePassword").hide(500)
      }
      else(
        $(".alert-RePassword").show(500)
      )
})
