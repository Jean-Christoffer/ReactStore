import clsx from 'clsx';
export default function Button(props){
    const {children, themeSwitcher,extraClass, ...rest} = props
    const classes = clsx({
        btn:true,
        themeSwitcher: themeSwitcher === 'themeSwitcher',

        
    },extraClass)


    
    return (
        <button  className={classes} {...rest}>{children}</button>
    )
}