const root = document.documentElement.style
let scrollBody;

const scrollActive = () => {
    scrollBody = scrollY
}

const executeTimeout = ( functionExecute, time ) => setTimeout(functionExecute,time)

const setCustomProperties = (property, value) => root.setProperty(property,value)

document.addEventListener('scroll', () => {
    executeTimeout( scrollActive , 200 )
    if(scrollY > 100) setCustomProperties('--size-menu', 60+'px')
    if(scrollY < 100) setCustomProperties('--size-menu', 100+'px')
    if(scrollY > scrollBody && scrollY > 300) setCustomProperties('--size-menu', 0)
})