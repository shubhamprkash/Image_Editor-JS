

const inputFile =document.querySelector(".file-input"),
 filterOptions = document.querySelectorAll(".filter button"),
 filterName = document.querySelector(".filter-info .name"),
 sliderValue=document.querySelector(".slider .value"),
 filterSlider = document.querySelector(".slider input"),
 container = document.querySelector(".container"),
 rotateOptions = document.querySelectorAll(".rotate button")
 previewImg = document.querySelector(".preview-img img"),
 chooseImgBtn = document.querySelector(".choose-img")
;

let brightness = 100, saturation = 100, inversion = 0, 
    grayscale = 0, rotate = 0,flipHorizontal = 1, flipVertical = 1;

function applyFilters(){
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical} )`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    // console.log(brightness);
}


const loadImg = ()=>{
    let file = inputFile.files[0];
    if(!file) return;
    // console.log(file)
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load",()=> {
        container.classList.remove("disable");
    })
}

/* ***********event listers for all filter options********/

filterOptions.forEach(option =>{
   option.addEventListener("click", ()=>{
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
        filterName.textContent = option.textContent;

        if(option.id === "brightness"){
            filterSlider.max = "200";
            filterSlider.value = brightness;
            sliderValue.textContent = `${brightness}`;
        }else if(option.id === "saturation"){
            filterSlider.max = "200";
            filterSlider.value = saturation;
            sliderValue.textContent = `${saturation}`;
        }else if(option.id === "inversion"){
           filterSlider.max = "100";
            filterSlider.value = inversion;
            sliderValue.textContent = `${inversion}`;
        }else{
            filterSlider.max = "100";
            filterSlider.value = grayscale;
            sliderValue.textContent = `${grayscale}`;
        }
    });
});


/*  *********** Changing and printing the slider value  */

function updateFilter(){
    // console.log(filterSlider.value);
    sliderValue.innerText = `${filterSlider.value } %`;
    const selectedFilter = document.querySelector(".filter .active")

    if(selectedFilter.id === "brightness" ){
        brightness = filterSlider.value;
    }
    else if(selectedFilter.id === "saturation"){
        saturation = filterSlider.value;
    }
    else if(selectedFilter.id === "inversion"){
        inversion = filterSlider.value;
    }
    else {
        grayscale = filterSlider.value;
    }
    applyFilters();
};

rotateOptions.forEach(option => {
    option.addEventListener("click",()=>{
        // console.log(option);
        if(option.id=== "left"){
            rotate -= 90;
        }else if(option.id === "right"){
            rotate += 90;
        }
        else if(option.id === "horizontal"){
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        }
        else {
            flipVertical = flipVertical === 1 ? -1 : 1;
        }
        applyFilters();
    });
})


inputFile.addEventListener("change", loadImg);
filterSlider.addEventListener("input", updateFilter);
chooseImgBtn.addEventListener("click", ()=>inputFile.click());

