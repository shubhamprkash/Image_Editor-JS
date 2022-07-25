

const inputFile =document.querySelector(".file-input"),
 filterOptions = document.querySelectorAll(".filter button"),
 chooseImgBtn = document.querySelector(".choose-img"),
 previewImg = document.querySelector(".preview-img img"),
 container = document.querySelector(".container"),
 filterSlider = document.querySelector(".slider input"),
 sliderValue=document.querySelector(".slider .value"),
 filterName = document.querySelector(".filter-info .name")
;


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
    });
});

const updateFilter = ()=> {
    console.log(filterSlider.value);
    sliderValue.innerText = `${parseInt(filterSlider.value) } %`;
}

inputFile.addEventListener("change", loadImg);
filterSlider.addEventListener("input", updateFilter);
chooseImgBtn.addEventListener("click", ()=>inputFile.click());

