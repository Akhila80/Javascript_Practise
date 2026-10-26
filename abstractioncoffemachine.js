 class abstractioncoffemachine {
#boiledwater(){
    console.log("Heating Water")
}
#addmilk(){
    console.log("added milk")
}
#addsugar(){
    console.log("added sugar")
}
#addcoffepowder(){
    console.log("added coffee powder")
}
makeyourcoffee(){
    console.log("coffee machine turned on")
    this.#boiledwater()
    this.#addmilk()
    this.#addsugar()
    this.#addcoffepowder()
}
}
const coffeobj=new abstractioncoffemachine()
coffeobj.makeyourcoffee()