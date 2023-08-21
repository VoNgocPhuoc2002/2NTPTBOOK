const list = document.getElementById('product-list')

const getDataProducts = async ()=>{
    const respone = await fetch("http://localhost:3000/product/")
    const {results}= await respone.json()
    console.log("results",results)
}