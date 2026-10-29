
console.log("reduce method")
const cartitems=["Laptop","Bag","Mobile","Dress"]
const cartitemsprice=[70000,1500,30500,4000]
const cartitemprice=cartitemsprice.reduce((total,cartitemsprice)=>total+cartitemsprice)
console.log("Total Price of the cart items :  " + cartitemprice)

console.log("filter method")
const products=["choclate","icecream","Biscuit","Biriyani","Chips","Juice"]
const productprice=[510,700,200,800,610,150]
const productpricefilter=productprice.filter((productprice)=>productprice>500)
console.log("Products amount more than 500 rupees: " + productpricefilter)
