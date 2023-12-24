'use Client'
import {createContext,useContext,useState,useCallback,useEffect} from 'react'
import toast from 'react-hot-toast';

export const CartContext=createContext(null)

export const CartContextProvider=(props)=>{

    const [cartTotalQty, setcartTotalQty] = useState(0)
    const [wishListTotalQty, setWishListTotalQty] = useState(0)
     const [cartProducts, setcartProducts] = useState(null)
     const [WishListProducts, setWishListProducts] = useState(null)
     const [cartTotal, setcartTotal] = useState(0)
     const [wishListTotal, setWishListTotal] = useState(0)
     const [paymentIntent, setpaymentIntent] = useState(null)
     const [openn,setOpenn]=useState(false)

     useEffect(() => {
       const cartItems=localStorage.getItem('CartItems')
       const wishListItems=localStorage.getItem('WishListItems')
      const  cProducts=JSON.parse(cartItems)
      const  wProducts=JSON.parse(wishListItems)
      const ethioMarketPi=localStorage.getItem('ethioMarket')
      const paymentIntent=JSON.parse(ethioMarketPi)
        

      setWishListProducts(wProducts)
        setcartProducts(cProducts)
        setpaymentIntent(paymentIntent)
     }, []);

      useEffect(() => {
       const getTotal=()=>{
        if(cartProducts){
            const {total,qty}=cartProducts?.reduce((acc,item)=>{
              const itemTotal=item.price*item.quantity
    
                acc.total +=itemTotal
                acc.qty +=item.quantity
    
                return acc
            },{
                total:0,
                qty:0
            })
            setcartTotalQty(qty)
            setcartTotal(total)
        }
       
       }
       getTotal();
      }, [cartProducts])

      useEffect(() => {
        const getTotal=()=>{
         if(WishListProducts){
             const {total,qty}=WishListProducts?.reduce((acc,item)=>{
               const itemTotal=item.price*item.quantity
     
                 acc.total +=itemTotal
                 acc.qty +=item.quantity
     
                 return acc
             },{
                 total:0,
                 qty:0
             })
             setWishListTotalQty(qty)
             setWishListTotal(total)
         }
        
        }
        getTotal();
       }, [WishListProducts])
      
     

     const handleAddToCart=useCallback(
       (product) => {
         setcartProducts((prev)=>{
            let updateCart;
            if(prev){
                updateCart=[...prev,product]
            }else{
                updateCart=[product]
            }
             toast.success('product added to cart')
            localStorage.setItem('CartItems',JSON.stringify(updateCart))
            return updateCart
         })
       },
       [],
     )
     const handleAddToWishList=useCallback(
      (product) => {
        setWishListProducts((prev)=>{
           let updateCart;
           if(prev){
               updateCart=[...prev,product]
           }else{
               updateCart=[product]
           }
            toast.success('product added to WishList')
           localStorage.setItem('WishListItems',JSON.stringify(updateCart))
           return updateCart
        })
      },
      [],
    )
     const handleRemoveCart=useCallback(
       (product) => {
         const filterProduct=cartProducts.filter((item)=>{
            return item.id !== product.id
         })
         setcartProducts(filterProduct)
         toast.success('product removed')
         localStorage.setItem('CartItems',JSON.stringify(filterProduct))
       },
       [cartProducts],
     )

     const handleRemoveWishList=useCallback(
      (product) => {
        const filterProduct=WishListProducts.filter((item)=>{
           return item.id !== product.id
        })
        setWishListProducts(filterProduct)
        toast.success('product removed')
        localStorage.setItem('WishListItems',JSON.stringify(filterProduct))
      },
      [WishListProducts],
    )
     
    const handleCartQtyInc=useCallback(
      (product) => {
    let updatedCart;
    if(product.quantity == 99){
        return toast.error("Oop! Maximum reached")
    }
    if(cartProducts){
        updatedCart=[...cartProducts]

        const existingIndex=cartProducts.findIndex((item)=>
            item.id===product.id
        );
        if(existingIndex > -1){
            updatedCart[existingIndex].quantity=++updatedCart[existingIndex].quantity;
        }
        setcartProducts(updatedCart)
        localStorage.setItem('CartItems',JSON.stringify(updatedCart))
    }
      },  
  
    
      [cartProducts],
    )
    
    const handleCartQtyDec=useCallback(
        (product) => {
      let updatedCart;
      if(product.quantity > -1){
          return toast.error("Oop! Minimum reached")
      }
      if(cartProducts){
          updatedCart=[...cartProducts]
  
          const existingIndex=cartProducts.findIndex((item)=>
              item.id===product.id
          );
          if(existingIndex > -1){
              updatedCart[existingIndex].quantity=--updatedCart[existingIndex].quantity;
          }
          setcartProducts(updatedCart)
          localStorage.setItem('CartItems',JSON.stringify(updatedCart))
      }
        },  
    
      
        [cartProducts],
      )

      const handleClearCart=useCallback(
        () => {
          setcartProducts(null)
          setcartTotalQty(0)
          localStorage.setItem('CartItems',JSON.stringify(null))
        },
        [cartProducts],
      )
      const handleSetPaymentIntent=useCallback(
        (val) => {
          setpaymentIntent(val)
          localStorage.setItem('ethioMarket',JSON.stringify(val));
        },
        [paymentIntent],
      )
      


    const value={
        openn,
        setOpenn,
        wishListTotalQty,
        cartTotalQty,
        cartTotal,
        wishListTotal,
        cartProducts,
        handleAddToCart,
        WishListProducts,
        handleAddToWishList,
        handleRemoveWishList,
        handleRemoveCart,
        handleCartQtyInc,
        handleCartQtyDec,
        handleClearCart,
        paymentIntent,
        handleSetPaymentIntent,
        
    }
    return <CartContext.Provider value={value} {...props}/>
};

export const useCart=()=>{
    const context=useContext(CartContext);
    if(context===null){
        throw new Error("useCart must be used within a cartcontextprovider")
    }
    return context
}