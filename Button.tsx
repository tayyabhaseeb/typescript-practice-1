

// Method 1

// type ComponentProp = React.ComponentPropsWithoutRef<'button'>


// export default function Button({children , onClick}: ComponentProp){
//   return(
//     <button onClick={onClick}>{children}</button>
//   )
// }


// Method 2


// type ComponentProp = {
//   children: React.ReactNode,
//   onClick : React.MouseEventHandler<HTMLButtonElement> 

  
// }

// export default function Button({children , onClick}: ComponentProp) {
//   return (
//     <button onClick={onClick}>{children}</button>
//   )
// }


//  Method 3


// type ComponentProp = React.PropsWithChildren<{
//   onClick : () => void
// }>

// export default function Button({children , onClick}: ComponentProp) {
//   return (
//     <button onClick={onClick}>{children}</button>
//   )
// }


// Method 1 & 3  are special cases


import React from 'react'

export default function Button() {
  return (
    <div>Button</div>
  )
}
