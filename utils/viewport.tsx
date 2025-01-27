

  function is(limit: 'max' | 'min', viewport: number) {
    if(typeof window !== 'undefined') {
      let match = window.matchMedia(`(${limit}-width: ${viewport}px)`).matches;
    let height = window.innerHeight;
    return match;
    }
  }
  
  export default is;