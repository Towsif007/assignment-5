// Eight GB Memory 
document.getElementById('eight-gb-memory').addEventListener('click',function () {
    const extraGbMemory = document.getElementById('memory-cost');
    const memoryCostFree = parseInt(0) 
    extraGbMemory.innerText = memoryCostFree;
    
    // total 
    const total = document.getElementById('total-price');
    total.innerText = parseInt(1299) + memoryCostFree;  

    // calculateTotalPrice()
 
});
// Sixteen GB Memory 
document.getElementById('sixteen-gb-memory').addEventListener('click',function () {
    
    const extraGbMemory = document.getElementById('memory-cost');
    const memoryCost  = parseInt(180);
    extraGbMemory.innerText = memoryCost;


    // calculateTotalPrice()
   
// total
    const total = document.getElementById('total-price');
    total.innerText = parseInt(1299) + memoryCost;
    
});

//  256GB ssd storage 

document.getElementById('two-fifty-six-storage').addEventListener('click', function() {
    const extraSsdStorage = document.getElementById('storage-cost');
    const firstStorageCost =  parseInt(0);
    extraSsdStorage.innerText = firstStorageCost;


    // calculateTotalPrice()



// total
    const total = document.getElementById('total-price');
    total.innerText = parseInt(1299) + firstStorageCost
});

//  512GB ssd storage 
document.getElementById('fifty-one-two-storage').addEventListener('click', function(){
    const extraSsdStorage = document.getElementById('storage-cost');
    const secondStorageCost = parseInt(100);
    extraSsdStorage.innerText = secondStorageCost;
    // calculateTotalPrice()



    // total 
    const total = document.getElementById('total-price');
    total.innerText = parseInt(1299) + secondStorageCost;
})

//  1tb ssd storage 
document.getElementById('one-tb-storage').addEventListener('click', function(){
    const extraSsdStorage = document.getElementById('storage-cost');
    const thirdStorageCost = parseInt(180);
    extraSsdStorage.innerText = thirdStorageCost;
    // calculateTotalPrice()


 // total 
 const total = document.getElementById('total-price');
 total.innerText = parseInt(1299)  + thirdStorageCost;

})

// Free Delivery 
document.getElementById('free-prime-delivery').addEventListener('click', function(){
    const extraDeliveryCharge= document.getElementById('delivery-charge');
    const deliveryFreeCharge = parseInt(0);
    extraDeliveryCharge.innerText = deliveryFreeCharge; 

 // total 
 const total = document.getElementById('total-price');
 total.innerText = parseInt(1299)  + deliveryFreeCharge;

    // calculateTotalPrice()
})

// Delivery with charge 
document.getElementById('delivery-charge-twenty').addEventListener('click', function(){
    const extraDeliveryCharge = document.getElementById('delivery-charge');
    const deliveryCharge =  parseInt(20);
    extraDeliveryCharge.innerText = deliveryCharge;

    // total 
 const total = document.getElementById('total-price');
 total.innerText = parseInt(1299) + deliveryCharge;


    // calculateTotalPrice()   
})

// calculation Total 

// const bestPrice = document.getElementById('best-price');
// bestPrice.innerText = parseInt(1299);
// const total = document.getElementById('total-price');
// total.innerText = parseInt(1299) 










// promo code section 
document.getElementById('apply').addEventListener('click', function(){  
   
    const promoCode = document.getElementById('promo');
    const promoText = promoCode.value;
    const totalAfterDiscount = document.getElementById('total-with-discount');
    const totalAfterDiscountText = totalAfterDiscount.innerText;

     total = parseFloat(totalAfterDiscountText);
    
     
    if(promoCode.value == 'stevekaku'){
      
        totalAfterDiscount.innerText = parseFloat(total) * 0.20;
       
        
    }
})



