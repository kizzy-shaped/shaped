export default class Handler {

    loadPg  = (fnToRn: () => void) => {
        window.addEventListener('load', fnToRn);
    }
    
    onScroll = (fnToRn: (this: Window, ev: Event) => any) => {
        window.addEventListener('scroll', fnToRn);
    }
    
}