
export const Savetolocalstorage = (state) => {
    try{
        const serialstate = JSON.stringify(state);
        localStorage.setItem('gamestoplay', serialstate)
    }
    catch(e){
        console.warn(e)
    }
}

export const Getfromlocalstorage = () => {
    try{
        const serialstate = localStorage.getItem('gamestoplay');
        if(serialstate === null){
            return undefined;
        }
        else return JSON.parse(serialstate)
    }
    catch(e){
        console.ward(e);
        return undefined;
    }
}


