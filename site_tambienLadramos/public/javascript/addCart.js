console.log('addCart connected');

let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

document.getElementById('totalItems').textContent = cart.length;

const addCart = async (id) => {

    try {
        let response = await fetch('/api/products/' + id);
        let result = await response.json();
        if(result.ok) {
            let {id,images,title,weight, price} = result.data
            let newProduct = {
                id,
                image : images[0].name,
                title,
                weight,
                price,
                quantity : 1,
            }
            let cartItem = cart.find(item => item.id == newProduct.id);
            if(!cartItem){
                cart = [...cart, newProduct];
            }else{
                cart = cart.map(item => {
                    if(item.id == newProduct.id){
                        return {
                            ...item,
                            quantity : item.quantity + 1
                        }
                    }
                    return item
                })
            }
            document.getElementById('totalItems').textContent = cart.length;
            localStorage.setItem('cart',JSON.stringify(cart))
        }
    
    } catch (error) {
        console.error(result);
    }

}