import clsx from 'clsx';
export default function Button(props){

    const classes = clsx({
        btn:true,
        
    })

    const {children, ...rest} = props
    
    return (
        <button className={classes} {...rest}>{children}</button>
    )
}