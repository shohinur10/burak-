console.log("Products frontend javascript file");

$(function(){
    $(".product-collection").on("change",()=>{
        const selectedValue = $(".product-collection").val();
        if (selectedValue ==="DRINK"){
            $("#product-collection").hide();
            $("#product-volume").show();
        }else{
            $("#product-volume").hide();
            $("#product-collection").show();
        }
    });
    $("#process-btn").on("click", () =>{
        $(".dish-container").slideToggle(500);
        $("#process-btn").css("display","none");
    });

    $("#cancel-btn").on("click", () =>{
        $(".dish-container").slideToggle(100);
        $("#process-btn").css("display","flex");
    });
});

 
function validateForm() {
    const productName = $(".product-name").val();
    const productPrice = $(".product-price").val();
    const productLeftCount = $(".product-left-count").val();
    const productCollection = $(".product-collection").val();
    const productStatus = $(".product-status").val();
    const productDesc = $(".product-desc").val();
    
    if (
        productName === "" ||
        productPrice === "" ||
        productLeftCount === "" ||
        productCollection === "" ||
        productStatus === "" ||
        productDesc === "" 
    ) {
        alert("Please insert all required inputs!");
        return false;
    } else return true;
}

function previewFileHandler(input, order) {
    const imgClassName = input.className;
    console.log("input:", input);

    // Corrected jQuery selector and used backticks for string interpolation
    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType = file["type"];
    
    // Ensure the variable is properly declared before usage
    const validImageTypes = ["image/jpg", "image/jpeg", "image/png"];

    if (!validImageTypes.includes(fileType)) {
        alert("Please insert only jpeg, jpg, and png");
    } else {
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                $(`#image-section-${order}`).attr("src", reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
}

