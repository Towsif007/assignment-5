// Eight GB Memory 
document.getElementById('eight-gb-memory').addEventListener('click',function () {
    const eightGbMemory = document.getElementById('memory-cost');
    const memoryCost = parseInt(0) 
    eightGbMemory.innerText = memoryCost;
    // calculateTotalPrice()

 // total
const total = document.getElementById('total-price');
total.innerText = parseInt(1299) + memoryCost;
   
    
});
// Sixteen GB Memory 
document.getElementById('sixteen-gb-memory').addEventListener('click',function () {
    const sixteenGbMemory = document.getElementById('memory-cost');
    const memoryCost  = parseInt(180);
    sixteenGbMemory.innerText = memoryCost
    // calculateTotalPrice()
   
// total
    const total = document.getElementById('total-price');
    total.innerText = parseInt(1299) + memoryCost;
    
});

//  256GB ssd storage 

document.getElementById('two-fifty-six-storage').addEventListener('click', function() {
    const twoFiftySixSsd = document.getElementById('storage-cost');
    const storageCost =  parseInt(0);
    twoFiftySixSsd.innerText = storageCost;
    // calculateTotalPrice()



// total
    const total = document.getElementById('total-price');
    total.innerText = parseInt(1299) + storageCost
});

//  512GB ssd storage 
document.getElementById('fifty-one-two-storage').addEventListener('click', function(){
    const FiftyOneTwoSsd = document.getElementById('storage-cost');
    const storageCost = parseInt(100);
    FiftyOneTwoSsd.innerText = storageCost;
    // calculateTotalPrice()



    // total 
    const total = document.getElementById('total-price');
    total.innerText = parseInt(1299) + storageCost;
})

//  1tb ssd storage 
document.getElementById('one-tb-storage').addEventListener('click', function(){
    const oneTbSsd = document.getElementById('storage-cost');
    const storageCost = parseInt(180);
    oneTbSsd.innerText = storageCost;
    // calculateTotalPrice()


 // total 
 const total = document.getElementById('total-price');
 total.innerText = parseInt(1299)  + storageCost;

})

// Free Delivery 
document.getElementById('free-prime-delivery').addEventListener('click', function(){
    const freePrimeDelivery = document.getElementById('delivery-charge');
    const deliveryCharge = parseInt(0);
    freePrimeDelivery.innerText = deliveryCharge; 
    // calculateTotalPrice()
})

// Delivery with charge 
document.getElementById('delivery-charge-twenty').addEventListener('click', function(){
    const DeliveryWithCharge = document.getElementById('delivery-charge');
    const deliveryCharge =  parseInt(20);
    DeliveryWithCharge.innerText = deliveryCharge;
    // calculateTotalPrice()   
})

function calculateTotalPrice(){
    const totalPrice = memoryCost + deliveryCharge + storageCost ;


    document.getElementById('total-price').innerText = totalPrice;
}