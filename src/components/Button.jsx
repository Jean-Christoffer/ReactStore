import clsx from 'clsx';
export default function Button(props){
    const {children, themeSwitcher,extraClass,addToCart,checkOutBtn, ...rest} = props
    const classes = clsx({
        btn:true,
        themeSwitcher: themeSwitcher,
        'add-to-cart-btn': addToCart,
        'check-out-btn':checkOutBtn

        
    },extraClass)


    
    return (
        <button  className={classes} {...rest}>{children}</button>
    )
}